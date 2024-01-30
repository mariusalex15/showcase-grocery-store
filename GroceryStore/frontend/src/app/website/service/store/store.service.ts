import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpService } from "../httpService/http.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private http: HttpService, private httpClient: HttpClient) {}

  async getProducts(payload?: any) {
    const data = this.http.createHttpParams(payload);
    return await this.http.get("product", data);
  }

  async updateProducts(payload: any) {
    const data: any = {};
    if (payload.thumbnail) {
      data.thumbnail = payload.thumbnail;
    }
    if (payload.title) {
      data.title = payload.title;
    }
    if (payload.price) {
      data.price = payload.price;
    }

    const formData: FormData = this.createFormData(data);
    return await firstValueFrom(
      this.httpClient.put(`product/${payload.id}`, formData),
    );
  }

  async deleteProducts(payload: any) {
    return await this.http.delete("product", payload);
  }

  async addProducts(payload: any) {
    const formData: FormData = this.createFormData(payload);
    return await firstValueFrom(this.httpClient.post("product", formData));
    return await this.httpClient.post("product", payload).toPromise();
  }

  createFormData(data: any): FormData {
    const formData = new FormData();
    // Append all kev:val data to the form.
    Object.keys(data).forEach((key) => {
      this.addToFormData(formData, data[key], key);
    });
    return formData;
  }

  addToFormData(formData: FormData, item: any, key: string) {
    if (typeof item === "object" && !(item instanceof File)) {
      if (Array.isArray(item) && item[0] instanceof File) {
        item.forEach((arrayItem) => {
          formData.append(key, arrayItem);
        });
      } else {
        formData.append(key, JSON.stringify(item));
      }
    } else {
      formData.append(key, item);
    }
  }

  async placeOrder(payload: any) {
    return await this.http.post("order", payload);
  }
}
