import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, Input } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { AngularHttpOptions } from "src/app/shared/interface";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  async get(url: string, params?: HttpParams, headers?: HttpHeaders) {
    return (await firstValueFrom(
      this.http.get(url, { params, headers }),
    )) as Promise<any>;
  }

  // post request with params,headers and body and return promise
  post(url: string, body?: any, params?: HttpParams, headers?: HttpHeaders) {
    return firstValueFrom(this.http.post(url, body, { headers, params }));
  }

  postRequest(payload: {
    url: string;
    params?: HttpParams;
    headers?: HttpHeaders;
    body?: any;
  }) {
    return firstValueFrom(
      this.http.post(payload.url, payload.body, {
        headers: payload.headers,
        params: payload.params,
      }),
    );
  }

  // put request with params,headers and body and return promise
  put(url: string, body?: any, params?: HttpParams, headers?: HttpHeaders) {
    return firstValueFrom(this.http.put(url, body, { headers, params }));
  }

  // delete request with params,headers and body and return promise
  delete(url: string, params?: HttpParams, headers?: HttpHeaders, body?: any) {
    return firstValueFrom(this.http.delete(url, { headers, params }));
  }

  createHttpParams(params?: { [paramName: string]: any }): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key: string) => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.append(key, params[key].toString());
        }
      });
    }
    return httpParams;
  }

  createParams(params?: { [paramName: string]: any }): AngularHttpOptions {
    return {
      params: this.createHttpParams(params),
    };
  }
}
