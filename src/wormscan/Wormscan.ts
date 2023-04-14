import { AxiosClient, APIClient } from "src/api-client";
import { Governor } from "src/governor";
import { GuardianNetwork } from "src/guardian-network";
import { Search } from "src/search";
import { _get } from "src/utils/Objects";

export class Wormscan {
  private readonly _governor: Governor;
  private readonly _guardian: GuardianNetwork;
  private readonly _search: Search;

  constructor(private readonly _client: APIClient) {
    this._governor = new Governor(this._client);
    this._guardian = new GuardianNetwork(this._client);
    this._search = new Search(this._client);
  }

  get governor(): Governor {
    return this._governor;
  }

  get guardianNetwork(): GuardianNetwork {
    return this._guardian;
  }

  get search(): Search {
    return this._search;
  }

  async isReady(): Promise<boolean> {
    return this._getStatus("/ready");
  }

  async isHealth(): Promise<boolean> {
    return this._getStatus("/health");
  }

  private async _getStatus(path: string) {
    try {
      const payload = await this._client.doGet<{ status: string }>(path);
      const status = payload.status || "";
      return status === "OK";
    } catch (err) {
      return false;
    }
  }
}

export function createClient(baseUrl: string = "https://api.wormscan.io/api/v1") {
  return new Wormscan(new AxiosClient(baseUrl));
}
