import { Pagination } from "src/types";

export interface FindVAAByAddressOutput {
  data: Data;
  pagination: Pagination;
}

export interface Data {
  vaas: VAA[];
}

export interface VAA {
  appId: string;
  emitterAddr: string;
  emitterChain: number;
  guardianSetIndex: number;
  id: string;
  indexedAt: string;
  nativeTxHash: string;
  payload: any;
  timestamp: string;
  txHash: string;
  updatedAt: string;
  vaa: number[];
  version: number;
}
