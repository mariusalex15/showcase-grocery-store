import { HttpHeaders, HttpParams } from "@angular/common/http";

export interface AngularHttpOptions {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: any;
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
}

export interface createProduct {
  name: string;
  email: string;
  message: string;
}
