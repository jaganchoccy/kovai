import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public mobileMenuOpen: boolean = false;
  sideBarPosition: string | undefined;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  slideOut(){
    this.sideBarPosition = '0px';

  }
  slideIn(){
    this.sideBarPosition = '-300px';
    
  }
}
