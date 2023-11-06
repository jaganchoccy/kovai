import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';

import { OfferComponent } from './layout/header/offer/offer.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientConfiguration } from './shared/configuration-service/client-config';
import { AppInterceptorService } from './shared/interceptor.service';
import { ProductModule } from './module/product/product.module';
import { EcomInterceptorService } from './module/product/service/productInterceptor.service';
import { ThemeService } from './shared/theme.service';


export function initializeApp(http: HttpClient) {
  return () => {
    return new Promise<void>((resolve, reject) => {
       var URL = 'assets/Urls/ExternalUrls.json';
      http.get(URL).subscribe(
        {
          next: (res: any) => {
            ClientConfiguration._Config = res;
            resolve();
          },
          error: (e) => {
            console.error(e);
            resolve(); 
          },
          complete() {
            console.log('is completed');
          },
        }
      );
    });
  };
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptorService, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [HttpClient]
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
