import { Injectable } from '@angular/core';
import { HTTPService } from '../http.service';
import { ConfigUrl } from '../configUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  GetAllProducts() {
    let productGetUrl = this.ConstURL.productGetUrl;
    return this.httpService.makeHTTPGETRequest(productGetUrl);
  }

  GetproductCategory() {
    let productCategoryUrl = this.ConstURL.productCategoryUrl;
    return this.httpService.makeHTTPGETRequest(productCategoryUrl);
  }

  GetProductById(id:Number | undefined) {
    
    let productByIdUrl = this.ConstURL.productByIdUrl + '?id='+id;
    return this.httpService.makeHTTPGETRequest(productByIdUrl);
  }
}
