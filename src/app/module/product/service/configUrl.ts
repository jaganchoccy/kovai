import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigUrl {

    productGetUrl: any;

    constructor() {
        this.productGetUrl = 'api/Ecomm/GetAllProducts';
    }
}
