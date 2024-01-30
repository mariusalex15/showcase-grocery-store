import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { StorageService } from "../toaster/storage.service";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private router: Router, private storage: StorageService) {}

  alert(): any {
    Swal.fire({
      title: "Login alert?",
      text: "Please login to Continue!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7fad39",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(["login"]);
      }
    });
  }
}
