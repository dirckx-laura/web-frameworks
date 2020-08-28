import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "../service/product.service";
import { Product } from "../service/product";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent {
  productAddForm = this.fb.group({
    name: ["", Validators.required],
    brand: ["", Validators.required],
    description: ["", Validators.required],
    price: ["", Validators.required],
  });

  constructor(
    private ps: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  onSubmit() {
    this.ps.addProduct(
      new Product(
        this.productAddForm.value.name,
        this.productAddForm.value.brand,
        this.productAddForm.value.description,
        this.productAddForm.value.price
      )
    );
    this.router.navigate([""]);
  }

  ngOnInit(): void {}
}
