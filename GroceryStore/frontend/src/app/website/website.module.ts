import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { MyAccountComponent } from "./pages/my-account/my-account.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { CategoryBoxComponent } from "./components/category-box/category-box.component";
import { IconBoxComponent } from "./components/icon-box/icon-box.component";
import { WidgetComponent } from "./components/widget/widget.component";
import { NewsComponent } from "./pages/news/news.component";
import { HttpClientModule } from "@angular/common/http";
import { ShopComponent } from "./pages/shop/shop.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ContactWidgetComponent } from "./components/contact-widget/contact-widget.component";
import { PostCardComponent } from "./components/post-card/post-card.component";
import { BlogsComponent } from "./pages/blogs/blogs.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { AddeditProductModalComponent } from "./modals/addedit-product-modal/addedit-product-modal.component";
import { SharedModule } from "../shared/shared.module";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AboutUsComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent,
    MyAccountComponent,
    ProductCardComponent,
    CategoryBoxComponent,
    IconBoxComponent,
    WidgetComponent,
    NewsComponent,
    ShopComponent,
    BreadcrumbComponent,
    ContactComponent,
    ContactWidgetComponent,
    PostCardComponent,
    BlogsComponent,
    LoginComponent,
    SignupComponent,
    AddeditProductModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),
  ],
})
export class WebsiteModule {
  constructor() {}
}
