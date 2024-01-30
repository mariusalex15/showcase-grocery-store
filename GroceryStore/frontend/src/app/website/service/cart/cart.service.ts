import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StorageService } from "../toaster/storage.service";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart: any = [];

  totalQuantity: any = 0;
  totalPrice: any = 0;

  badge: any;

  constructor(private storageService: StorageService) {}

  sendCart() {
    const payload = {
      cart: this.storageService.getInStorage("cart"),
      price: this.storageService.getInStorage("totalPrice"),
      quantity: this.storageService.getInStorage("totalQuantity"),
    };
    return payload;
  }
  getCart(payload: any) {
    const cart = this.storageService.getInStorage("cart");
    if (cart) {
      cart.push({
        ...payload,
      });
      this.storageService.setInStorage("cart", payload.cart);
      this.storageService.setInStorage("totalQuantity", payload.quantity);
      this.storageService.setInStorage("totalPrice", payload.price);
    } else {
      this.storageService.setInStorage("cart", payload.cart);
      this.storageService.setInStorage("totalQuantity", payload.quantity);
      this.storageService.setInStorage("totalPrice", payload.price);
    }
  }

  removeFromCart() {
    this.storageService.removeInStorage("cart");
    this.storageService.removeInStorage("totalQuantity");
    this.storageService.removeInStorage("totalPrice");
  }
}
