import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../service/profile/profile.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  signupForm: FormBuilder | any;

  constructor(
    private formBuilder: FormBuilder,
    private auth: ProfileService,
    private toaster: ToastrService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [""],
      firstName: [""],
      lastName: [""],
      phone: [""],
      password: [""],
    });
  }

  async signup() {
    const data = this.signupForm.value;
    const response = await this.auth.signup(data);
    if (response) {
      this.toaster.success(" Sign Up Sccessfully ");
      this.router.navigate(["login"]);
    }
  }
}
