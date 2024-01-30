import { Component } from "@angular/core";
import { AlertService } from "../../service/alert/alert.service";
import { StorageService } from "../../service/toaster/storage.service";
import { CartService } from "../../service/cart/cart.service";
import { ToastrService } from "ngx-toastr";
import { StoreService } from "../../service/store/store.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent {
  token: boolean | any;
  cart: any = [];
  totalQuantity: any = 0;
  totalPrice: any = 0;
  constructor(
    private alert: AlertService,
    private storage: StorageService,
    private cartService: CartService,
    private toaster: ToastrService,
    private store: StoreService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.setToken();
    this.setCart();
  }
  setCart() {
    this.cart = this.cartService.sendCart().cart;
    this.totalQuantity = this.cartService.sendCart().quantity;
    this.totalPrice = this.cartService.sendCart().price;
  }
  setToken() {
    this.token = this.storage.getToken();
  }

  removeFromCart(cartItem: any) {
    this.cart = this.cart.filter((d: any) => {
      if (d.id === cartItem.id) {
        this.totalPrice = this.totalPrice - d.totalPrice;
        this.totalQuantity = this.totalQuantity - d.quantity;
      }
      return d.id !== cartItem.id;
    });

    const payload = {
      cart: this.cart,
      price: this.totalPrice,
      quantity: this.totalQuantity,
    };

    this.cartService.getCart(payload);
  }

  async checkout() {
    if (!this.token) {
      this.alert.alert();

      return;
    } else {
      if (this.cart?.length == 0 || !this.cart || this.cart == "") {
        this.toaster.error("Please Add Product");
      }
      if (this.cart.length > 0) {
        const orderDetails = this.cart.map((d: any) => {
          return {
            quantity: d.quantity,
            productId: d.id,
          };
        });

        const payload = {
          userId: this.storage.getInStorage("user").id,
          orderPrice: this.totalPrice.toString(),
          OrderDetails: orderDetails,
        };
        try {
          await this.store.placeOrder(payload);

          this.toaster.success("Order Placed Sccessfully");
          this.storage.removeInStorage("cart");
          this.router.navigate(["/shop"]);
        } catch {}
      }
    }
  }

  clearCart() {
    this.cartService.removeFromCart();
    this.cart = [];
    this.totalQuantity = 0;
    this.totalPrice = 0;
  }
}
