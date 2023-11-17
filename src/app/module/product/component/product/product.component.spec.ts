import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductService } from '../../service/product/product.service';
import { ThemeService } from 'src/app/shared/theme.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let mockProductService:jasmine.SpyObj<ProductService>;
  let mockthemeService:jasmine.SpyObj<ThemeService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ProductComponent],
      providers: [
        {
          provide: ProductService,
          useValue: jasmine.createSpyObj('ProductService', [
            'GetProductById',
            'GetProducts',
            'GetproductCategory',
          ]),
        },
        {
          provide: ThemeService,
          useValue: jasmine.createSpyObj('ThemeService', ['toggleTheme']),
        },
      ],
    });

    mockProductService = TestBed.get(ProductService);
    mockthemeService = TestBed.get(ThemeService);
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
