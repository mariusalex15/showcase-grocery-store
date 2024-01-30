import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ProfileService } from "../../service/profile/profile.service";
import { ToastrService } from "ngx-toastr";
import { StorageService } from "../../service/toaster/storage.service";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  previousRoute: any;
  constructor(
    private formBuilder: FormBuilder,
    private auth: ProfileService,
    private toaster: ToastrService,
    private storage: StorageService,
    private router: Router,
  ) {}

  signinForm: FormBuilder | any;

  ngOnInit() {
    this.initForm();
    this.subscribeRouter();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: [""],
      password: [""],
    });
  }

  subscribeRouter() {
    this.router.events.subscribe((event: any) => {
      if (event as any) {
        // Store the previous route when the navigation ends
        this.previousRoute = event.urlBeforeRedirects;
      }
    });
  }

  async signin() {
    const credential = this.signinForm.value;
    const response: any = (await this.auth.signIn(credential)).data;

    this.storage.setInStorage("user", response);
    this.router.navigate(["/"]);
    // window.location.reload();
    if (response) {
      this.toaster.success("Login successfull");
    }
  }
}
