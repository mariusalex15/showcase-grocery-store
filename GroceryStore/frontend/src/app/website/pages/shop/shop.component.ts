import { Component, ElementRef, ViewChild, getPlatform } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { formateFilter } from "src/app/shared/functions";
import { StoreService } from "src/app/website/service/store/store.service";
import { AlertService } from "../../service/alert/alert.service";
import { StorageService } from "../../service/toaster/storage.service";
import { ToastrService } from "ngx-toastr";
import { DomSanitizer } from "@angular/platform-browser";
import { CartService } from "../../service/cart/cart.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent {
  @ViewChild("fileInput") fileInput: ElementRef | any;
  cart: any = [];
  productForm: any;
  filterForm: FormBuilder | any;
  totalPrice: number = 0;
  products: any = [];
  totalQuantity: any = 0;
  token: boolean | any;
  uploadFile: any;
  photo: any;
  editId: any;

  constructor(
    private store: StoreService,
    private formbuilder: FormBuilder,
    private alert: AlertService,
    private storage: StorageService,
    private toaster: ToastrService,
    private sanitizer: DomSanitizer,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.getToken();
    this.initfiter();
    this.getProducts();
    this.initProductForm();
  }
  initProductForm() {
    this.productForm = this.formbuilder.group({
      title: [this.uploadFile, Validators.required],
      price: ["", Validators.required],
      // thumbnail: ["", Validators.required],
    });
  }
  getToken() {
    this.token = this.storage.getToken();
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
    this.products = (await this.store.getProducts(filters)).map((d: any) => {
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
    });
  }

  updateQuantity(product: any, value: any) {
    this.products = this.products.map((d: any) => {
      if (d.id === product.id) {
        const updatedProduct = {
          ...d,
          quantity: value.target.value,
        };

        // Check if the updated quantity is greater than 0
        if (updatedProduct.quantity > 0) {
          return updatedProduct;
        } else {
          return {
            ...d,
            quantity: "",
          };
        }
      } else {
        return d;
      }
    });
  }

  addtoCart(product: any) {
    if (!product.quantity) {
      this.toaster.error("Please enter quantity");
      return;
    }
    this.cart.push({
      ...product,
      totalPrice: +product.price * +product.quantity,
    });

    this.totalPrice = this.cart.reduce(
      (acc: any, d: any) => acc + d.totalPrice,
      0,
    );
    this.totalQuantity = this.cart.reduce(
      (acc: any, d: any) => acc + +d.quantity,
      0,
    );

    const payload = {
      cart: this.cart,
      price: this.totalPrice,
      quantity: this.totalQuantity,
    };

    this.cartService.getCart(payload);
    // this.cartService.totalPrice = this.totalPrice;
    // this.cartService.totalQuantity = this.totalQuantity;
    this.toaster.success(" Product Added to Cart Succesfully ");
  }

  clear() {
    this.uploadFile = undefined;
    this.photo = undefined;
    this.productForm.reset();
  }

  async addProduct() {
    if (!this.token) {
      this.alert.alert();

      return;
    } else {
      const id = this.storage.getInStorage("user").id;

      const payload: any = {
        title: this.productForm.value.title,
        price: this.productForm.value.price.toString(),
        thumbnail: this.uploadFile,
        userId: id,
      };

      await this.store.addProducts(payload);
      await this.getProducts();
      this.clear();
      this.toaster.success("Product Added Succesfully");
    }
  }

  async editProduct() {
    const payload = await {
      title: this.productForm.value.title,
      price: this.productForm.value.price,
      thumbnail: this.uploadFile,
      id: this.editId,
    };
    await this.store.updateProducts(payload);
    this.getProducts();
    this.clear();
  }

  setId(payload: any) {
    this.editId = payload.id;
  }

  async deleteProduct(data: any) {
    await this.store.deleteProducts({ id: data.id });
    this.getProducts();
  }

  readURL(event: any) {
    const maxWidth = 512;
    const maxHeight = 512;

    let file = event.target.files;
    if (file.length > 1) {
      this.toaster.error("Please select exactly one image.");
      return;
    } else {
      file = file[0];
    }
    var imageReader = new FileReader();
    imageReader.readAsDataURL(file);

    imageReader.onload = (event: any) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        if (img.width > maxWidth || img.height > maxHeight) {
          this.toaster.error(
            `Image dimensions should not exceed ${maxWidth}x${maxHeight}.`,
          );
          return;
        } else {
          this.uploadFile = file;
          this.photo = img.src;
        }
      };
    };
  }

  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }
}
