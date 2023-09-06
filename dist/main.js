var $8zHUo$axios = require("axios");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $2c5be15107a64477$exports = {};
var $66f4b66f0c124562$exports = {};

$parcel$export($66f4b66f0c124562$exports, "Wormscan", () => $66f4b66f0c124562$export$5b545286a8be4b4d);
$parcel$export($66f4b66f0c124562$exports, "createClient", () => $66f4b66f0c124562$export$5d730b7aed1a3eb0);
var $2a676ac678f45a74$exports = {};
var $b51032997befdc52$exports = {};

$parcel$export($b51032997befdc52$exports, "AxiosClient", () => $b51032997befdc52$export$ad5a3977633fb854);

class $b51032997befdc52$export$ad5a3977633fb854 {
    constructor(baseURL){
        this._client = (0, ($parcel$interopDefault($8zHUo$axios))).create({
            baseURL: baseURL
        });
    }
    async doGet(path, params) {
        try {
            const response = await this._client.get(path, {
                params: params
            });
            return response.data;
        } catch (e) {
            const errors = e;
            throw new Error(errors.message);
        }
    }
}


$parcel$exportWildcard($2a676ac678f45a74$exports, $b51032997befdc52$exports);


var $1bfbc43decc1379b$exports = {};
var $fc2da7be300beddd$exports = {};

$parcel$export($fc2da7be300beddd$exports, "Governor", () => $fc2da7be300beddd$export$5fd2f34e9ccf29c);
var $7027f9394156c31b$exports = {};
var $abd6525d02c94461$exports = {};

$parcel$export($abd6525d02c94461$exports, "ChainId", () => $abd6525d02c94461$export$c06e1e7429de6283);
let $abd6525d02c94461$export$c06e1e7429de6283;
(function(ChainId) {
    ChainId[ChainId["Unset"] = 0] = "Unset";
    ChainId[ChainId["Solana"] = 1] = "Solana";
    ChainId[ChainId["Ethereum"] = 2] = "Ethereum";
    ChainId[ChainId["Terra"] = 3] = "Terra";
    ChainId[ChainId["BSC"] = 4] = "BSC";
    ChainId[ChainId["Polygon"] = 5] = "Polygon";
    ChainId[ChainId["Avalanche"] = 6] = "Avalanche";
    ChainId[ChainId["Oasis"] = 7] = "Oasis";
    ChainId[ChainId["Algorand"] = 8] = "Algorand";
    ChainId[ChainId["Aurora"] = 9] = "Aurora";
    ChainId[ChainId["Fantom"] = 10] = "Fantom";
    ChainId[ChainId["Karura"] = 11] = "Karura";
    ChainId[ChainId["Acala"] = 12] = "Acala";
    ChainId[ChainId["Klaytn"] = 13] = "Klaytn";
    ChainId[ChainId["Celo"] = 14] = "Celo";
    ChainId[ChainId["Near"] = 15] = "Near";
    ChainId[ChainId["Moonbeam"] = 16] = "Moonbeam";
    ChainId[ChainId["Neon"] = 17] = "Neon";
    ChainId[ChainId["Terra2"] = 18] = "Terra2";
    ChainId[ChainId["Injective"] = 19] = "Injective";
    ChainId[ChainId["Osmosis"] = 20] = "Osmosis";
    ChainId[ChainId["Sui"] = 21] = "Sui";
    ChainId[ChainId["Aptos"] = 22] = "Aptos";
    ChainId[ChainId["Arbitrum"] = 23] = "Arbitrum";
    ChainId[ChainId["Optimism"] = 24] = "Optimism";
    ChainId[ChainId["PythNet"] = 26] = "PythNet";
    ChainId[ChainId["Xpla"] = 28] = "Xpla";
    ChainId[ChainId["Btc"] = 29] = "Btc";
    ChainId[ChainId["Base"] = 30] = "Base";
    ChainId[ChainId["Sei"] = 32] = "Sei";
    ChainId[ChainId["Sepolia"] = 10002] = "Sepolia";
    ChainId[ChainId["Wormchain"] = 3104] = "Wormchain";
})($abd6525d02c94461$export$c06e1e7429de6283 || ($abd6525d02c94461$export$c06e1e7429de6283 = {}));


var $c80488d9213c846f$exports = {};

$parcel$export($c80488d9213c846f$exports, "Order", () => $c80488d9213c846f$export$d6101cb40935bdea);
$parcel$export($c80488d9213c846f$exports, "DefaultPageRequest", () => $c80488d9213c846f$export$6a7240855574151e);
let $c80488d9213c846f$export$d6101cb40935bdea;
(function(Order) {
    Order["ASC"] = "ASC";
    Order["DESC"] = "DESC";
})($c80488d9213c846f$export$d6101cb40935bdea || ($c80488d9213c846f$export$d6101cb40935bdea = {}));
const $c80488d9213c846f$export$6a7240855574151e = {
    page: 0,
    pageSize: 10,
    sortOrder: $c80488d9213c846f$export$d6101cb40935bdea.ASC
};


var $633bfa4648c009e6$exports = {};


$parcel$exportWildcard($7027f9394156c31b$exports, $abd6525d02c94461$exports);
$parcel$exportWildcard($7027f9394156c31b$exports, $c80488d9213c846f$exports);
$parcel$exportWildcard($7027f9394156c31b$exports, $633bfa4648c009e6$exports);


function $5774609be39fe208$export$afb3516d9d608401(obj, path, defaultValue) {
    const pathArray = Array.isArray(path) ? path : path.split(".");
    let currentValue = obj;
    for (const key of pathArray){
        if (currentValue === undefined || currentValue === null) return defaultValue;
        else currentValue = currentValue[key];
    }
    return currentValue === undefined ? defaultValue : currentValue;
}


class $fc2da7be300beddd$export$5fd2f34e9ccf29c {
    constructor(_client){
        this._client = _client;
        this._mapNodeConfiguration = ({ id: id , nodename: nodename , createdAt: createdAt , updatedAt: updatedAt , counter: counter , chains: chains , tokens: tokens  })=>({
                id: id,
                nodeName: nodename,
                createdAt: new Date(createdAt),
                updatedAt: new Date(updatedAt),
                counter: counter,
                chains: chains?.map(this._mapChainConfiguration),
                tokens: tokens?.map(this._mapTokenConfiguration)
            });
        this._mapStatus = ({ id: id , nodename: nodename , chains: chains , createdAt: createdAt , updatedAt: updatedAt  })=>({
                id: id,
                nodeName: nodename,
                chains: chains.map(this._mapChainStatus),
                createdAt: new Date(createdAt),
                updatedAt: new Date(updatedAt)
            });
        this._mapChainStatus = ({ chainid: chainid , remainingavailablenotional: remainingavailablenotional , emitters: emitters  })=>({
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainid],
                remainingAvailableNotional: remainingavailablenotional,
                emitters: emitters.map(this._mapEmitterStatus)
            });
        this._mapEmitterStatus = ({ emitteraddress: emitteraddress , totalenqueuedvaas: totalenqueuedvaas  })=>({
                emitterAddress: emitteraddress,
                totalEnqueuedVAAs: totalenqueuedvaas
            });
        this._mapChainConfiguration = ({ chainid: chainid , notionallimit: notionalLimit , bigtransactionsize: bigTransactionSize  })=>({
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainid],
                notionalLimit: notionalLimit,
                bigTransactionSize: bigTransactionSize
            });
        this._mapTokenConfiguration = ({ originchainid: originchainid , originaddress: originAddress , price: price  })=>({
                originChainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[originchainid],
                originAddress: originAddress,
                price: price
            });
        this._mapChainNotionalLimit = ({ id: id , chainId: chainId , nodename: nodename , notionalLimit: notionalLimit , maxTransactionSize: maxTransactionSize , createdAt: createdAt , updatedAt: updatedAt  })=>({
                id: id,
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainId],
                nodeName: nodename,
                notionalLimit: notionalLimit,
                maxTransactionSize: maxTransactionSize,
                createdAt: new Date(createdAt),
                updatedAt: new Date(updatedAt)
            });
        this._mapNotionalLimit = ({ chainid: chainid , chainId: chainId , availableNotional: availableNotional , notionalLimit: notionalLimit , maxTransactionSize: maxTransactionSize  })=>({
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainid | chainId],
                availableNotional: availableNotional,
                notionalLimit: notionalLimit,
                maxTransactionSize: maxTransactionSize
            });
        this._mapChainAvailableNotional = ({ id: id , chainId: chainId , nodeName: nodeName , availableNotional: availableNotional , createdAt: createdAt , updatedAt: updatedAt  })=>({
                id: id,
                nodeName: nodeName,
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainId],
                availableNotional: availableNotional,
                createdAt: new Date(createdAt),
                updatedAt: new Date(updatedAt)
            });
        this._mapAvailableNotional = ({ chainId: chainId , availableNotional: availableNotional  })=>({
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainId],
                availableNotional: availableNotional
            });
        this._mapChainVAA = ({ chainId: chainId , enqueuedVaas: enqueuedVaas  })=>({
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainId],
                enqueuedVAA: enqueuedVaas.map(this._mapVAA)
            });
        this._mapVAA = ({ chainid: chainid , chainId: chainId , sequence: sequence , emitterAddress: emitterAddress , notionalValue: notionalValue , txHash: txHash , releaseTime: releaseTime  })=>({
                chainId: (0, $abd6525d02c94461$export$c06e1e7429de6283)[chainid || chainId],
                sequence: sequence,
                emitterAddress: emitterAddress,
                notionalValue: notionalValue,
                txHash: txHash,
                releaseTime: releaseTime
            });
    }
    async getConfiguration(guardianId = null) {
        const effectivePath = guardianId ? `/governor/config/${guardianId}` : "/governor/config";
        const payload = await this._client.doGet(effectivePath);
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []).map(this._mapNodeConfiguration);
        return guardianId ? result.pop() : result;
    }
    async getEnqueuedVaas(chainId = null) {
        const effectivePath = chainId ? `/governor/enqueued_vaa/${chainId}` : "/governor/enqueued_vaa";
        const payload = await this._client.doGet(effectivePath);
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        return result.map(chainId ? this._mapVAA : this._mapChainVAA);
    }
    //TODO API is returning 500
    async getMaxAvailableNotional(chainId) {
        return this._client.doGet(`/governor/notional/max_available/${chainId}`);
    }
    async getAvailableNotional(chainId = null) {
        const effectivePath = chainId ? `/governor/notional/available/${chainId}` : "/governor/notional/available";
        const payload = await this._client.doGet(effectivePath);
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        return result.map(chainId ? this._mapChainAvailableNotional : this._mapAvailableNotional);
    }
    async getNotionalLimit(chainId = null) {
        const effectivePath = chainId ? `/governor/notional/limit/${chainId}` : "/governor/notional/limit";
        const payload = await this._client.doGet(effectivePath);
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        return result.map(chainId ? this._mapChainNotionalLimit : this._mapNotionalLimit);
    }
    async getStatus(guardianId = null) {
        const effectivePath = guardianId ? `/governor/status/${guardianId}` : "/governor/status";
        const payload = await this._client.doGet(effectivePath);
        if (guardianId) {
            const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", {});
            return this._mapStatus(result);
        } else {
            const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
            return result.map(this._mapStatus);
        }
    }
    async getLimit() {
        const payload = await this._client.doGet("/governor/limit");
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        return result.map(this._mapNotionalLimit);
    }
}


$parcel$exportWildcard($1bfbc43decc1379b$exports, $fc2da7be300beddd$exports);


var $59d0675770c34fa3$exports = {};
var $a16a62d034fe3a91$exports = {};

$parcel$export($a16a62d034fe3a91$exports, "GuardianNetwork", () => $a16a62d034fe3a91$export$3ed55e870bb3c910);


class $a16a62d034fe3a91$export$3ed55e870bb3c910 {
    constructor(_client){
        this._client = _client;
        this._mapVAACount = ({ chainId: chainId , count: count  })=>({
                chainId: chainId,
                count: count
            });
    }
    async getScores() {
        return await this._client.doGet("/scorecards");
    }
    async getVAA({ chainId: chainId , emitter: emitter , seq: seq , query: query , pagination: pagination = (0, $c80488d9213c846f$export$6a7240855574151e)  }) {
        const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/vaas", {
            chainId: chainId,
            emitter: emitter,
            seq: seq
        });
        const payload = await this._client.doGet(effectivePath, {
            ...query,
            ...pagination
        });
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", null);
        // When returns VAADetail[] differs when returns a single VAADetail
        if (result) return result;
        return payload;
    }
    async getVAAbyTxHash({ query: query  }) {
        const payload = await this._client.doGet("/vaas/", {
            ...query
        });
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        return result;
    }
    async getGlobalTx({ chainId: chainId , emitter: emitter , seq: seq , query: query  }) {
        const payload = await this._client.doGet(`/global-tx/${chainId}/${emitter}/${seq}`, {
            ...query
        });
        return payload;
    }
    async getVAACount() {
        const payload = await this._client.doGet("/vaas/vaa-counts");
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        return result.map(this._mapVAACount);
    }
    async getAssetsByVolume(params = {
        timeSpan: "7d"
    }) {
        const payload = await this._client.doGet("/top-assets-by-volume", {
            ...params
        });
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "assets", []);
        return result;
    }
    async getChainPairsByTransfers(params = {
        timeSpan: "7d"
    }) {
        const payload = await this._client.doGet("/top-chain-pairs-by-num-transfers", {
            ...params
        });
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "chainPairs", []);
        return result;
    }
    async getCrossChainActivity({ by: by , timeSpan: timeSpan  }) {
        const payload = await this._client.doGet("/x-chain-activity/", {
            timeSpan: timeSpan,
            by: by
        });
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "txs", []);
        return result;
    }
    async getLastTxs(range) {
        const timeSpan = {
            day: "1d",
            week: "1w",
            month: "1mo",
            "3-month": "3mo"
        };
        const sampleRate = {
            day: "1h",
            week: "1d",
            month: "1d",
            "3-month": "1d"
        };
        return await this._client.doGet(`/last-txs?timeSpan=${timeSpan[range]}&sampleRate=${sampleRate[range]}`);
    }
    async getObservation(criteria = null, page = (0, $c80488d9213c846f$export$6a7240855574151e)) {
        const effectivePath = this._observationCriteriaToPathSegmentFilter("/observations", criteria);
        const payload = await this._client.doGet(effectivePath, {
            ...page
        });
        return payload || [];
    }
    _vaaSearchCriteriaToPathSegmentFilter(prefix, criteria) {
        const { chainId: chainId , emitter: emitter , seq: seq  } = criteria || {};
        return [
            prefix,
            chainId,
            emitter,
            seq
        ].filter((segment)=>!!segment).join("/");
    }
    _observationCriteriaToPathSegmentFilter(prefix, criteria) {
        const { chainId: chainId , emmiter: emmiter , specific: specific  } = criteria || {};
        const { sequence: sequence , signer: signer , hash: hash  } = specific || {};
        return [
            prefix,
            chainId,
            emmiter,
            sequence,
            signer,
            hash
        ].filter((segment)=>!!segment).join("/");
    }
}


$parcel$exportWildcard($59d0675770c34fa3$exports, $a16a62d034fe3a91$exports);


var $d69b7433a37e272e$exports = {};
var $4a299782cad98811$exports = {};

$parcel$export($4a299782cad98811$exports, "Search", () => $4a299782cad98811$export$4b85d3515bd863a5);

const $f948361d31b09ac4$export$9b4b9379fa4d3b57 = "https://api.coingecko.com/api/v3";




class $4a299782cad98811$export$4b85d3515bd863a5 {
    constructor(_client){
        this._client = _client;
    }
    async findVAAByAddress({ address: address , page: page , pageSize: pageSize  }) {
        const result = await this._client.doGet(`/address/${address}`, {
            page: page,
            pageSize: pageSize
        });
        return result;
    }
    async getTransactions({ chainId: chainId , emitter: emitter , seq: seq , query: query , pagination: pagination = (0, $c80488d9213c846f$export$6a7240855574151e)  }) {
        const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/transactions", {
            chainId: chainId,
            emitter: emitter,
            seq: seq
        });
        const payload = await this._client.doGet(effectivePath, {
            ...query,
            ...pagination
        });
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "transactions", null);
        // When returns GetTransactionsOutput[] differs when returns a single GetTransactionsOutput
        if (result) return result;
        return payload;
    }
    async getToken({ chainId: chainId , tokenAddress: tokenAddress  }) {
        const result = await this._client.doGet(`/token/${chainId}/${tokenAddress}`);
        return result;
    }
    /**
   *
   * @param coingeckoId is the id of the token on https://www.coingecko.com
   * @param query.date The date of data snapshot in dd-mm-yyyy eg. 30-12-2022
   */ async getTokenPrice({ coingeckoId: coingeckoId , query: query  }) {
        try {
            const response = await (0, ($parcel$interopDefault($8zHUo$axios))).get(`${(0, $f948361d31b09ac4$export$9b4b9379fa4d3b57)}/coins/${coingeckoId}`, {
                params: query
            });
            const { market_data: market_data  } = response?.data;
            const { current_price: current_price  } = market_data;
            const { usd: usd  } = current_price;
            return {
                usd: usd
            };
        } catch (e) {
            const errors = e;
            throw new Error(errors.message);
        }
    }
    _vaaSearchCriteriaToPathSegmentFilter(prefix, criteria) {
        const { chainId: chainId , emitter: emitter , seq: seq  } = criteria || {};
        const seqValue = seq === 0 ? "0" : seq;
        return [
            prefix,
            chainId,
            emitter,
            seqValue
        ].filter((segment)=>!!segment).join("/");
    }
}


$parcel$exportWildcard($d69b7433a37e272e$exports, $4a299782cad98811$exports);


class $66f4b66f0c124562$export$5b545286a8be4b4d {
    constructor(_client){
        this._client = _client;
        this._governor = new (0, $fc2da7be300beddd$export$5fd2f34e9ccf29c)(this._client);
        this._guardian = new (0, $a16a62d034fe3a91$export$3ed55e870bb3c910)(this._client);
        this._search = new (0, $4a299782cad98811$export$4b85d3515bd863a5)(this._client);
    }
    get governor() {
        return this._governor;
    }
    get guardianNetwork() {
        return this._guardian;
    }
    get search() {
        return this._search;
    }
    async isReady() {
        return this._getStatus("/ready");
    }
    async isHealth() {
        return this._getStatus("/health");
    }
    async _getStatus(path) {
        try {
            const payload = await this._client.doGet(path);
            const status = payload.status || "";
            return status === "OK";
        } catch (err) {
            return false;
        }
    }
}
function $66f4b66f0c124562$export$5d730b7aed1a3eb0(baseUrl = "https://api.wormscan.io/api/v1") {
    return new $66f4b66f0c124562$export$5b545286a8be4b4d(new (0, $b51032997befdc52$export$ad5a3977633fb854)(baseUrl));
}


$parcel$exportWildcard($2c5be15107a64477$exports, $66f4b66f0c124562$exports);







$parcel$exportWildcard(module.exports, $2c5be15107a64477$exports);
$parcel$exportWildcard(module.exports, $1bfbc43decc1379b$exports);
$parcel$exportWildcard(module.exports, $59d0675770c34fa3$exports);
$parcel$exportWildcard(module.exports, $2a676ac678f45a74$exports);
$parcel$exportWildcard(module.exports, $7027f9394156c31b$exports);
$parcel$exportWildcard(module.exports, $d69b7433a37e272e$exports);


//# sourceMappingURL=main.js.map
