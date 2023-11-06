import { Injectable } from '@angular/core';
import { ClientConfiguration } from '../configuration-service/client-config';

@Injectable({
  providedIn: 'root'
})
export class ExternalUrlHelper {

  public static get Urls():any{
    
    return ClientConfiguration.ExternalUrl || {};
  }
}
