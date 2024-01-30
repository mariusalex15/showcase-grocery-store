import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CartService } from "src/app/website/service/cart/cart.service";
import { ProfileService } from "src/app/website/service/profile/profile.service";
import { StorageService } from "src/app/website/service/toaster/storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  token: any;
  cartBadge: number = 0;
  isRoute: string | undefined;

  constructor(
    private storage: StorageService,
    private auth: ProfileService,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) {
    this.updateCart();
  }

  ngOnInit() {
    this.getToken();
    this.checkRoute();
  }

  ngOnDestroy() {
    // Unsubscribe from the cart subscription to avoid memory leaks
  }

  updateCart() {
    this.cartBadge = this.cartService.cart;
  }

  getToken() {
    this.token = this.storage.getToken();
  }

  signout() {
    const id = this.storage.getInStorage("user").id;
    this.auth.signOut({ id });
    this.storage.removeInStorage("user");
    window.location.reload();
  }

  checkRoute() {
    this.isRoute = this.route.snapshot.routeConfig?.path;
  }
}
