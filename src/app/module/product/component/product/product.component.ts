import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  
})
export class ProductComponent implements OnInit {
  
  public products: Product | any = [];

  constructor(private productService: ProductService) {}

  

  ngOnInit(): void {
    this.GetProducts();
  }

  private GetProducts() {
    this.productService.GetProducts().subscribe({
      next: (res: any) => {
        if(res && res.result){
          this.products = res?.data;
        }
      },
      error: (e) => {
        console.error(e);
      },
      complete() {
        console.log('is completed');
      },
    });
  }
}
