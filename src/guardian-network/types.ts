import { ChainId } from "src/model";

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

export type LastTxs = {
  time: string;
  count: number;
}[];

export type DateRange = "day" | "week" | "month";

export interface ScoresOutput {
  tvl: string;
  total_volume: string;
  total_tx_count: string;
  "24h_volume": string;
  "24h_tx_count": string;
  "24h_messages": string;
}

export interface AssetsByVolumeInput {
  timeSpan?: "7d" | "15d" | "30d";
}
export interface AssetsByVolumeOutput {
  emitterChain: number;
  symbol: string;
  tokenChain: number;
  tokenAddress: string;
  volume: string;
}

export interface ChainPairsByTransfersInput {
  timeSpan?: "7d" | "15d" | "30d";
}
export interface ChainPairsByTransfersOutput {
  emitterChain: number;
  destinationChain: number;
  numberOfTransfers: string;
}
