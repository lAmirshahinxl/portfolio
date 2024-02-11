import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  changeLanguage(languageCode: string): void {
    if (languageCode === 'fa') {
      window.location.href = '/fa';
    } else {
      window.location.href = '/';
    }
  }
}
