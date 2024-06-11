import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HttpClientImplement {

  constructor (private readonly httpClient : HttpClient) {}
  get(url: string) {
    return this.httpClient.get(url);
  }
  post(url: string, data: any) {
    return this.httpClient.post(url, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
