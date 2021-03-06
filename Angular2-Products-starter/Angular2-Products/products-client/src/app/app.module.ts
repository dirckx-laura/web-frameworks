import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";
import { ProductService } from "./service/product.service";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductSearchComponent } from "./product-search/product-search.component";

// define the routes
const appRoutes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "add", component: ProductAddComponent },
  { path: "delete", component: ProductDeleteComponent },
  { path: "search", component: ProductSearchComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDeleteComponent,
    ProductAddComponent,
    ProductSearchComponent,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
