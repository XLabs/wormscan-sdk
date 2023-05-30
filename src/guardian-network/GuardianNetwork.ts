import { APIClient } from "src/api-client";
import { DefaultPageRequest, PageRequest, VAASearchCriteria } from "src/model";
import { _get } from "src/utils/Objects";

import crossChainResponse from "./mocks/crossChainResponse.json";
import {
  AssetsByVolumeInput,
  AssetsByVolumeOutput,
  ChainPairsByTransfersInput,
  ChainPairsByTransfersOutput,
  CrossChainActivity,
  DateRange,
  GetVAAByTxHashInput,
  GetVAAInput,
  GlobalTxInput,
  GlobalTxOutput,
  LastTxs,
  Observation,
  ScoresOutput,
  VAACount,
  VAADetail,
} from "./types";
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class GuardianNetwork {
  constructor(private readonly _client: APIClient) {}

  async getScores(): Promise<ScoresOutput> {
    return await this._client.doGet<ScoresOutput>("/scorecards");
  }

  async getVAA({
    chainId,
    emitter,
    seq,
    query,
    pagination = DefaultPageRequest,
  }: GetVAAInput): Promise<VAADetail> {
    const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/vaas", {
      chainId,
      emitter,
      seq,
    });
    const payload = await this._client.doGet<VAADetail>(effectivePath, { ...query, ...pagination });
    const result = _get(payload, "data", []);
    if (result.map) {
      return result.map(this._mapVAA);
    }
    return this._mapVAA(result);
  }

  async getVAAbyTxHash({ query }: GetVAAByTxHashInput): Promise<VAADetail> {
    const payload = await this._client.doGet<VAADetail>("/vaas/", { ...query });
    const result = _get(payload, "data", []);
    if (result.map) {
      return result.map(this._mapVAA)[0];
    }
    return this._mapVAA(result);
  }

  async getGlobalTx({ chainId, emitter, seq, query }: GlobalTxInput): Promise<GlobalTxOutput> {
    const payload = await this._client.doGet<GlobalTxOutput>(
      `/global-tx/${chainId}/${emitter}/${seq}`,
      {
        ...query,
      },
    );
    return payload;
  }

  async getVAACount(): Promise<VAACount[]> {
    const payload = await this._client.doGet<any>("/vaas/vaa-counts");
    const result = _get(payload, "data", []);
    return result.map(this._mapVAACount);
  }

  async getAssetsByVolume(
    params: AssetsByVolumeInput = { timeSpan: "7d" },
  ): Promise<AssetsByVolumeOutput[]> {
    const payload = await this._client.doGet<AssetsByVolumeOutput>("/top-assets-by-volume", {
      ...params,
    });
    const result = _get(payload, "assets", []);
    return result;
  }

  async getChainPairsByTransfers(
    params: ChainPairsByTransfersInput = { timeSpan: "7d" },
  ): Promise<ChainPairsByTransfersOutput[]> {
    const payload = await this._client.doGet<AssetsByVolumeOutput>(
      "/top-chain-pairs-by-num-transfers",
      { ...params },
    );
    const result = _get(payload, "chainPairs", []);
    return result;
  }

  // TODO: REPLACE MOCKED ENDPOINT FOR REAL ENDPOINT WHEN IT GETS DONE
  // https://github.com/wormhole-foundation/wormhole-explorer/issues/139
  async getCrossChainActivity(): Promise<CrossChainActivity> {
    await delay(1200);
    const payload = crossChainResponse;
    const result = _get(payload, "txs", []);
    return result;
  }

  async getLastTxs(range: DateRange): Promise<LastTxs> {
    const timeSpan = { day: "1d", week: "1w", month: "1mo" };
    const sampleRate = { day: "1h", week: "1d", month: "1d" };

    return await this._client.doGet<LastTxs>(
      `/last-txs?timeSpan=${timeSpan[range]}&sampleRate=${sampleRate[range]}`,
    );
  }

  async getObservation(): Promise<Observation[]>;
  async getObservation(criteria: VAASearchCriteria): Promise<Observation[]>;
  async getObservation(criteria: VAASearchCriteria, page: PageRequest): Promise<Observation[]>;
  async getObservation(criteria: VAASearchCriteria = null, page: PageRequest = DefaultPageRequest) {
    const effectivePath = this._observationCriteriaToPathSegmentFilter("/observations", criteria);
    const payload = await this._client.doGet<[]>(effectivePath, { ...page });
    return (payload || []).map(this._mapObservation);
  }

  private _vaaSearchCriteriaToPathSegmentFilter(
    prefix: string,
    criteria: {
      chainId: number;
      emitter: string;
      seq: number;
    },
  ) {
    const { chainId, emitter, seq } = criteria || {};
    return [prefix, chainId, emitter, seq].filter(segment => !!segment).join("/");
  }

  private _observationCriteriaToPathSegmentFilter(prefix: string, criteria: VAASearchCriteria) {
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
    appId,
    payload,
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
    appId,
    payload,
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
    appId,
    payload,
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
    appId,
    payload,
  });
}
