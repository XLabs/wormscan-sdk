import { APIClient } from "src/api-client";
import { ChainId, DefaultPageRequest, PageRequest, VAASearchCriteria } from "src/model";
import { _get } from "src/utils/Objects";

import crossChainResponse from "./mocks/crossChainResponse.json";
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export type Observation = {
  hash: string;
  guardianAddr: string;
  signature: string;
} & Omit<VAADetail, "guardianSetIndex" | "vaa" | "timestamp">;

export type VAADetail = {
  sequence: number;
  id: string;
  version: number;
  emitterChainId: ChainId;
  emitterAddr: string;
  guardianSetIndex: number;
  vaa: string;
  timestamp: Date;
  updatedAt: Date;
  indexedAt: Date;
  txHash: string;
};

export type VAACount = {
  chainId: ChainId;
  count: number;
};

export type CrossChainActivity = {
  chainId: ChainId;
  percentage: number;
  "num-txs": number;
  destination: {
    chainId: ChainId;
    percentage: number;
    "num-txs": number;
  }[];
}[];

export class GuardianNetwork {
  constructor(private readonly _client: APIClient) {}

  async getVAA(): Promise<VAADetail[]>;
  async getVAA(criteria: VAASearchCriteria): Promise<VAADetail[]>;
  async getVAA(criteria: VAASearchCriteria, page: PageRequest): Promise<VAADetail[]>;
  async getVAA(criteria: VAASearchCriteria = null, page: PageRequest = DefaultPageRequest) {
    const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/vaas", criteria);
    const payload = await this._client.doGet<any>(effectivePath, { ...page });
    const result = _get(payload, "data", []);
    if (result.map) {
      return result.map(this._mapVAA);
    }
    return this._mapVAA(result);
  }

  async getVAACount(): Promise<VAACount[]> {
    const payload = await this._client.doGet<any>("/vaas/vaa-counts");
    const result = _get(payload, "data", []);
    return result.map(this._mapVAACount);
  }

  // TODO: REPLACE MOCKED ENDPOINT FOR REAL ENDPOINT WHEN IT GETS DONE
  // https://github.com/wormhole-foundation/wormhole-explorer/issues/139
  async getCrossChainActivity(): Promise<CrossChainActivity> {
    await delay(1200);
    const payload = crossChainResponse;
    const result = _get(payload, "txs", []);
    return result;
  }

  async getObservation(): Promise<Observation[]>;
  async getObservation(criteria: VAASearchCriteria): Promise<Observation[]>;
  async getObservation(criteria: VAASearchCriteria, page: PageRequest): Promise<Observation[]>;
  async getObservation(criteria: VAASearchCriteria = null, page: PageRequest = DefaultPageRequest) {
    const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/observations", criteria);
    const payload = await this._client.doGet<[]>(effectivePath, { ...page });
    return (payload || []).map(this._mapObservation);
  }

  private _vaaSearchCriteriaToPathSegmentFilter(prefix: string, criteria: VAASearchCriteria) {
    const { chainId, emmiter, specific } = criteria || {};
    const { sequence, signer, hash } = specific || {};
    return [prefix, chainId, emmiter, sequence, signer, hash]
      .filter(segment => !!segment)
      .join("/");
  }

  private _mapVAACount = ({ chainId, count }: any): VAACount => ({ chainId, count });

  private _mapObservation = ({
    sequence,
    id,
    version,
    emitterChain,
    emitterAddr,
    hash,
    txHash,
    guardianAddr,
    signature,
    updatedAt,
    indexedAt,
  }: any): Observation => ({
    sequence,
    id,
    version,
    emitterChainId: emitterChain,
    emitterAddr,
    hash,
    txHash,
    guardianAddr,
    signature,
    updatedAt: new Date(updatedAt),
    indexedAt: new Date(indexedAt),
  });

  private _mapVAA = ({
    sequence,
    id,
    version,
    emitterChain,
    emitterAddr,
    guardianSetIndex,
    vaa,
    timestamp,
    updatedAt,
    indexedAt,
    txHash,
  }: any): VAADetail => ({
    sequence,
    id,
    version,
    emitterChainId: emitterChain,
    emitterAddr,
    guardianSetIndex,
    vaa,
    timestamp: new Date(timestamp),
    updatedAt: new Date(updatedAt),
    indexedAt: new Date(indexedAt),
    txHash,
  });
}
