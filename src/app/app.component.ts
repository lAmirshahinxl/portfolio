import { CommonModule } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { FaIndexComponent } from './features/fa-index/fa-index.component';
import { ClarityService } from './services/clarity.service';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, FaIndexComponent],
})
export class AppComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription | undefined;

  constructor(
    private clarityService: ClarityService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Handle initial load
      setTimeout(() => {
        this.scrollToHashElement();
      }, 500);

      // Subscribe to router events
      this.routerSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.scrollToHashElement();
      });
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private scrollToHashElement() {
    if (!isPlatformBrowser(this.platformId)) return;

    const hash = window.location.hash;
    if (hash) {
      // Remove the # symbol
      const elementId = hash.slice(1);
      const element = document.getElementById(elementId);
      
      if (element) {
        // Wait a bit longer for content to be fully rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 500);
      }
    }
  }
}
