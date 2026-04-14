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

  ngOnInit(): void {
    this.initVanta();
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  private initVanta(): void {
    // Wait for THREE and VANTA to be loaded
    const checkVanta = setInterval(() => {
      if (window.VANTA && window.THREE) {
        clearInterval(checkVanta);
        this.createVantaEffect();
      }
    }, 100);

    // Timeout after 5 seconds
    setTimeout(() => clearInterval(checkVanta), 5000);
  }

  private createVantaEffect(): void {
    if (!this.vantaContainer) return;

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
  }
}
