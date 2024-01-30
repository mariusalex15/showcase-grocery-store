import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  setInStorage(title: string, message: any) {
    message = JSON.stringify(message);
    localStorage.setItem(title, message);
  }

  getInStorage(title: string) {
    const fetchedData: any = localStorage.getItem(title);
    return JSON.parse(fetchedData);
  }

  getToken() {
    const fetchedData: any = localStorage.getItem("user");
    if (fetchedData) {
      return true;
    } else {
      return false;
    }
  }

  removeInStorage(payload: string) {
    localStorage.removeItem(payload);
  }
}
