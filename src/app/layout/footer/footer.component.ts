import { Component, OnInit } from '@angular/core';
import { ExternalUrlHelper } from 'src/app/shared/urls/external-url-helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public privacyUrl: string | undefined;
  public termUrl: string | undefined;
  public faqUrl: string | undefined;

  ngOnInit(): void {
    this.privacyUrl = ExternalUrlHelper.Urls.footer.privacy;
    this.faqUrl = ExternalUrlHelper.Urls.footer.faq;
    this.termUrl = ExternalUrlHelper.Urls.footer.term;
  }
}
