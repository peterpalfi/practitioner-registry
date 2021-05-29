import { Component, ViewEncapsulation } from '@angular/core';
import { TitleService } from './services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  constructor(private titleService: TitleService) {
    this.titleService.refreshTitle();
  }
}