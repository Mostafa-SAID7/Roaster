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
export class BackgroundComponent implements OnInit, OnDestroy {
  private scriptId = 'unicorn-studio-script';

  ngOnInit(): void {
    this.initUnicornStudio();
  }

  ngOnDestroy(): void {
    // Optional: Cleanup if UnicornStudio provides a destroy method
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
      // Small delay to ensure the DOM element with data-us-project is available
      setTimeout(() => {
        u.init();
      }, 100);
    }
  }
}
