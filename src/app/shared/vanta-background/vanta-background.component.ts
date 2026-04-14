import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
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
  template: `<div #vantaContainer class="vanta-container"></div>`,
  styles: [`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -10;
      pointer-events: none;
      display: block;
    }

    .vanta-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    :host ::ng-deep canvas {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
    }
  `]
})
export class VantaBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('vantaContainer', { static: false }) vantaContainer!: ElementRef;
  private vantaEffect: any;

  ngOnInit(): void {
    this.loadVanta();
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  private loadVanta(): void {
    // Load Three.js first
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    threeScript.onload = () => {
      // Load Vanta after Three.js loads
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js';
      vantaScript.onload = () => {
        // Initialize Vanta after both scripts load
        setTimeout(() => this.initVanta(), 500);
      };
      document.body.appendChild(vantaScript);
    };
    document.body.appendChild(threeScript);
  }

  private initVanta(): void {
    if (!this.vantaContainer || !window.VANTA || !window.THREE) {
      console.error('Vanta or THREE not loaded, or container missing');
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
      console.log('✓ Vanta background initialized');
    } catch (error) {
      console.error('✗ Vanta initialization error:', error);
    }
  }
}
