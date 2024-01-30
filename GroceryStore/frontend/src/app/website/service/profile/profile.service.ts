import { Injectable } from "@angular/core";
import { HttpService } from "../httpService/http.service";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(
    private http: HttpService,
    private ToastrService: ToastrService,
  ) {}

  async signup(payload: any) {
    const data = this.http.createHttpParams(payload);
    return await this.http.post("auth/signup", data);
  }

  async signIn(payload: any): Promise<any> {
    const data = this.http.createHttpParams(payload);
    return await this.http.post("auth/signin", data);
  }

  async signOut(payload: any) {
    const data = this.http.createHttpParams(payload);
    const response = await this.http.post("auth/signout", data);
    if (response) {
      this.ToastrService.success("Logout successfull");
    }
  }
}
