import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  showOfferText = false;

  ngOnInit() {
    this.animateOfferText();
  }

  animateOfferText() {
    this.showOfferText = true;
  }
}
