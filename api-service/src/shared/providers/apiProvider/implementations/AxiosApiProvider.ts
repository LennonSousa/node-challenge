import Axios, { AxiosInstance } from 'axios';

import { IApiProvider, IOptions } from '../IApiProvider';

class AxiosApiProvider implements IApiProvider {
  private readonly axios: AxiosInstance;

  constructor(headers: any, baseURL: string) {
    if (!headers || !baseURL) throw new Error('Token não informado.');

    this.axios = Axios.create({
      baseURL,
      headers,
    });
  }

  public get(url: string, options: IOptions): Promise<any> {
    return this.axios.get(url, options);
  }

  public async put(url: string, data: any, options: IOptions): Promise<any> {
    return this.axios.put(url, data, options);
  }

  public patch(url: string, data: any, options: IOptions): Promise<any> {
    return this.axios.patch(url, data, options);
  }

  public async post(url: string, data: any, options: IOptions): Promise<any> {
    return this.axios.post(url, data, options);
  }

  public delete(url: string, options: IOptions): Promise<any> {
    return this.axios.delete(url, options);
  }
}

export { AxiosApiProvider };
