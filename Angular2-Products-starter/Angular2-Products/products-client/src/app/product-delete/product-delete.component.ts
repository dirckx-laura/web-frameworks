import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component ({
   selector: 'product-delete',
   templateUrl: './product-delete.component.html'
})

export class ProductDeleteComponent {
   productDeleteForm = this.fb.group({
      name: ['', Validators.required],
   });

   constructor(private ps: ProductService,
               private fb: FormBuilder, 
               private router: Router) {}

   onSubmit() {
       this.ps.deleteProduct(this.productDeleteForm.value.name);
       this.router.navigate(['']);
   }
}
