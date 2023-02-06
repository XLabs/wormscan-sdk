import { ChainId } from "./ChainId";

type TSortOptions = {
  page?: number;
  pageSize?: number;
  sortOrder?: "ASC" | "DESC";
};

type Pagination = {
  next: string;
};

export interface IHealth {
  status: string;
}

export type TGovernorConfiguration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nodename: string;
  counter: number;
  chains: {
    chainid: ChainId;
    notionallimit: number;
    bigtransactionsize: number;
  }[];
  tokens: {
    originchainid: ChainId;
    originaddress: string;
    price: number;
  }[];
};

export interface IGovernorsConfigurationInput extends TSortOptions {}
export interface IGovernorsConfiguration {
  data: TGovernorConfiguration[];
  pagination: Pagination;
}

export interface IGovernorsConfigurationByGuardianIdInput extends TSortOptions {
  guardianId: string;
}
export interface IGovernorsConfigurationByGuardianId {
  data: TGovernorConfiguration;
  pagination: Pagination;
}

export type TGovernorEnqueuedVAAs = {
  chainId: ChainId;
  emitterAddress: string;
  notionalValue: number;
  sequence: string;
  txHash: string;
};
export type TGovernorsEnqueuedVAAs = {
  chainId: ChainId;
  enqueuedVAAs: TGovernorEnqueuedVAAs[];
};

export interface IGovernorsEnqueuedVAAsInput extends TSortOptions {}
export interface IGovernorsEnqueuedVAAs {
  data: TGovernorsEnqueuedVAAs[];
  pagination: Pagination;
}

export interface IGovernorsEnqueuedVAAsByChainIdInput extends TSortOptions {
  chainId: ChainId;
}
export interface IGovernorEnqueuedVAAsByChainId {
  data: TGovernorEnqueuedVAAs[];
  pagination: Pagination;
}

export type TGovernorsLimit = {
  availableNotional: number;
  chainId: ChainId;
  maxTransactionSize: number;
  notionalLimit: number;
};

export interface IGovernorsLimitInput extends TSortOptions {}
export interface IGovernorsLimit {
  data: TGovernorsLimit[];
  pagination: Pagination;
}

export interface IGovernorMaxAvailableNotionalInput extends TSortOptions {
  chainId: ChainId;
}
export interface IGovernorMaxAvailableNotional {
  data: {
    availableNotional: number;
    chainId: ChainId;
    createdAt: string;
    emitters: {
      emitterAddress: string;
      enqueuedVAAs: number;
      totalEnqueuedVAAs: number;
    }[];
    id: string;
    nodeName: string;
    updatedAt: string;
  };
  pagination: Pagination;
}

export type TGovernorAvailableNotional = {
  availableNotional: number;
  chainId: ChainId;
  createdAt?: string;
  id?: string;
  nodeName?: string;
  updatedAt?: string;
};

export interface IGovernorAvailableNotionalInput extends TSortOptions {}
export interface IGovernorAvailableNotional {
  data: TGovernorAvailableNotional[];
  pagination: Pagination;
}

export interface IGovernorAvailableNotionalByChainIdInput extends TSortOptions {
  chainId: ChainId;
}
export interface IGovernorAvailableNotionalByChainId {
  data: TGovernorAvailableNotional[];
  pagination: Pagination;
}

export type TGovernorLimitNotional = {
  chainId: ChainId;
  createdAt: string;
  id: string;
  maxTransactionSize: number;
  nodename: string;
  notionalLimit: number;
  updatedAt: string;
};

export interface IGovernorLimitNotionalInput extends TSortOptions {}
export interface IGovernorLimitNotional {
  data: TGovernorLimitNotional[];
  pagination: Pagination;
}

export interface IGovernorLimitNotionalByChainIdInput extends TSortOptions {
  chainId: ChainId;
}
export interface IGovernorLimitNotionalByChainId {
  data: TGovernorLimitNotional[];
  pagination: Pagination;
}

export type TGovernorStatus = {
  chains: {
    chainid: ChainId;
    emitters: {
      emitteraddress: string;
      enqueuedVAAs: string;
      totalenqueuedVAAs: number;
    }[];
    remainingavailablenotional: number;
  }[];
  createdAt: string;
  id: string;
  nodename: string;
  updatedAt: string;
};

export interface IGovernorStatusInput extends TSortOptions {}
export interface IGovernorStatus {
  data: TGovernorStatus[];
  pagination: Pagination;
}

export interface IGovernorStatusByGuardianIdInput extends TSortOptions {
  guardianId: string;
}
export interface IGovernorStatusByGuardianId {
  data: TGovernorStatus;
  pagination: Pagination;
}

export type TObservation = {
  emitterAddr: string;
  emitterChain: number;
  guardianAddr: string;
  hash: number[];
  id: string;
  indexedAt: string;
  sequence: string;
  signature: number[];
  txHash: number[];
  updatedAt: string;
  version: number;
};

export interface IObservationsInput extends TSortOptions {}
export type IObservation = TObservation[];
export type IObservations = IObservation[];

type TObservationsInputs =
  | {
      chainId: ChainId;
      emitter?: undefined;
      sequence?: undefined;
      specific?: undefined;
    }
  | {
      chainId: ChainId;
      emitter: string;
      sequence?: undefined;
      specific?: undefined;
    }
  | {
      chainId: ChainId;
      emitter: string;
      sequence: number;
      specific?: {
        signer: string;
        hash: string;
      };
    };

export type IObservationInput = TObservationsInputs & TSortOptions;
export type IVAAInput = TObservationsInputs & TSortOptions;

export type TVAA = {
  emitterAddr: string;
  emitterChain: number;
  guardianSetIndex: number;
  id: string;
  indexedAt: string;
  sequence?: number;
  timestamp: string;
  txHash?: string;
  updatedAt: string;
  vaa: string;
  version: number;
};

export type TVAACount = {
  chainId: ChainId;
  count: number;
};

export interface IVAAsInput extends TSortOptions {}
export interface IVAAs {
  data: TVAA[];
  pagination: Pagination;
}

export interface IVAAsCount {
  data: TVAACount[];
  pagination: Pagination;
}

export interface IVAA {
  data: TVAA[];
  pagination: Pagination;
}
