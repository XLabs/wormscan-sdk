import $hgUW1$axios from "axios";

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
var $c717df3266965fe9$exports = {};
var $1eff056d74ff4733$exports = {};

$parcel$export($1eff056d74ff4733$exports, "Wormscan", () => $1eff056d74ff4733$export$5b545286a8be4b4d);
$parcel$export($1eff056d74ff4733$exports, "createClient", () => $1eff056d74ff4733$export$5d730b7aed1a3eb0);
var $7e11133f3ceb5a15$exports = {};
var $765587a7ab63180e$exports = {};

$parcel$export($765587a7ab63180e$exports, "AxiosClient", () => $765587a7ab63180e$export$ad5a3977633fb854);

class $765587a7ab63180e$export$ad5a3977633fb854 {
    constructor(baseURL){
        this._client = (0, $hgUW1$axios).create({
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


$parcel$exportWildcard($7e11133f3ceb5a15$exports, $765587a7ab63180e$exports);


var $c4f0b2d35a967cff$exports = {};
var $7f546c16e67f3298$exports = {};

$parcel$export($7f546c16e67f3298$exports, "Governor", () => $7f546c16e67f3298$export$5fd2f34e9ccf29c);
var $6c57c6a5ae61a46a$exports = {};
var $611fa10cf591ee17$exports = {};

$parcel$export($611fa10cf591ee17$exports, "ChainId", () => $611fa10cf591ee17$export$c06e1e7429de6283);
let $611fa10cf591ee17$export$c06e1e7429de6283;
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
})($611fa10cf591ee17$export$c06e1e7429de6283 || ($611fa10cf591ee17$export$c06e1e7429de6283 = {}));


var $c0cc5ca485b5998d$exports = {};

$parcel$export($c0cc5ca485b5998d$exports, "Order", () => $c0cc5ca485b5998d$export$d6101cb40935bdea);
$parcel$export($c0cc5ca485b5998d$exports, "DefaultPageRequest", () => $c0cc5ca485b5998d$export$6a7240855574151e);
let $c0cc5ca485b5998d$export$d6101cb40935bdea;
(function(Order) {
    Order["ASC"] = "ASC";
    Order["DESC"] = "DESC";
})($c0cc5ca485b5998d$export$d6101cb40935bdea || ($c0cc5ca485b5998d$export$d6101cb40935bdea = {}));
const $c0cc5ca485b5998d$export$6a7240855574151e = {
    page: 0,
    pageSize: 10,
    sortOrder: $c0cc5ca485b5998d$export$d6101cb40935bdea.ASC
};


var $b9147d87f7d8a8f9$exports = {};


$parcel$exportWildcard($6c57c6a5ae61a46a$exports, $611fa10cf591ee17$exports);
$parcel$exportWildcard($6c57c6a5ae61a46a$exports, $c0cc5ca485b5998d$exports);
$parcel$exportWildcard($6c57c6a5ae61a46a$exports, $b9147d87f7d8a8f9$exports);


function $e9e52dd4b29f5683$export$afb3516d9d608401(obj, path, defaultValue) {
    const pathArray = Array.isArray(path) ? path : path.split(".");
    let currentValue = obj;
    for (const key of pathArray){
        if (currentValue === undefined || currentValue === null) return defaultValue;
        else currentValue = currentValue[key];
    }
    return currentValue === undefined ? defaultValue : currentValue;
}


class $7f546c16e67f3298$export$5fd2f34e9ccf29c {
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
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainid],
                remainingAvailableNotional: remainingavailablenotional,
                emitters: emitters.map(this._mapEmitterStatus)
            });
        this._mapEmitterStatus = ({ emitteraddress: emitteraddress , totalenqueuedvaas: totalenqueuedvaas  })=>({
                emitterAddress: emitteraddress,
                totalEnqueuedVAAs: totalenqueuedvaas
            });
        this._mapChainConfiguration = ({ chainid: chainid , notionallimit: notionalLimit , bigtransactionsize: bigTransactionSize  })=>({
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainid],
                notionalLimit: notionalLimit,
                bigTransactionSize: bigTransactionSize
            });
        this._mapTokenConfiguration = ({ originchainid: originchainid , originaddress: originAddress , price: price  })=>({
                originChainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[originchainid],
                originAddress: originAddress,
                price: price
            });
        this._mapChainNotionalLimit = ({ id: id , chainId: chainId , nodename: nodename , notionalLimit: notionalLimit , maxTransactionSize: maxTransactionSize , createdAt: createdAt , updatedAt: updatedAt  })=>({
                id: id,
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainId],
                nodeName: nodename,
                notionalLimit: notionalLimit,
                maxTransactionSize: maxTransactionSize,
                createdAt: new Date(createdAt),
                updatedAt: new Date(updatedAt)
            });
        this._mapNotionalLimit = ({ chainid: chainid , chainId: chainId , availableNotional: availableNotional , notionalLimit: notionalLimit , maxTransactionSize: maxTransactionSize  })=>({
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainid | chainId],
                availableNotional: availableNotional,
                notionalLimit: notionalLimit,
                maxTransactionSize: maxTransactionSize
            });
        this._mapChainAvailableNotional = ({ id: id , chainId: chainId , nodeName: nodeName , availableNotional: availableNotional , createdAt: createdAt , updatedAt: updatedAt  })=>({
                id: id,
                nodeName: nodeName,
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainId],
                availableNotional: availableNotional,
                createdAt: new Date(createdAt),
                updatedAt: new Date(updatedAt)
            });
        this._mapAvailableNotional = ({ chainId: chainId , availableNotional: availableNotional  })=>({
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainId],
                availableNotional: availableNotional
            });
        this._mapChainVAA = ({ chainId: chainId , enqueuedVaas: enqueuedVaas  })=>({
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainId],
                enqueuedVAA: enqueuedVaas.map(this._mapVAA)
            });
        this._mapVAA = ({ chainid: chainid , chainId: chainId , sequence: sequence , emitterAddress: emitterAddress , notionalValue: notionalValue , txHash: txHash , releaseTime: releaseTime  })=>({
                chainId: (0, $611fa10cf591ee17$export$c06e1e7429de6283)[chainid || chainId],
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
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []).map(this._mapNodeConfiguration);
        return guardianId ? result.pop() : result;
    }
    async getEnqueuedVaas(chainId = null) {
        const effectivePath = chainId ? `/governor/enqueued_vaa/${chainId}` : "/governor/enqueued_vaa";
        const payload = await this._client.doGet(effectivePath);
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []);
        return result.map(chainId ? this._mapVAA : this._mapChainVAA);
    }
    //TODO API is returning 500
    async getMaxAvailableNotional(chainId) {
        return this._client.doGet(`/governor/notional/max_available/${chainId}`);
    }
    async getAvailableNotional(chainId = null) {
        const effectivePath = chainId ? `/governor/notional/available/${chainId}` : "/governor/notional/available";
        const payload = await this._client.doGet(effectivePath);
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []);
        return result.map(chainId ? this._mapChainAvailableNotional : this._mapAvailableNotional);
    }
    async getNotionalLimit(chainId = null) {
        const effectivePath = chainId ? `/governor/notional/limit/${chainId}` : "/governor/notional/limit";
        const payload = await this._client.doGet(effectivePath);
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []);
        return result.map(chainId ? this._mapChainNotionalLimit : this._mapNotionalLimit);
    }
    async getStatus(guardianId = null) {
        const effectivePath = guardianId ? `/governor/status/${guardianId}` : "/governor/status";
        const payload = await this._client.doGet(effectivePath);
        if (guardianId) {
            const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", {});
            return this._mapStatus(result);
        } else {
            const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []);
            return result.map(this._mapStatus);
        }
    }
    async getLimit() {
        const payload = await this._client.doGet("/governor/limit");
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []);
        return result.map(this._mapNotionalLimit);
    }
}


$parcel$exportWildcard($c4f0b2d35a967cff$exports, $7f546c16e67f3298$exports);


var $6d2182df4595d97d$exports = {};
var $982878c06c96f82f$exports = {};

$parcel$export($982878c06c96f82f$exports, "GuardianNetwork", () => $982878c06c96f82f$export$3ed55e870bb3c910);


class $982878c06c96f82f$export$3ed55e870bb3c910 {
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
    async getVAA({ chainId: chainId , emitter: emitter , seq: seq , query: query , pagination: pagination = (0, $c0cc5ca485b5998d$export$6a7240855574151e)  }) {
        const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/vaas", {
            chainId: chainId,
            emitter: emitter,
            seq: seq
        });
        const payload = await this._client.doGet(effectivePath, {
            ...query,
            ...pagination
        });
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", null);
        // When returns VAADetail[] differs when returns a single VAADetail
        if (result) return result;
        return payload;
    }
    async getVAAbyTxHash({ query: query  }) {
        const payload = await this._client.doGet("/vaas/", {
            ...query
        });
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []);
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
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "data", []);
        return result.map(this._mapVAACount);
    }
    async getAssetsByVolume(params = {
        timeSpan: "7d"
    }) {
        const payload = await this._client.doGet("/top-assets-by-volume", {
            ...params
        });
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "assets", []);
        return result;
    }
    async getChainPairsByTransfers(params = {
        timeSpan: "7d"
    }) {
        const payload = await this._client.doGet("/top-chain-pairs-by-num-transfers", {
            ...params
        });
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "chainPairs", []);
        return result;
    }
    async getCrossChainActivity({ by: by , timeSpan: timeSpan  }) {
        const payload = await this._client.doGet("/x-chain-activity/", {
            timeSpan: timeSpan,
            by: by
        });
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "txs", []);
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
    async getObservation(criteria = null, page = (0, $c0cc5ca485b5998d$export$6a7240855574151e)) {
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


$parcel$exportWildcard($6d2182df4595d97d$exports, $982878c06c96f82f$exports);


var $47cc896cd7097ff1$exports = {};
var $064564055c91a46c$exports = {};

$parcel$export($064564055c91a46c$exports, "Search", () => $064564055c91a46c$export$4b85d3515bd863a5);

const $b4f6019a3c0f60c0$export$9b4b9379fa4d3b57 = "https://api.coingecko.com/api/v3";




class $064564055c91a46c$export$4b85d3515bd863a5 {
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
    async getTransactions({ chainId: chainId , emitter: emitter , seq: seq , query: query , pagination: pagination = (0, $c0cc5ca485b5998d$export$6a7240855574151e)  }) {
        const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/transactions", {
            chainId: chainId,
            emitter: emitter,
            seq: seq
        });
        const payload = await this._client.doGet(effectivePath, {
            ...query,
            ...pagination
        });
        const result = (0, $e9e52dd4b29f5683$export$afb3516d9d608401)(payload, "transactions", null);
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
            const response = await (0, $hgUW1$axios).get(`${(0, $b4f6019a3c0f60c0$export$9b4b9379fa4d3b57)}/coins/${coingeckoId}`, {
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


$parcel$exportWildcard($47cc896cd7097ff1$exports, $064564055c91a46c$exports);


class $1eff056d74ff4733$export$5b545286a8be4b4d {
    constructor(_client){
        this._client = _client;
        this._governor = new (0, $7f546c16e67f3298$export$5fd2f34e9ccf29c)(this._client);
        this._guardian = new (0, $982878c06c96f82f$export$3ed55e870bb3c910)(this._client);
        this._search = new (0, $064564055c91a46c$export$4b85d3515bd863a5)(this._client);
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
function $1eff056d74ff4733$export$5d730b7aed1a3eb0(baseUrl = "https://api.wormscan.io/api/v1") {
    return new $1eff056d74ff4733$export$5b545286a8be4b4d(new (0, $765587a7ab63180e$export$ad5a3977633fb854)(baseUrl));
}


$parcel$exportWildcard($c717df3266965fe9$exports, $1eff056d74ff4733$exports);









export {$1eff056d74ff4733$export$5b545286a8be4b4d as Wormscan, $1eff056d74ff4733$export$5d730b7aed1a3eb0 as createClient, $7f546c16e67f3298$export$5fd2f34e9ccf29c as Governor, $982878c06c96f82f$export$3ed55e870bb3c910 as GuardianNetwork, $765587a7ab63180e$export$ad5a3977633fb854 as AxiosClient, $611fa10cf591ee17$export$c06e1e7429de6283 as ChainId, $c0cc5ca485b5998d$export$d6101cb40935bdea as Order, $c0cc5ca485b5998d$export$6a7240855574151e as DefaultPageRequest, $064564055c91a46c$export$4b85d3515bd863a5 as Search};
//# sourceMappingURL=module.js.map
