import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "./product";

@Injectable()
export class ProductService {
  private productsServiceURI: string = "http://localhost:3000/products";
  private contentHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.contentHeaders = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
  }

  // Get all products
  getAllProducts(): Observable<Product[]> {
    let url = `${this.productsServiceURI}`;
    return this.http.get<Product[]>(url);
  }

  // Delete a product
  deleteProduct(name: string): void {
    let url = `${this.productsServiceURI}/delete/${name}`;
    // !!! subscribe is needed to execute DELETE
    this.http.delete(url, { headers: this.contentHeaders }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Add a product
  addProduct(product: Product): void {
    let url = `${this.productsServiceURI}/add`;
    this.http
      .post(url, product.getParams(), { headers: this.contentHeaders })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }
  //search product
  searchProduct(name: string): Observable<Product> {
    let url = `${this.productsServiceURI}/search`;

    return this.http.post<Product>(url, `name=${name}`, {
      headers: this.contentHeaders,
    });
  }
}
