import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    UnicornStudio: any;
  }
}

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Unicorn Studio Project Container -->
    <div 
      class="fixed inset-0 w-full h-full -z-10 bg-dark-900 opacity-60 transition-opacity duration-1000" 
      style="filter: sepia(0.2) saturate(0.9);"
      data-us-project="aH0ZsntZ1TcKHIyweEA8">
    </div>

    <!-- Cinematic Vignette Overlay -->
    <div class="fixed inset-0 w-full h-full -z-5 pointer-events-none bg-gradient-to-b from-dark-900/10 via-transparent to-dark-900/60"></div>
  `,
})
export class BackgroundComponent implements OnInit {
  private readonly scriptId = 'unicorn-studio-script';

  ngOnInit(): void {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.loadWhenIdle();
    }
  }

  private loadWhenIdle(): void {
    const load = () => this.initUnicornStudio();
    const requestIdleCallback = (window as Window & {
      requestIdleCallback?: (callback: () => void, options: { timeout: number }) => number;
    }).requestIdleCallback;

    if (requestIdleCallback) {
      requestIdleCallback(load, { timeout: 3000 });
    } else {
      window.setTimeout(load, 1500);
    }
  }

  private initUnicornStudio(): void {
    // Check if script already exists
    if (document.getElementById(this.scriptId)) {
      this.initPlugin();
      return;
    }

    const script = document.createElement('script');
    script.id = this.scriptId;
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.1/dist/unicornStudio.umd.js';
    
    script.onload = () => {
      this.initPlugin();
    };

    document.head.appendChild(script);
  }

  private initPlugin(): void {
    const u = window.UnicornStudio;
    if (u && u.init) {
      window.setTimeout(() => u.init(), 100);
    }
  }
}
