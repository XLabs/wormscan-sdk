import axios, { AxiosError } from "axios";
import { APIClient } from "src/api-client";
import { COINGECKO_URL } from "src/consts";
import { DefaultPageRequest } from "src/model";
import { _get } from "src/utils/Objects";

import {
  FindVAAByAddressOutput,
  GetTokenInput,
  GetTokenOutput,
  GetTokenPriceInput,
  GetTokenPriceOutput,
  GetTransactionsInput,
  GetTransactionsOutput,
} from "./types";

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

  async getTransactions({
    query,
    pagination = DefaultPageRequest,
  }: GetTransactionsInput): Promise<GetTransactionsOutput[]> {
    const payload = await this._client.doGet<GetTransactionsOutput[]>(`/transactions`, {
      ...query,
      ...pagination,
    });
    const result = _get(payload, "transactions", []);
    return result;
  }

  async getToken({ chainId, tokenAddress }: GetTokenInput): Promise<GetTokenOutput> {
    const result = await this._client.doGet<GetTokenOutput>(`/token/${chainId}/${tokenAddress}`);
    return result;
  }

  /**
   *
   * @param coingeckoId is the id of the token on https://www.coingecko.com
   * @param query.date The date of data snapshot in dd-mm-yyyy eg. 30-12-2022
   */
  async getTokenPrice({ coingeckoId, query }: GetTokenPriceInput): Promise<GetTokenPriceOutput> {
    try {
      const response = await axios.get(`${COINGECKO_URL}/coins/${coingeckoId}`, { params: query });
      const { market_data } = response?.data;
      const { current_price } = market_data;
      const { usd } = current_price;
      return { usd };
    } catch (e: any) {
      const errors = e as Error | AxiosError;
      throw new Error(errors.message);
    }
  }
}
