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
    ChainId[ChainId["Sui"] = 21] = "Sui";
    ChainId[ChainId["Aptos"] = 22] = "Aptos";
    ChainId[ChainId["Arbitrum"] = 23] = "Arbitrum";
    ChainId[ChainId["Optimism"] = 24] = "Optimism";
    ChainId[ChainId["PythNet"] = 26] = "PythNet";
    ChainId[ChainId["Xpla"] = 28] = "Xpla";
    ChainId[ChainId["Btc"] = 29] = "Btc";
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


var $581afc70f5e5c3a3$exports = {};
$581afc70f5e5c3a3$exports = JSON.parse('{"txs":[{"chainId":1,"percentage":25.359406235379183,"num-txs":95396,"destination":[{"chainId":1,"percentage":0.0010482619816344501,"num-txs":1},{"chainId":28,"percentage":0.0010482619816344501,"num-txs":1},{"chainId":12,"percentage":0.02201350161432345,"num-txs":21},{"chainId":24,"percentage":0.00943435783471005,"num-txs":9},{"chainId":4,"percentage":34.71109899786155,"num-txs":33113},{"chainId":2,"percentage":19.66015346555411,"num-txs":18755},{"chainId":19,"percentage":0.11530881797978951,"num-txs":110},{"chainId":11,"percentage":0.05136483710008805,"num-txs":49},{"chainId":8,"percentage":0.028303073504130152,"num-txs":27},{"chainId":0,"percentage":0.8952157323158204,"num-txs":854},{"chainId":6,"percentage":3.677303031573651,"num-txs":3508},{"chainId":16,"percentage":0.12159838986959622,"num-txs":116},{"chainId":7,"percentage":0.5859784477336576,"num-txs":559},{"chainId":13,"percentage":0.11635707996142396,"num-txs":111},{"chainId":3,"percentage":21.07321061679735,"num-txs":20103},{"chainId":22,"percentage":1.721246173843767,"num-txs":1642},{"chainId":14,"percentage":0.4423665562497379,"num-txs":422},{"chainId":10,"percentage":0.7945825820789132,"num-txs":758},{"chainId":9,"percentage":0.06499224286133591,"num-txs":62},{"chainId":23,"percentage":0.1446601534655541,"num-txs":138},{"chainId":18,"percentage":0.0356409073755713,"num-txs":34},{"chainId":15,"percentage":0.008386095853075601,"num-txs":8},{"chainId":5,"percentage":15.718688414608579,"num-txs":14995}]},{"chainId":10,"percentage":0.7520415975500829,"num-txs":2829,"destination":[{"chainId":22,"percentage":0.4241781548250265,"num-txs":12},{"chainId":23,"percentage":0.10604453870625663,"num-txs":3},{"chainId":6,"percentage":8.589607635206788,"num-txs":243},{"chainId":5,"percentage":7.811947684694238,"num-txs":221},{"chainId":7,"percentage":1.7320607988688583,"num-txs":49},{"chainId":4,"percentage":30.89430894308943,"num-txs":874},{"chainId":18,"percentage":0.17674089784376104,"num-txs":5},{"chainId":8,"percentage":0.03534817956875221,"num-txs":1},{"chainId":0,"percentage":2.014846235418876,"num-txs":57},{"chainId":1,"percentage":13.538352774832097,"num-txs":383},{"chainId":2,"percentage":4.878048780487805,"num-txs":138},{"chainId":16,"percentage":0.14139271827500885,"num-txs":4},{"chainId":3,"percentage":29.621774478614352,"num-txs":838},{"chainId":12,"percentage":0.03534817956875221,"num-txs":1}]},{"chainId":11,"percentage":0.025785802390370465,"num-txs":97,"destination":[{"chainId":4,"percentage":4.123711340206185,"num-txs":4},{"chainId":0,"percentage":6.185567010309279,"num-txs":6},{"chainId":16,"percentage":11.34020618556701,"num-txs":11},{"chainId":1,"percentage":36.08247422680412,"num-txs":35},{"chainId":2,"percentage":36.08247422680412,"num-txs":35},{"chainId":6,"percentage":1.0309278350515463,"num-txs":1},{"chainId":12,"percentage":4.123711340206185,"num-txs":4},{"chainId":5,"percentage":1.0309278350515463,"num-txs":1}]},{"chainId":12,"percentage":0.023393305261367018,"num-txs":88,"destination":[{"chainId":23,"percentage":1.1363636363636365,"num-txs":1},{"chainId":14,"percentage":5.681818181818182,"num-txs":5},{"chainId":11,"percentage":5.681818181818182,"num-txs":5},{"chainId":5,"percentage":1.1363636363636365,"num-txs":1},{"chainId":4,"percentage":1.1363636363636365,"num-txs":1},{"chainId":0,"percentage":2.272727272727273,"num-txs":2},{"chainId":2,"percentage":72.72727272727273,"num-txs":64},{"chainId":1,"percentage":10.227272727272727,"num-txs":9}]},{"chainId":13,"percentage":0.062736591382757,"num-txs":236,"destination":[{"chainId":5,"percentage":2.9661016949152543,"num-txs":7},{"chainId":1,"percentage":28.8135593220339,"num-txs":68},{"chainId":23,"percentage":0.423728813559322,"num-txs":1},{"chainId":2,"percentage":30.93220338983051,"num-txs":73},{"chainId":10,"percentage":1.694915254237288,"num-txs":4},{"chainId":14,"percentage":0.423728813559322,"num-txs":1},{"chainId":16,"percentage":1.271186440677966,"num-txs":3},{"chainId":18,"percentage":0.423728813559322,"num-txs":1},{"chainId":3,"percentage":0.847457627118644,"num-txs":2},{"chainId":22,"percentage":1.271186440677966,"num-txs":3},{"chainId":7,"percentage":0.423728813559322,"num-txs":1},{"chainId":6,"percentage":9.322033898305085,"num-txs":22},{"chainId":0,"percentage":3.8135593220338984,"num-txs":9},{"chainId":4,"percentage":17.372881355932204,"num-txs":41}]},{"chainId":14,"percentage":0.2969354770107609,"num-txs":1117,"destination":[{"chainId":9,"percentage":0.08952551477170993,"num-txs":1},{"chainId":0,"percentage":2.0590868397493285,"num-txs":23},{"chainId":5,"percentage":14.14503133393017,"num-txs":158},{"chainId":4,"percentage":5.998209489704566,"num-txs":67},{"chainId":2,"percentage":21.665174574753806,"num-txs":242},{"chainId":1,"percentage":44.58370635631155,"num-txs":498},{"chainId":13,"percentage":0.8952551477170994,"num-txs":10},{"chainId":15,"percentage":0.35810205908683973,"num-txs":4},{"chainId":10,"percentage":0.35810205908683973,"num-txs":4},{"chainId":22,"percentage":5.729632945389436,"num-txs":64},{"chainId":16,"percentage":1.611459265890779,"num-txs":18},{"chainId":3,"percentage":0.08952551477170993,"num-txs":1},{"chainId":6,"percentage":2.1486123545210387,"num-txs":24},{"chainId":11,"percentage":0.08952551477170993,"num-txs":1},{"chainId":7,"percentage":0.17905102954341987,"num-txs":2}]},{"chainId":15,"percentage":0.051837437795074645,"num-txs":195,"destination":[{"chainId":5,"percentage":6.153846153846154,"num-txs":12},{"chainId":0,"percentage":4.615384615384615,"num-txs":9},{"chainId":3,"percentage":0.5128205128205128,"num-txs":1},{"chainId":16,"percentage":0.5128205128205128,"num-txs":1},{"chainId":1,"percentage":3.076923076923077,"num-txs":6},{"chainId":14,"percentage":2.5641025641025643,"num-txs":5},{"chainId":2,"percentage":73.84615384615384,"num-txs":144},{"chainId":18,"percentage":0.5128205128205128,"num-txs":1},{"chainId":8,"percentage":0.5128205128205128,"num-txs":1},{"chainId":4,"percentage":3.076923076923077,"num-txs":6},{"chainId":22,"percentage":4.615384615384615,"num-txs":9}]},{"chainId":16,"percentage":0.40273701671557993,"num-txs":1515,"destination":[{"chainId":3,"percentage":0.39603960396039606,"num-txs":6},{"chainId":8,"percentage":0.066006600660066,"num-txs":1},{"chainId":13,"percentage":0.264026402640264,"num-txs":4},{"chainId":7,"percentage":1.3201320132013201,"num-txs":20},{"chainId":11,"percentage":0.6600660066006601,"num-txs":10},{"chainId":15,"percentage":0.132013201320132,"num-txs":2},{"chainId":10,"percentage":0.594059405940594,"num-txs":9},{"chainId":14,"percentage":0.46204620462046203,"num-txs":7},{"chainId":2,"percentage":39.40594059405941,"num-txs":597},{"chainId":1,"percentage":5.808580858085809,"num-txs":88},{"chainId":5,"percentage":7.128712871287129,"num-txs":108},{"chainId":23,"percentage":0.46204620462046203,"num-txs":7},{"chainId":24,"percentage":0.066006600660066,"num-txs":1},{"chainId":6,"percentage":0.7260726072607261,"num-txs":11},{"chainId":4,"percentage":38.415841584158414,"num-txs":582},{"chainId":22,"percentage":0.594059405940594,"num-txs":9},{"chainId":0,"percentage":3.4983498349834985,"num-txs":53}]},{"chainId":18,"percentage":0.0693824167410999,"num-txs":261,"destination":[{"chainId":10,"percentage":4.21455938697318,"num-txs":11},{"chainId":3,"percentage":13.026819923371647,"num-txs":34},{"chainId":22,"percentage":0.3831417624521073,"num-txs":1},{"chainId":4,"percentage":6.896551724137931,"num-txs":18},{"chainId":0,"percentage":62.83524904214559,"num-txs":164},{"chainId":7,"percentage":0.3831417624521073,"num-txs":1},{"chainId":6,"percentage":1.1494252873563218,"num-txs":3},{"chainId":5,"percentage":1.9157088122605364,"num-txs":5},{"chainId":1,"percentage":4.980842911877395,"num-txs":13},{"chainId":2,"percentage":4.21455938697318,"num-txs":11}]},{"chainId":2,"percentage":14.19468546637744,"num-txs":53397,"destination":[{"chainId":18,"percentage":0.20413131823885236,"num-txs":109},{"chainId":7,"percentage":2.8316197539187593,"num-txs":1512},{"chainId":8,"percentage":0.06554675356293425,"num-txs":35},{"chainId":13,"percentage":0.4194992228027792,"num-txs":224},{"chainId":16,"percentage":1.876509916287432,"num-txs":1002},{"chainId":3,"percentage":21.205311159802985,"num-txs":11323},{"chainId":0,"percentage":1.7323070584489766,"num-txs":925},{"chainId":22,"percentage":1.2491338464707755,"num-txs":667},{"chainId":12,"percentage":0.262187014251737,"num-txs":140},{"chainId":11,"percentage":0.2940240088394479,"num-txs":157},{"chainId":6,"percentage":1.3146806000337097,"num-txs":702},{"chainId":19,"percentage":0.0805288686630335,"num-txs":43},{"chainId":23,"percentage":0.04494634530029777,"num-txs":24},{"chainId":24,"percentage":0.001872764387512407,"num-txs":1},{"chainId":14,"percentage":0.5000280914658127,"num-txs":267},{"chainId":1,"percentage":54.89259696237616,"num-txs":29311},{"chainId":4,"percentage":7.539749424124951,"num-txs":4026},{"chainId":10,"percentage":1.2772253122834616,"num-txs":682},{"chainId":15,"percentage":0.5412289079910857,"num-txs":289},{"chainId":9,"percentage":0.048691874075322585,"num-txs":26},{"chainId":5,"percentage":3.6181807966739705,"num-txs":1932}]},{"chainId":22,"percentage":0.69674833056867,"num-txs":2621,"destination":[{"chainId":7,"percentage":0.03815337657382678,"num-txs":1},{"chainId":14,"percentage":0.6486074017550553,"num-txs":17},{"chainId":15,"percentage":0.11446012972148036,"num-txs":3},{"chainId":1,"percentage":26.135062953071348,"num-txs":685},{"chainId":16,"percentage":0.4578405188859214,"num-txs":12},{"chainId":10,"percentage":0.4959938954597482,"num-txs":13},{"chainId":5,"percentage":38.878290728729496,"num-txs":1019},{"chainId":2,"percentage":11.217092712705075,"num-txs":294},{"chainId":4,"percentage":17.58870660053415,"num-txs":461},{"chainId":18,"percentage":0.03815337657382678,"num-txs":1},{"chainId":13,"percentage":0.03815337657382678,"num-txs":1},{"chainId":23,"percentage":0.8775276611980161,"num-txs":23},{"chainId":6,"percentage":2.3655093475772606,"num-txs":62},{"chainId":0,"percentage":0.9538344143456696,"num-txs":25},{"chainId":8,"percentage":0.11446012972148036,"num-txs":3},{"chainId":22,"percentage":0.03815337657382678,"num-txs":1}]},{"chainId":23,"percentage":0.08825656075879376,"num-txs":332,"destination":[{"chainId":22,"percentage":7.530120481927711,"num-txs":25},{"chainId":6,"percentage":2.710843373493976,"num-txs":9},{"chainId":7,"percentage":0.9036144578313253,"num-txs":3},{"chainId":1,"percentage":37.34939759036145,"num-txs":124},{"chainId":12,"percentage":0.30120481927710846,"num-txs":1},{"chainId":16,"percentage":1.8072289156626506,"num-txs":6},{"chainId":0,"percentage":18.373493975903614,"num-txs":61},{"chainId":2,"percentage":7.831325301204819,"num-txs":26},{"chainId":5,"percentage":13.25301204819277,"num-txs":44},{"chainId":4,"percentage":9.036144578313253,"num-txs":30},{"chainId":10,"percentage":0.6024096385542169,"num-txs":2},{"chainId":8,"percentage":0.30120481927710846,"num-txs":1}]},{"chainId":24,"percentage":0.00478499425800689,"num-txs":18,"destination":[{"chainId":2,"percentage":5.555555555555555,"num-txs":1},{"chainId":0,"percentage":27.77777777777778,"num-txs":5},{"chainId":1,"percentage":55.55555555555556,"num-txs":10},{"chainId":16,"percentage":11.11111111111111,"num-txs":2}]},{"chainId":28,"percentage":0.005316660286674322,"num-txs":20,"destination":[{"chainId":0,"percentage":50,"num-txs":10},{"chainId":2,"percentage":15,"num-txs":3},{"chainId":1,"percentage":5,"num-txs":1},{"chainId":3,"percentage":5,"num-txs":1},{"chainId":14,"percentage":5,"num-txs":1},{"chainId":19,"percentage":20,"num-txs":4}]},{"chainId":3,"percentage":27.086789162519672,"num-txs":101894,"destination":[{"chainId":6,"percentage":22.382083341511766,"num-txs":22806},{"chainId":11,"percentage":0.0009814120556656918,"num-txs":1},{"chainId":2,"percentage":13.11460929986064,"num-txs":13363},{"chainId":1,"percentage":24.07894478575775,"num-txs":24535},{"chainId":17712,"percentage":0.003925648222662767,"num-txs":4},{"chainId":5,"percentage":7.337036528156712,"num-txs":7476},{"chainId":10,"percentage":4.034584960841659,"num-txs":4111},{"chainId":9,"percentage":0.06084754745127289,"num-txs":62},{"chainId":18,"percentage":0.11089956229022317,"num-txs":113},{"chainId":13,"percentage":0.0029442361669970753,"num-txs":3},{"chainId":0,"percentage":0.0058884723339941505,"num-txs":6},{"chainId":8,"percentage":0.003925648222662767,"num-txs":4},{"chainId":0,"percentage":0.29246079258837615,"num-txs":298},{"chainId":4,"percentage":27.91037745107661,"num-txs":28439},{"chainId":7,"percentage":0.6604903134630106,"num-txs":673}]},{"chainId":4,"percentage":25.221438900939987,"num-txs":94877,"destination":[{"chainId":137,"percentage":0.0021079924533870167,"num-txs":2},{"chainId":11,"percentage":0.004215984906774033,"num-txs":4},{"chainId":7,"percentage":2.1490983062280637,"num-txs":2039},{"chainId":23,"percentage":0.037943864160966304,"num-txs":36},{"chainId":6,"percentage":2.705608313922236,"num-txs":2567},{"chainId":13,"percentage":0.062185777374917,"num-txs":59},{"chainId":8,"percentage":0.02107992453387017,"num-txs":20},{"chainId":22,"percentage":0.6092098190288479,"num-txs":578},{"chainId":4,"percentage":0.0021079924533870167,"num-txs":2},{"chainId":19,"percentage":0.0021079924533870167,"num-txs":2},{"chainId":0,"percentage":1.2753354342991452,"num-txs":1210},{"chainId":2,"percentage":4.107423295424602,"num-txs":3897},{"chainId":5,"percentage":14.78651306428323,"num-txs":14029},{"chainId":9,"percentage":0.04005185661435332,"num-txs":38},{"chainId":3,"percentage":29.932438841868947,"num-txs":28399},{"chainId":10,"percentage":1.6062902494809068,"num-txs":1524},{"chainId":16,"percentage":0.4837842680523204,"num-txs":459},{"chainId":15,"percentage":0.0021079924533870167,"num-txs":2},{"chainId":18,"percentage":0.10118363776257681,"num-txs":96},{"chainId":14,"percentage":0.043213845294433846,"num-txs":41},{"chainId":1,"percentage":42.02599154695026,"num-txs":39873}]},{"chainId":5,"percentage":4.344243120241589,"num-txs":16342,"destination":[{"chainId":13,"percentage":0.030596010280259454,"num-txs":5},{"chainId":3,"percentage":9.711173662954351,"num-txs":1587},{"chainId":14,"percentage":0.18969526373760862,"num-txs":31},{"chainId":16,"percentage":0.15909925345734915,"num-txs":26},{"chainId":18,"percentage":0.04283441439236323,"num-txs":7},{"chainId":12,"percentage":0.006119202056051891,"num-txs":1},{"chainId":15,"percentage":0.018357606168155672,"num-txs":3},{"chainId":10,"percentage":0.18969526373760862,"num-txs":31},{"chainId":2,"percentage":4.057030963162403,"num-txs":663},{"chainId":5,"percentage":0.006119202056051891,"num-txs":1},{"chainId":1,"percentage":43.97870517684494,"num-txs":7187},{"chainId":23,"percentage":0.29372169869049075,"num-txs":48},{"chainId":22,"percentage":1.5542773222371802,"num-txs":254},{"chainId":4,"percentage":35.778974421735406,"num-txs":5847},{"chainId":7,"percentage":0.0673112226165708,"num-txs":11},{"chainId":8,"percentage":0.10402643495288215,"num-txs":17},{"chainId":0,"percentage":2.178435931954473,"num-txs":356},{"chainId":6,"percentage":1.6338269489658548,"num-txs":267}]},{"chainId":6,"percentage":0.6643167028199566,"num-txs":2499,"destination":[{"chainId":13,"percentage":0.2801120448179272,"num-txs":7},{"chainId":3,"percentage":9.363745498199279,"num-txs":234},{"chainId":14,"percentage":0.3201280512204882,"num-txs":8},{"chainId":16,"percentage":0.2000800320128051,"num-txs":5},{"chainId":10,"percentage":4.641856742697079,"num-txs":116},{"chainId":2,"percentage":2.961184473789516,"num-txs":74},{"chainId":18,"percentage":1.2805122048819528,"num-txs":32},{"chainId":5,"percentage":10.524209683873549,"num-txs":263},{"chainId":24,"percentage":0.040016006402561026,"num-txs":1},{"chainId":23,"percentage":0.36014405762304924,"num-txs":9},{"chainId":1,"percentage":50.30012004801921,"num-txs":1257},{"chainId":8,"percentage":0.12004801920768307,"num-txs":3},{"chainId":4,"percentage":14.005602240896359,"num-txs":350},{"chainId":0,"percentage":2.881152460984394,"num-txs":72},{"chainId":7,"percentage":1.0004001600640255,"num-txs":25},{"chainId":22,"percentage":1.720688275310124,"num-txs":43}]},{"chainId":7,"percentage":0.5492110076134575,"num-txs":2066,"destination":[{"chainId":14,"percentage":0.0968054211035818,"num-txs":2},{"chainId":23,"percentage":0.2904162633107454,"num-txs":6},{"chainId":1,"percentage":13.359148112294289,"num-txs":276},{"chainId":5,"percentage":8.61568247821878,"num-txs":178},{"chainId":2,"percentage":10.842207163601161,"num-txs":224},{"chainId":9,"percentage":0.4356243949661181,"num-txs":9},{"chainId":4,"percentage":40.27105517909003,"num-txs":832},{"chainId":10,"percentage":2.323330106485963,"num-txs":48},{"chainId":16,"percentage":0.2420135527589545,"num-txs":5},{"chainId":3,"percentage":19.603097773475316,"num-txs":405},{"chainId":13,"percentage":0.1936108422071636,"num-txs":4},{"chainId":22,"percentage":0.0484027105517909,"num-txs":1},{"chainId":11,"percentage":0.0484027105517909,"num-txs":1},{"chainId":0,"percentage":0.6776379477250726,"num-txs":14},{"chainId":6,"percentage":2.952565343659245,"num-txs":61}]},{"chainId":8,"percentage":0.04333078133639573,"num-txs":163,"destination":[{"chainId":10,"percentage":0.6134969325153374,"num-txs":1},{"chainId":22,"percentage":0.6134969325153374,"num-txs":1},{"chainId":4,"percentage":5.521472392638037,"num-txs":9},{"chainId":6,"percentage":2.4539877300613497,"num-txs":4},{"chainId":0,"percentage":7.975460122699387,"num-txs":13},{"chainId":23,"percentage":0.6134969325153374,"num-txs":1},{"chainId":1,"percentage":9.202453987730062,"num-txs":15},{"chainId":5,"percentage":61.34969325153374,"num-txs":100},{"chainId":2,"percentage":11.042944785276074,"num-txs":18},{"chainId":14,"percentage":0.6134969325153374,"num-txs":1}]},{"chainId":9,"percentage":0.05662243205308154,"num-txs":213,"destination":[{"chainId":5,"percentage":10.7981220657277,"num-txs":23},{"chainId":1,"percentage":40.375586854460096,"num-txs":86},{"chainId":4,"percentage":14.553990610328638,"num-txs":31},{"chainId":2,"percentage":2.347417840375587,"num-txs":5},{"chainId":10,"percentage":6.103286384976526,"num-txs":13},{"chainId":7,"percentage":1.408450704225352,"num-txs":3},{"chainId":3,"percentage":8.92018779342723,"num-txs":19},{"chainId":14,"percentage":0.4694835680751174,"num-txs":1},{"chainId":6,"percentage":6.103286384976526,"num-txs":13},{"chainId":0,"percentage":8.92018779342723,"num-txs":19}]}]}');


const $a16a62d034fe3a91$var$delay = (ms)=>new Promise((resolve)=>setTimeout(resolve, ms));
class $a16a62d034fe3a91$export$3ed55e870bb3c910 {
    constructor(_client){
        this._client = _client;
        this._mapVAACount = ({ chainId: chainId , count: count  })=>({
                chainId: chainId,
                count: count
            });
        this._mapObservation = ({ sequence: sequence , id: id , version: version , emitterChain: emitterChain , emitterAddr: emitterAddr , hash: hash , txHash: txHash , guardianAddr: guardianAddr , signature: signature , updatedAt: updatedAt , indexedAt: indexedAt  })=>({
                sequence: sequence,
                id: id,
                version: version,
                emitterChainId: emitterChain,
                emitterAddr: emitterAddr,
                hash: hash,
                txHash: txHash,
                guardianAddr: guardianAddr,
                signature: signature,
                updatedAt: new Date(updatedAt),
                indexedAt: new Date(indexedAt)
            });
        this._mapVAA = ({ sequence: sequence , id: id , version: version , emitterChain: emitterChain , emitterAddr: emitterAddr , guardianSetIndex: guardianSetIndex , vaa: vaa , timestamp: timestamp , updatedAt: updatedAt , indexedAt: indexedAt , txHash: txHash  })=>({
                sequence: sequence,
                id: id,
                version: version,
                emitterChainId: emitterChain,
                emitterAddr: emitterAddr,
                guardianSetIndex: guardianSetIndex,
                vaa: vaa,
                timestamp: new Date(timestamp),
                updatedAt: new Date(updatedAt),
                indexedAt: new Date(indexedAt),
                txHash: txHash
            });
    }
    async getVAA(criteria = null, page = (0, $c80488d9213c846f$export$6a7240855574151e)) {
        const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/vaas", criteria);
        const payload = await this._client.doGet(effectivePath, {
            ...page
        });
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        if (result.map) return result.map(this._mapVAA);
        return this._mapVAA(result);
    }
    async getVAACount() {
        const payload = await this._client.doGet("/vaas/vaa-counts");
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "data", []);
        return result.map(this._mapVAACount);
    }
    // TODO: REPLACE MOCKED ENDPOINT FOR REAL ENDPOINT WHEN IT GETS DONE
    // https://github.com/wormhole-foundation/wormhole-explorer/issues/139
    async getCrossChainActivity() {
        await $a16a62d034fe3a91$var$delay(1200);
        const payload = (0, (/*@__PURE__*/$parcel$interopDefault($581afc70f5e5c3a3$exports)));
        const result = (0, $5774609be39fe208$export$afb3516d9d608401)(payload, "txs", []);
        return result;
    }
    async getObservation(criteria = null, page = (0, $c80488d9213c846f$export$6a7240855574151e)) {
        const effectivePath = this._vaaSearchCriteriaToPathSegmentFilter("/observations", criteria);
        const payload = await this._client.doGet(effectivePath, {
            ...page
        });
        return (payload || []).map(this._mapObservation);
    }
    _vaaSearchCriteriaToPathSegmentFilter(prefix, criteria) {
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


class $66f4b66f0c124562$export$5b545286a8be4b4d {
    constructor(_client){
        this._client = _client;
        this._governor = new (0, $fc2da7be300beddd$export$5fd2f34e9ccf29c)(this._client);
        this._guardian = new (0, $a16a62d034fe3a91$export$3ed55e870bb3c910)(this._client);
    }
    get governor() {
        return this._governor;
    }
    get guardianNetwork() {
        return this._guardian;
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


//# sourceMappingURL=main.js.map
