import { APIClient } from "src/api-client";
import { FindVAAByAddressOutput } from "./types";

interface FindVAAByAddressInput {
  address: string;
  page?: number;
  pageSize?: number;
}

export class Search {
  constructor(private readonly _client: APIClient) {}

  async findVAAByAddress({
    address,
    page,
    pageSize,
  }: FindVAAByAddressInput): Promise<FindVAAByAddressOutput> {
    const result = await this._client.doGet<FindVAAByAddressOutput>(`/address/${address}`, {
      page,
      pageSize,
    });
    return result;
  }
}
