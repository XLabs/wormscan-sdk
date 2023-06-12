import { PageRequest } from "src/model";
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

export type GetTokenInput = {
  chainId: number;
  tokenAddress: string;
};

export type GetTokenOutput = {
  symbol: string;
  coingeckoId: string;
  decimals: number;
};

export type GetTokenPriceInput = {
  coingeckoId: string;
  query: {
    date: string;
    localization?: boolean;
  };
};

export type GetTokenPriceOutput = {
  usd: number;
};

export type GetTransactionsInput = {
  query?: {
    address?: string;
  };
  pagination?: PageRequest;
};

export type GetTransactionsOutput = {
  id: string;
  timestamp: string;
  txHash: string;
  originChain: number;
  destinationAddress?: string;
  destinationChain?: number;
  tokenAmount?: string;
  usdAmount?: string;
  symbol?: string;
  status: string;
};
