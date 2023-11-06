export interface Product {
    productId:          number;
    productSku:         string;
    productName:        string;
    productPrice:       number;
    productShortName:   string;
    productDescription: string;
    createdDate:        Date;
    deliveryTimeSpan:   string;
    categoryId:         number;
    productImageUrl:    string;
    categoryName:       string;
}

export interface ProductCategory {
    parentCategoryId:   number;
    categoryName:         string;
    categoryId:         number;
}