import { Component } from '@angular/core';

@Component({
  selector: 'app-fa-main-header',
  standalone: true,
  imports: [],
  templateUrl: './fa-main-header.component.html',
  styleUrl: './fa-main-header.component.scss',
})
export class FaMainHeaderComponent {
  changeLanguage(languageCode: string): void {
    if (languageCode === 'fa') {
      window.location.href = '/fa';
    } else {
      window.location.href = '/';
    }
  }
}
