import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

@Component({
  selector: 'app-vanta-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #vantaContainer class="fixed inset-0 w-full h-full -z-10 vanta-bg"></div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .vanta-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      pointer-events: none;
    }

    :host ::ng-deep canvas {
      display: block;
      width: 100% !important;
      height: 100% !important;
    }
  `]
})
export class VantaBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('vantaContainer', { static: false }) vantaContainer!: ElementRef;
  private vantaEffect: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadScriptsAndInit();
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  private loadScriptsAndInit(): void {
    // Load Three.js
    const threeScript = this.renderer.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    threeScript.async = true;
    threeScript.onload = () => {
      // Load Vanta after Three.js
      const vantaScript = this.renderer.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js';
      vantaScript.async = true;
      vantaScript.onload = () => {
        setTimeout(() => this.createVantaEffect(), 100);
      };
      this.renderer.appendChild(document.body, vantaScript);
    };
    this.renderer.appendChild(document.body, threeScript);
  }

  private createVantaEffect(): void {
    if (!this.vantaContainer || !window.VANTA) {
      console.warn('Vanta or container not ready');
      return;
    }

    try {
      this.vantaEffect = window.VANTA.TOPOLOGY({
        el: this.vantaContainer.nativeElement,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0xd4a373,
        backgroundColor: 0x1a1614,
        points: 12,
        maxDistance: 20,
        spacing: 15
      });
      console.log('Vanta background initialized successfully');
    } catch (error) {
      console.error('Error initializing Vanta:', error);
    }
  }
}
