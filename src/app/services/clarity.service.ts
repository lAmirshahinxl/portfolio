import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    clarity: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ClarityService {
  private readonly CLARITY_ID = 'q0802tfgrp';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadClarity();
    }
  }

  private loadClarity(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${this.CLARITY_ID}`;

    // Add error handling
    script.onerror = () => {
      console.error('Error loading Clarity script');
    };

    // Initialize clarity
    if (!window.clarity) {
      window.clarity = function(...args: any[]) {
        (window.clarity.q = window.clarity.q || []).push(args);
      };
    }

    document.head.appendChild(script);
  }
} 