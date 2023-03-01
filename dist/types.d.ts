export interface APIClient {
    doGet<T>(path: string, params?: any): Promise<T> | T;
}
export class AxiosClient implements APIClient {
    constructor(baseURL: string);
    doGet<T>(path: string, params?: any): Promise<T>;
}
export enum ChainId {
    Unset = 0,
    Solana = 1,
    Ethereum = 2,
    Terra = 3,
    BSC = 4,
    Polygon = 5,
    Avalanche = 6,
    Oasis = 7,
    Algorand = 8,
    Aurora = 9,
    Fantom = 10,
    Karura = 11,
    Acala = 12,
    Klaytn = 13,
    Celo = 14,
    Near = 15,
    Moonbeam = 16,
    Neon = 17,
    Terra2 = 18,
    Injective = 19,
    Sui = 21,
    Aptos = 22,
    Arbitrum = 23,
    Optimism = 24,
    PythNet = 26,
    Xpla = 28,
    Btc = 29,
    Wormchain = 3104
}
export enum Order {
    ASC = "ASC",
    DESC = "DESC"
}
export interface PageRequest {
    page: number;
    pageSize: number;
    sortOrder: Order;
}
export const DefaultPageRequest: PageRequest;
export type SpecificVAACriteria = {
    sequence: number;
    signer?: undefined;
    hash?: undefined;
} | {
    sequence: number;
    signer: string;
    hash: string;
};
export type VAASearchCriteria = {
    chainId: number;
    emmiter?: undefined;
    specific?: undefined;
} | {
    chainId: number;
    emmiter: string;
    specific?: undefined;
} | {
    chainId: number;
    emmiter: string;
    specific: SpecificVAACriteria;
};
type Notional = {
    id: string;
    chainId: ChainId;
    nodeName: string;
    notionalLimit: number;
    availableNotional: number;
    maxTransactionSize: number;
    createdAt: Date;
    updatedAt: Date;
};
type Node<C = any, T = any> = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nodeName: string;
    counter: number;
    chains: C[];
    tokens: T[];
};
export type ChainNotionalAvailable = Omit<Notional, "maxTransactionSize" | "notionalLimit">;
export type NotionalAvailable = Omit<Notional, "id" | "maxTransactionSize" | "notionalLimit" | "nodeName" | "createdAt" | "updatedAt">;
export type ChainNotionalLimit = Omit<Notional, "availableNotional">;
export type NotionalLimit = Omit<Notional, "id" | "nodeName" | "createdAt" | "updatedAt">;
export type VAA = {
    sequence: number;
    chainId: ChainId;
    emitterAddress: string;
    notionalValue: number;
    txHash: string;
    releaseTime: number;
};
export interface Chain {
    chainId: ChainId;
    enqueuedVAA: Omit<VAA, "releaseTime">[];
}
export type NodeConfiguration = Node<ChainConfiguration, TokenConfiguration>;
export type ChainConfiguration = {
    chainId: ChainId;
    notionalLimit: number;
    bigTransactionSize: number;
};
export type TokenConfiguration = {
    originChainId: ChainId;
    originAddress: string;
    price: number;
};
export type NodeStatus = Omit<Node<ChainStatus>, "tokens" | "counter">;
export type ChainStatus = {
    chainId: ChainId;
    remainingAvailableNotional: number;
    emitters: EmitterStatus[];
};
export type EmitterStatus = {
    emitterAddress: string;
    totalEnqueuedVAAs: number;
};
export class Governor {
    constructor(_client: APIClient);
    getConfiguration(): Promise<NodeConfiguration[]>;
    getConfiguration(guardianId: string): Promise<NodeConfiguration>;
    getEnqueuedVaas(): Promise<Chain[]>;
    getEnqueuedVaas(chainId: ChainId): Promise<VAA[]>;
    getMaxAvailableNotional(chainId: ChainId): Promise<unknown>;
    getAvailableNotional(): Promise<NotionalAvailable[]>;
    getAvailableNotional(chainId: ChainId): Promise<ChainNotionalAvailable[]>;
    getNotionalLimit(): Promise<NotionalLimit[]>;
    getNotionalLimit(chainId: ChainId): Promise<ChainNotionalLimit[]>;
    getStatus(): Promise<NodeStatus[]>;
    getStatus(guardianId: string): Promise<NodeStatus>;
    getLimit(): Promise<NotionalLimit[]>;
}
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
    constructor(_client: APIClient);
    getVAA(): Promise<VAADetail[]>;
    getVAA(criteria: VAASearchCriteria): Promise<VAADetail[]>;
    getVAA(criteria: VAASearchCriteria, page: PageRequest): Promise<VAADetail[]>;
    getVAACount(): Promise<VAACount[]>;
    getCrossChainActivity(): Promise<CrossChainActivity>;
    getObservation(): Promise<Observation[]>;
    getObservation(criteria: VAASearchCriteria): Promise<Observation[]>;
    getObservation(criteria: VAASearchCriteria, page: PageRequest): Promise<Observation[]>;
}
export class Wormscan {
    constructor(_client: APIClient);
    get governor(): Governor;
    get guardianNetwork(): GuardianNetwork;
    isReady(): Promise<boolean>;
    isHealth(): Promise<boolean>;
}
export function createClient(baseUrl?: string): Wormscan;

//# sourceMappingURL=types.d.ts.map
