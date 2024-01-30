import { StoreService } from "./website/service/store/store.service";
import { Component } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "mbz-test";
  products: any[] = [];

  constructor(public store: StoreService) {
    // // run js file for this page
    // $.getScript('../../../../assets/js/main.js');
    // // get all products from the server
    // this.getProducts();
  }

  // when page is loaded, this function is called
  // getProducts = () => {
  //   this.store.getAllProducts().subscribe(
  //     // res is the response from the server
  //     (res: any) => {
  //       this.products = res;
  //     },
  //     // err is the error from the server
  //     (err) => {
  //     }
  //   );
  // }
}
