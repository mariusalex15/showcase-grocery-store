import { AboutUsComponent } from "./website/pages/about-us/about-us.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./website/pages/home/home.component";
import { ShopComponent } from "./website/pages/shop/shop.component";
import { ContactComponent } from "./website/pages/contact/contact.component";
import { BlogsComponent } from "./website/pages/blogs/blogs.component";
import { LoginComponent } from "./website/pages/login/login.component";
import { SignupComponent } from "./website/pages/signup/signup.component";
import { CartComponent } from "./website/pages/cart/cart.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "contact-us",
    component: ContactComponent,
  },
  {
    path: "shop",
    component: ShopComponent,
  },
  {
    path: "blog",
    component: BlogsComponent,
  },
  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "shop/:category",
    component: ShopComponent,
  },
  {
    path: "shop/:category/:id",
    component: ShopComponent,
  },
  {
    path: "shop/:category/:id/:name",
    component: ShopComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },

  // { path: '**', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
