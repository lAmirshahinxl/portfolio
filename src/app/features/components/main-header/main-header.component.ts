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

  onNavClick(sectionId: string) {
    // Update URL without page reload
    window.history.pushState({}, '', `#${sectionId}`);
    
    // Find and scroll to the element
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
