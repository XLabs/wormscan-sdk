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
    Osmosis = 20,
    Sui = 21,
    Aptos = 22,
    Arbitrum = 23,
    Optimism = 24,
    PythNet = 26,
    Xpla = 28,
    Btc = 29,
    Base = 30,
    Sei = 32,
    Sepolia = 10002,
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
type SpecificVAACriteria = {
    sequence: number;
    signer?: string;
    hash?: string;
} | {
    sequence: number;
    signer: string;
    hash: string;
};
export type VAASearchCriteria = {
    chainId: number;
    emmiter?: string;
    specific?: SpecificVAACriteria;
} | {
    chainId: number;
    emmiter: string;
    specific?: SpecificVAACriteria;
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
type Observation = {
    hash: string;
    guardianAddr: string;
    signature: string;
} & Omit<VAADetail, "guardianSetIndex" | "vaa" | "timestamp">;
type VAADetail = {
    sequence: number;
    id: string;
    version: number;
    emitterChain: ChainId;
    emitterAddr: string;
    emitterNativeAddr: string;
    guardianSetIndex: number;
    vaa: string;
    timestamp: Date;
    updatedAt: Date;
    indexedAt: Date;
    txHash: string;
    appId: string;
    payload: {
        amount: string;
        callerAppId: string;
        fee: string;
        fromAddress: string;
        parsedPayload: any;
        payload: string;
        payloadType: number;
        toAddress: string;
        toChain: number;
        tokenAddress: string;
        tokenChain: number;
    };
};
type VAACount = {
    chainId: ChainId;
    count: number;
};
type CrossChainBy = "tx" | "notional";
type CrossChainActivityInput = {
    timeSpan: string;
    by: CrossChainBy;
};
type CrossChainActivity = {
    chain: ChainId;
    percentage: number;
    volume: number;
    destinations: {
        chain: ChainId;
        percentage: number;
        volume: number;
    }[];
}[];
type LastTxs = {
    time: string;
    count: number;
}[];
type DateRange = "day" | "week" | "month" | "3-month";
interface ScoresOutput {
    tvl: string;
    total_volume: string;
    total_tx_count: string;
    "24h_volume": string;
    "24h_tx_count": string;
    "24h_messages": string;
}
interface AssetsByVolumeInput {
    timeSpan?: "7d" | "15d" | "30d";
}
interface AssetsByVolumeOutput {
    emitterChain: number;
    symbol: string;
    tokenChain: number;
    tokenAddress: string;
    volume: string;
}
interface ChainPairsByTransfersInput {
    timeSpan?: "7d" | "15d" | "30d";
}
interface ChainPairsByTransfersOutput {
    emitterChain: number;
    destinationChain: number;
    numberOfTransfers: string;
}
type GetVAAInput = ({
    chainId?: number;
    emitter?: string;
    seq?: number;
} | {
    chainId: number;
    emitter?: string;
    seq?: number;
} | {
    chainId: number;
    emitter: string;
    seq?: number;
} | {
    chainId: number;
    emitter: string;
    seq: number;
}) & {
    query?: {
        parsedPayload?: boolean;
    };
    pagination?: PageRequest;
};
interface GetVAAByTxHashInput {
    query: {
        txHash: string;
        parsedPayload?: boolean;
    };
}
interface GlobalTxInput {
    chainId: number;
    emitter: string;
    seq: number;
    query?: {
        parsedPayload?: boolean;
    };
}
interface GlobalTxOutput {
    id: string;
    originTx: {
        attribute?: {
            type: string;
            from: string;
            status: string;
            txHash: string;
            value: {
                originAddress: string;
                originChainId: ChainId;
                originTxHash: string;
            };
        };
        chainId: number;
        txHash: string;
        timestamp: string;
        from: string;
        status: string;
    };
    destinationTx: {
        chainId: number;
        status: string;
        method: string;
        txHash: string;
        from: string;
        to: string;
        blockNumber: string;
        timestamp: string;
        updatedAt: string;
    };
}
export class GuardianNetwork {
    constructor(_client: APIClient);
    getScores(): Promise<ScoresOutput>;
    getVAA({ chainId, emitter, seq, query, pagination, }: GetVAAInput): Promise<VAADetail | VAADetail[]>;
    getVAAbyTxHash({ query }: GetVAAByTxHashInput): Promise<VAADetail[]>;
    getGlobalTx({ chainId, emitter, seq, query }: GlobalTxInput): Promise<GlobalTxOutput>;
    getVAACount(): Promise<VAACount[]>;
    getAssetsByVolume(params?: AssetsByVolumeInput): Promise<AssetsByVolumeOutput[]>;
    getChainPairsByTransfers(params?: ChainPairsByTransfersInput): Promise<ChainPairsByTransfersOutput[]>;
    getCrossChainActivity({ by, timeSpan, }: CrossChainActivityInput): Promise<CrossChainActivity>;
    getLastTxs(range: DateRange): Promise<LastTxs>;
    getObservation(): Promise<Observation[]>;
    getObservation(criteria: VAASearchCriteria): Promise<Observation[]>;
    getObservation(criteria: VAASearchCriteria, page: PageRequest): Promise<Observation[]>;
}
interface Pagination {
    next: string;
}
interface FindVAAByAddressOutput {
    data: Data;
    pagination: Pagination;
}
interface Data {
    vaas: _VAA1[];
}
interface _VAA1 {
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
type GetTokenInput = {
    chainId: number;
    tokenAddress: string;
};
type GetTokenOutput = {
    symbol: string;
    coingeckoId: string;
    decimals: number;
};
type GetTokenPriceInput = {
    coingeckoId: string;
    query: {
        date: string;
        localization?: boolean;
    };
};
type GetTokenPriceOutput = {
    usd: number;
};
type GetTransactionsInput = ({
    chainId?: number;
    emitter?: string;
    seq?: number;
} | {
    chainId: number;
    emitter: string;
    seq: number;
}) & {
    query?: {
        address?: string;
    };
    pagination?: PageRequest;
};
type GetTransactionsOutput = {
    id: string;
    timestamp: Date;
    txHash: string;
    emitterChain: number;
    emitterAddress: string;
    emitterNativeAddress: string;
    tokenAmount: string;
    usdAmount: string;
    symbol: string;
    payload: {
        amount?: string;
        callerAppId?: string;
        fee?: string;
        fromAddress?: string;
        parsedPayload?: any;
        payload?: string;
        payloadType?: number;
        toAddress?: string;
        toChain?: number;
        tokenAddress?: string;
        tokenChain?: number;
        decimals?: number;
        name?: string;
        symbol?: string;
    };
    standardizedProperties: {
        amount: string;
        appIds: string[];
        fee: string;
        feeAddress: string;
        feeChain: number;
        fromAddress: string;
        fromChain: number;
        toAddress: string;
        toChain: number;
        tokenAddress: string;
        tokenChain: number;
    };
    globalTx: GlobalTxOutput;
};
interface FindVAAByAddressInput {
    address: string;
    page?: number;
    pageSize?: number;
}
export class Search {
    constructor(_client: APIClient);
    findVAAByAddress({ address, page, pageSize, }: FindVAAByAddressInput): Promise<FindVAAByAddressOutput>;
    getTransactions({ chainId, emitter, seq, query, pagination, }: GetTransactionsInput): Promise<GetTransactionsOutput>;
    getToken({ chainId, tokenAddress }: GetTokenInput): Promise<GetTokenOutput>;
    /**
     *
     * @param coingeckoId is the id of the token on https://www.coingecko.com
     * @param query.date The date of data snapshot in dd-mm-yyyy eg. 30-12-2022
     */
    getTokenPrice({ coingeckoId, query }: GetTokenPriceInput): Promise<GetTokenPriceOutput>;
}
export class Wormscan {
    constructor(_client: APIClient);
    get governor(): Governor;
    get guardianNetwork(): GuardianNetwork;
    get search(): Search;
    isReady(): Promise<boolean>;
    isHealth(): Promise<boolean>;
}
export function createClient(baseUrl?: string): Wormscan;

//# sourceMappingURL=types.d.ts.map
