import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductService } from '../../service/product/product.service';
import { ThemeService } from 'src/app/shared/theme.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../model/product';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let mockProductService:jasmine.SpyObj<ProductService>;;
  let mockthemeService:jasmine.SpyObj<ThemeService>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,CommonModule,FormsModule],
      declarations: [ProductComponent],
      providers: [
        {
          provide: ProductService,useValue: jasmine.createSpyObj('ProductService', ['GetAllProducts','GetproductCategory']),
        },
        {
          provide: ThemeService,
          useValue: jasmine.createSpyObj('ThemeService', ['toggleTheme']),
        },
      ],
    });

  
  }));

  beforeEach(() => {
    
    mockProductService = TestBed.get(ProductService);
    mockthemeService = TestBed.get(ThemeService);
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set products and isLoading to false on successful GetProducts and categories call', () => {
    // Arrange
    const product:Product = {
      productId: 0,
      productSku: '',
      productName: '',
      productPrice: 0,
      productShortName: '',
      productDescription: '',
      createdDate: new Date,
      deliveryTimeSpan: '',
      categoryId: 0,
      productImageUrl: '',
      categoryName: ''
    }
    const mockProducts = [product];
    mockProductService.GetAllProducts.and.returnValue(of({ result: true, data: mockProducts }));
    mockProductService.GetproductCategory.and.returnValue(of({ result: true, data: {
      parentCategoryId: 0,
      categoryName: 'Categories',
      categoryId: 0,
    } }));

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.products).toEqual(mockProducts);
    expect(mockProductService.GetAllProducts).toHaveBeenCalledTimes(1)
    expect(mockProductService.GetAllProducts).toHaveBeenCalledWith()
    expect(mockProductService.GetproductCategory).toHaveBeenCalledOnceWith()
  });

  
});
