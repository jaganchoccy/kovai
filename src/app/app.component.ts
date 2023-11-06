import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClientConfiguration } from './shared/configuration-service/client-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 

  constructor(private httpClient: HttpClient) {}


}
