import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product, ProductCategory } from '../../model/product';
import { ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  isLoading = true;
  public products: Product | any = [];
  public productCategories: ProductCategory | any = [];
  showDescription = false;
  selectedOption: number = 0;
  cacheProduct: Product | any = [];

  searchQuery: string = '';
  constructor(
    private productService: ProductService,
    public themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.GetProducts();
    this.GetAllCategories();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onSearch() {
    var filteredProducts = [];
    filteredProducts = this.products.filter((p: Product) => {
      return p.productName
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
    });

    console.log(filteredProducts);
    this.products = filteredProducts;
  }

  clear() {
    this.searchQuery = '';
    this.GetProducts();
  }

  getProductById() {
    if (this.selectedOption == 0) {
      this.GetProducts();
    } else {
      this.productService.GetProductById(this.selectedOption).subscribe({
        next: (res: any) => {
          if (res && res.result) {
            this.products = res?.data;
            this.isLoading = false;
          }
        },
        error: (e) => {
          console.error(e);
          this.isLoading = false;
        },
        complete() {
          console.log('is completed');
        },
      });
    }
  }

  GetAllCategories() {
    this.productService.GetproductCategory().subscribe({
      next: (res: any) => {
        if (res && res.result) {
          this.productCategories = [
            {
              parentCategoryId: 0,
              categoryName: 'Categories',
              categoryId: 0,
            },
            ...res.data
          ];
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Operation completed');
      },
    });
  }
  

   GetProducts() {
    this.productService.GetAllProducts().subscribe({
      next: (res: any) => {
        if (res && res.result) {
          this.products = res?.data;
          this.isLoading = false;
        }
      },
      error: (e) => {
        console.error(e);
        this.isLoading = false;
      },
      complete() {
        console.log('is completed');
      },
    });
  }
}
