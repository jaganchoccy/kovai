import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EcomInterceptorService } from './service/productInterceptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: EcomInterceptorService, multi: true }
  ],
})
export class ProductModule { }
