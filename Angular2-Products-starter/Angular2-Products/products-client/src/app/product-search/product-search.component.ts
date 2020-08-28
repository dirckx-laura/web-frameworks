import { Component, OnInit } from "@angular/core";
import { ProductService } from "../service/product.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "../service/product";

@Component({
  selector: "app-product-search",
  templateUrl: "./product-search.component.html",
  styleUrls: ["./product-search.component.css"],
})
export class ProductSearchComponent {
  product = new Product("", "", "", "");
  productSearchForm = this.fb.group({
    name: ["", Validators.required],
  });

  constructor(
    private ps: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    this.ps.searchProduct(this.productSearchForm.value.name).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
