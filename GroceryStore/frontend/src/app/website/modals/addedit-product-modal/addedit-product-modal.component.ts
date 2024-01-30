import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StoreService } from "../../service/store/store.service";

@Component({
  selector: "app-addedit-product-modal",
  templateUrl: "./addedit-product-modal.component.html",
  styleUrls: ["./addedit-product-modal.component.scss"],
})
export class AddeditProductModalComponent {
  form: FormGroup | any;
  constructor(
    private formGroup: FormBuilder,
    private storeService: StoreService,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formGroup.group({
      title: ["", Validators.required],
      price: ["", Validators.required],
      thumbnail: ["", Validators.required],
    });
  }

  submit() {}

  async addProducts() {
    const data = await this.storeService.addProducts(this.form.value);

    if (data) {
      this.form.reset();
    }
  }
}
