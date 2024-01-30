import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "../httpService/http.service";
import { createProduct } from "src/app/shared/interface";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  async createContact(payload: createProduct) {
    const message = await this.httpService.createHttpParams(payload);
    return await this.httpService.post(`contact`, message);
  }
}
