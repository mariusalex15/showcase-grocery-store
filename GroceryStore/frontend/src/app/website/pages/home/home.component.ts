import { FormBuilder } from "@angular/forms";
import { StoreService } from "./../../service/store/store.service";
import { Component } from "@angular/core";
import { formateFilter } from "src/app/shared/functions";
import { Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

declare var $: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  filterForm: FormBuilder | any;

  products: any = [];

  constructor(
    private store: StoreService,
    private formbuilder: FormBuilder,
    private router: Router,
    private sanitizer: DomSanitizer,
  ) {}

  // when page is loaded, this function is called
  ngOnInit() {
    this.initfiter();
    this.getProducts();
  }

  initfiter() {
    this.filterForm = this.formbuilder.group({
      title: [""],
      price: [""],
    });
  }

  submit() {
    this.getProducts();
  }

  async getProducts() {
    let filters = this.filterForm.value;
    filters = formateFilter(filters);
    this.products = (await this.store.getProducts(filters))
      .map((d: any) => {
        const uint8Array = new Uint8Array(d.thumbnail.data);
        const blob = new Blob([uint8Array], { type: d.thumbnail.type });
        const blobUrl = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(blob),
        );
        return {
          id: d.id,
          thumbnail: blobUrl,
          title: d.title,
          price: d.price,
          quantity: "",
          kgs: "1kg",
        };
      })
      .slice(0, 8);
  }

  route() {
    this.router.navigate(["/shop"]);
  }
}
