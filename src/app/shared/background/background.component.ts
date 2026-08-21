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
    <!-- Static fallback base (always present, cheap) -->
    <div class="fixed inset-0 w-full h-full -z-10 bg-dark-900"></div>

    <!-- Unicorn Studio interactive layer (only when enabled) -->
    @if (unicornActive) {
      <div
        class="fixed inset-0 w-full h-full -z-10 opacity-60 transition-opacity duration-1000"
        style="filter: sepia(0.2) saturate(0.9);"
        data-us-project="aH0ZsntZ1TcKHIyweEA8">
      </div>
    }

    <!-- Cinematic Vignette Overlay -->
    <div class="fixed inset-0 w-full h-full -z-5 pointer-events-none bg-gradient-to-b from-dark-900/10 via-transparent to-dark-900/60"></div>
  `,
})
export class BackgroundComponent implements OnInit, OnDestroy {
  private readonly scriptId = 'unicorn-studio-script';
  private initialized = false;
  private instances: any[] | null = null;
  private visibilityListener: (() => void) | null = null;

  unicornActive = true;

  ngOnInit(): void {
    this.unicornActive = this.shouldLoad();
    if (!this.unicornActive) return;

    this.loadWhenIdle();
    this.visibilityListener = () => this.onVisibilityChange();
    document.addEventListener('visibilitychange', this.visibilityListener);
  }

  ngOnDestroy(): void {
    this.destroyInstances();
    if (this.visibilityListener) {
      document.removeEventListener('visibilitychange', this.visibilityListener);
    }
    const script = document.getElementById(this.scriptId);
    if (script) script.remove();
  }

  /** Gate heavy GPU work for reduced-motion, data-saver, and slow networks. */
  private shouldLoad(): boolean {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    const conn = (navigator as any).connection;
    if (conn) {
      if (conn.saveData) return false;
      const type = conn.effectiveType;
      if (type === 'slow-2g' || type === '2g') return false;
    }
    return true;
  }

  private loadWhenIdle(): void {
    const load = () => this.initUnicornStudio();
    const ric = (window as Window & {
      requestIdleCallback?: (cb: () => void, opts: { timeout: number }) => number;
    }).requestIdleCallback;

    if (ric) {
      ric(load, { timeout: 3000 });
    } else {
      window.setTimeout(load, 1500);
    }
  }

  private initUnicornStudio(): void {
    if (document.getElementById(this.scriptId)) {
      this.initPlugin();
      return;
    }

    const script = document.createElement('script');
    script.id = this.scriptId;
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.1/dist/unicornStudio.umd.js';
    script.onload = () => this.initPlugin();
    script.onerror = () => { this.unicornActive = false; };
    document.head.appendChild(script);
  }

  private initPlugin(): void {
    if (this.initialized) return;
    const u = window.UnicornStudio;
    if (!u || !u.init) return;
    this.initialized = true;
    try {
      const result = u.init();
      this.instances = Array.isArray(result) ? result : (result ? [result] : []);
    } catch {
      this.initialized = false;
      this.unicornActive = false;
    }
  }

  private destroyInstances(): void {
    if (this.instances) {
      try {
        this.instances.forEach((i: any) => i?.destroy?.());
      } catch { /* noop */ }
      this.instances = null;
    }
    this.initialized = false;
  }

  private onVisibilityChange(): void {
    if (document.hidden) {
      // Pause rendering work while the tab is not visible.
      this.destroyInstances();
    } else {
      this.initPlugin();
    }
  }
}
