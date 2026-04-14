import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  host: { 'class': 'block' },
  template: `
    <header class="relative w-full min-h-[90vh] rounded-[2rem] overflow-hidden bg-dark-800/30 shadow-2xl reveal active flex flex-col border border-dark-800">
      <!-- Navigation Bar -->
      <nav class="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 sm:py-6 gap-4">
        <!-- Logo -->
        <div class="flex items-center gap-2 sm:gap-3 animate-fadeIn delay-0 min-w-fit">
          <div class="text-primary-400 p-1.5 sm:p-2 rounded-lg border border-primary-400/30 bg-dark-900/50 backdrop-blur-md hover:scale-110 transition-transform duration-300">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <span class="text-primary-400 text-sm sm:text-lg lg:text-xl font-oswald uppercase tracking-widest font-semibold hidden sm:inline">Island Roaster</span>
        </div>

        <!-- Desktop Menu (centered) -->
        <div class="hidden md:flex items-center gap-1 bg-dark-900/80 backdrop-blur-md border border-primary-400/20 rounded-full p-1.5 px-2 font-oswald uppercase tracking-widest text-xs lg:text-sm animate-fadeIn delay-100">
          <a href="#story" class="px-3 lg:px-5 py-2 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-full transition-all duration-300 hover:scale-105 text-xs lg:text-sm">Our Story</a>
          <a href="#process" class="px-3 lg:px-5 py-2 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-full transition-all duration-300 hover:scale-105 text-xs lg:text-sm">Bean-to-Mug</a>
          <a href="#delivery" class="px-3 lg:px-5 py-2 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-full transition-all duration-300 hover:scale-105 text-xs lg:text-sm">Delivery</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button (click)="toggleMobileMenu()" class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-primary-400/30 hover:border-primary-400 transition-all duration-300 animate-fadeIn delay-100">
          <svg class="w-6 h-6 text-primary-400" [class.hidden]="mobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg class="w-6 h-6 text-primary-400" [class.hidden]="!mobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Right Actions (Desktop) -->
        <div class="hidden md:flex items-center gap-2 lg:gap-3 animate-fadeIn delay-200">
          <a href="#shop" class="group flex items-center gap-2 lg:gap-3 bg-primary-400 pl-3 lg:pl-5 pr-1 lg:pr-1.5 py-1.5 rounded-full hover:bg-cream transition-all duration-300 hover:shadow-lg hover:scale-105 text-xs lg:text-sm">
            <span class="font-oswald uppercase tracking-widest text-dark-900 font-medium hidden sm:inline">Taste the Craft</span>
            <span class="w-7 h-7 lg:w-8 lg:h-8 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300">
              <svg class="w-3 h-3 lg:w-4 lg:h-4 text-primary-400 group-hover:text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </span>
          </a>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div *ngIf="mobileMenuOpen" class="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-primary-400/20 px-4 py-4 animate-slideInDown">
        <div class="flex flex-col gap-3">
          <a href="#story" (click)="mobileMenuOpen = false" class="px-4 py-3 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-lg transition-all duration-300 font-oswald uppercase tracking-widest text-sm">Our Story</a>
          <a href="#process" (click)="mobileMenuOpen = false" class="px-4 py-3 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-lg transition-all duration-300 font-oswald uppercase tracking-widest text-sm">Bean-to-Mug</a>
          <a href="#delivery" (click)="mobileMenuOpen = false" class="px-4 py-3 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-lg transition-all duration-300 font-oswald uppercase tracking-widest text-sm">Delivery</a>
          <a href="#shop" (click)="mobileMenuOpen = false" class="px-4 py-3 bg-primary-400 text-dark-900 rounded-lg transition-all duration-300 font-oswald uppercase tracking-widest text-sm font-semibold hover:bg-cream">Taste the Craft</a>
        </div>
      </div>

      <!-- Hero Split Content -->
      <div class="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
        <!-- Left: Text -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-0">
          <span class="reveal reveal-delay-1 inline-block text-primary-400 font-playfair italic text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 animate-slideInLeft font-macondo">The Spirit of the Island</span>
          <h1 class="reveal reveal-delay-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream font-exo2 uppercase tracking-tight leading-[1.1] mb-6 sm:mb-8 max-w-2xl animate-slideInLeft delay-200">A Commitment to Roasting Excellence in the Maldives.</h1>
          <a href="#shop" class="reveal reveal-delay-3 w-max btn-primary group animate-slideInLeft hover:scale-105 text-sm sm:text-base delay-400">
            <span class="font-oswald uppercase tracking-widest font-semibold">Taste The Craft</span>
            <span class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300 group-hover:translate-x-1">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 group-hover:text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>
        </div>

        <!-- Right: Image -->
        <div class="w-full lg:w-1/2 relative min-h-[300px] sm:min-h-[400px] lg:min-h-full reveal reveal-delay-2 animate-slideInRight">
          <div class="lg:from-dark-900 bg-gradient-to-r from-dark-800/30 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
          <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2670&auto=format&fit=crop" alt="Premium Matte Black Coffee Pouch" class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten scale-105 hover:scale-110 transition-transform duration-700">
        </div>
      </div>
    </header>
  `,
})
export class HeroComponent implements OnInit {
  mobileMenuOpen = false;

  ngOnInit(): void {
    this.setupScrollReveal();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private setupScrollReveal(): void {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
}
