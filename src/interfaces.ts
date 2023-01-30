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

export interface IGovernorsConfigurationInput extends TSortOptions {}
export interface IGovernorsConfiguration {
  data: TGovernorConfiguration[];
  pagination: Pagination;
}

export interface IGovernorsConfigurationByGuardianIdInput extends TSortOptions {
  guardianId: number;
}

export interface IGovernorsConfigurationByGuardianId {
  data: TGovernorConfiguration;
  pagination: Pagination;
}

type TGovernorConfiguration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nodename: string;
  counter: number;
  chains: {
    chainid: number;
    notionallimit: number;
    bigtransactionsize: number;
  }[];
  tokens: {
    originchainid: number;
    originaddress: string;
    price: number;
  }[];
};

export interface IGovernorsEnqueuedVaasInput extends TSortOptions {}

export interface IGovernorsEnqueuedVaas {
  data: {
    chainId: number;
    enqueuedVaas: TGovernorEnqueuedVaas[];
  }[];
  pagination: Pagination;
}

export interface IGovernorsEnqueuedVaasByChainIdInput extends TSortOptions {
  chainId: number;
}

export interface IGovernorEnqueuedVaasByChainId {
  data: TGovernorEnqueuedVaas[];
  pagination: Pagination;
}

type TGovernorEnqueuedVaas = {
  chainId: number;
  emitterAddress: string;
  notionalValue: number;
  sequence: string;
  txHash: string;
};

export interface IGovernorsLimitInput extends TSortOptions {}

export interface IGovernorsLimit {
  data: {
    availableNotional: number;
    chainId: number;
    maxTransactionSize: number;
    notionalLimit: number;
  }[];
  pagination: Pagination;
}

export interface IGovernorMaxAvailableNotionalInput extends TSortOptions {
  chainId: number;
}

export interface IGovernorMaxAvailableNotional {
  data: {
    availableNotional: number;
    chainId: number;
    createdAt: string;
    emitters: {
      emitterAddress: string;
      enqueuedVaas: number;
      totalEnqueuedVaas: number;
    }[];
    id: string;
    nodeName: string;
    updatedAt: string;
  };
  pagination: Pagination;
}

export interface IGovernorAvailableNotionalInput extends TSortOptions {}

export interface IGovernorAvailableNotional {
  data: TGovernorAvailableNotional[];
  pagination: Pagination;
}

export interface IGovernorAvailableNotionalByChainIdInput extends TSortOptions {
  chainId: number;
}

export interface IGovernorAvailableNotionalByChainId {
  data: TGovernorAvailableNotional[];
  pagination: Pagination;
}

type TGovernorAvailableNotional = {
  availableNotional: number;
  chainId: number;
  createdAt?: string;
  id?: string;
  nodeName?: string;
  updatedAt?: string;
};

export interface IGovernorLimitNotionalInput extends TSortOptions {}

export interface IGovernorLimitNotional {
  data: TGovernorLimitNotional[];
  pagination: Pagination;
}

export interface IGovernorLimitNotionalByChainIdInput extends TSortOptions {
  chainId: number;
}

export interface IGovernorLimitNotionalByChainId {
  data: TGovernorLimitNotional[];
  pagination: Pagination;
}

type TGovernorLimitNotional = {
  chainId: number;
  createdAt: string;
  id: string;
  maxTransactionSize: number;
  nodename: string;
  notionalLimit: number;
  updatedAt: string;
};
