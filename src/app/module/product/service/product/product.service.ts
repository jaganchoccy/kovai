import { Injectable } from '@angular/core';
import { HTTPService } from '../http.service';
import { ConfigUrl } from '../configUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private ConstURL: ConfigUrl, private httpService: HTTPService) { }

  GetProducts() {
    let productGetUrl = this.ConstURL.productGetUrl;
    return this.httpService.makeHTTPGETRequest(productGetUrl);
  }
}
