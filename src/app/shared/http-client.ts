import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HttpClientImplement {

  constructor(private readonly httpClient: HttpClient) { }
  get(url: string) {
    return this.httpClient.get(url);
  }

  post = (url: string, data: any, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
      includeHeaders?: string[];
    } | boolean;
  }) => {

    try {
      if (!options) {
        options = {
          headers: {
            "Content-Type": "application/json"
          }
        }
      }
      return this.httpClient.post(url, data, options)
    } catch (error) {
      throw error;
    }
  }
}
