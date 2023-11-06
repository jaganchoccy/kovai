import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigUrl {

    productGetUrl: any;
    productCategoryUrl: any;
    productByIdUrl:any;

    constructor() {
        this.productGetUrl = 'api/Ecomm/GetAllProducts';
        this.productCategoryUrl= 'api/Ecomm/GetAllCategory';
        this.productByIdUrl='api/Ecomm/GetAllProductsByCategoryId'
        
    }
}
