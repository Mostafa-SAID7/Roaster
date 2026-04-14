import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  host: { 'class': 'block' },
  template: `
    <!-- Wrapper for Sticky Header -->
    <div class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none px-4 sm:px-6 lg:px-8 py-4" 
         [class.md:py-6]="!isScrolled">
      <nav class="max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 gap-4 bg-dark-900/80 backdrop-blur-xl border border-primary-400/20 rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-auto transition-all duration-500"
           [class.translate-y-0]="!isScrolled">
        
        <!-- Logo -->
        <div (click)="scrollToSection('hero')" class="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-fit">
          <div class="text-primary-400 p-1.5 sm:p-2 rounded-lg border border-primary-400/30 bg-dark-900/50 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <span class="text-primary-400 text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-widest hidden sm:inline group-hover:text-cream transition-colors">Roaster</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1 bg-dark-950/50 backdrop-blur-md border border-primary-400/10 rounded-full p-1 font-bold uppercase tracking-widest text-xs">
          <a (click)="scrollToSection('story')" 
             [class]="navLinkClass('story')" 
             class="px-4 lg:px-6 py-2 rounded-full transition-all duration-300 cursor-pointer">Our Story</a>
          <a (click)="scrollToSection('process')" 
             [class]="navLinkClass('process')" 
             class="px-4 lg:px-6 py-2 rounded-full transition-all duration-300 cursor-pointer">Bean-to-Mug</a>
          <a (click)="scrollToSection('delivery')" 
             [class]="navLinkClass('delivery')" 
             class="px-4 lg:px-6 py-2 rounded-full transition-all duration-300 cursor-pointer">Delivery</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button (click)="toggleMobileMenu()" class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-primary-400/30 hover:border-primary-400 transition-all duration-300">
          <svg class="w-6 h-6 text-primary-400" [class.hidden]="mobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg class="w-6 h-6 text-primary-400" [class.hidden]="!mobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center">
          <a (click)="scrollToSection('shop')" class="group flex items-center gap-3 bg-primary-400 pl-5 pr-1.5 py-1.5 rounded-full hover:bg-cream transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95">
            <span class="font-bold uppercase tracking-widest text-dark-900 text-xs">Taste the Craft</span>
            <span class="w-8 h-8 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300">
              <svg class="w-4 h-4 text-primary-400 group-hover:text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </span>
          </a>
        </div>
      </nav>

      <!-- Mobile Menu Overlay -->
      <div *ngIf="mobileMenuOpen" 
           class="md:hidden mt-4 bg-dark-900/95 backdrop-blur-xl border border-primary-400/20 px-4 py-6 rounded-[2rem] shadow-2xl animate-slideInDown animate-fadeIn pointer-events-auto">
        <div class="flex flex-col gap-2">
          <a (click)="scrollToSection('story')" class="px-6 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             [class]="mobileNavLinkClass('story')">Our Story</a>
          <a (click)="scrollToSection('process')" class="px-6 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             [class]="mobileNavLinkClass('process')">Bean-to-Mug</a>
          <a (click)="scrollToSection('delivery')" class="px-6 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             [class]="mobileNavLinkClass('delivery')">Delivery</a>
          <div class="h-px bg-primary-400/10 my-2 mx-4"></div>
          <a (click)="scrollToSection('shop')" class="px-6 py-4 bg-primary-400 text-dark-900 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm hover:bg-cream text-center">Taste the Craft</a>
        </div>
      </div>
    </div>

    <header id="hero" class="relative w-full min-h-[95vh] rounded-[3rem] sm:rounded-[4rem] overflow-hidden bg-dark-900 shadow-2xl reveal active flex flex-col border border-primary-400/10 mt-2">

      <!-- Hero Split Content -->
      <div class="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
        <!-- Left: Text -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-0">
          <span class="reveal reveal-delay-1 inline-block text-primary-400 font-macondo text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 animate-slideInLeft">The Spirit of the Island</span>
          <h1 class="reveal reveal-delay-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream uppercase tracking-tight leading-[1.1] mb-6 sm:mb-8 max-w-2xl animate-slideInLeft delay-200">A Commitment to Roasting Excellence in the Maldives.</h1>
          <a href="#shop" class="reveal reveal-delay-3 w-max btn-primary group animate-slideInLeft hover:scale-105 text-sm sm:text-base delay-400">
            <span class="font-bold uppercase tracking-widest">Taste The Craft</span>
            <span class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300 group-hover:translate-x-1">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 group-hover:text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>
        </div>

        <!-- Right: Image with Focus Zoom & Rounded Accents -->
        <div class="w-full lg:w-1/2 p-4 sm:p-8 lg:p-12 xl:p-16 flex items-center justify-center reveal reveal-delay-2 animate-slideInRight">
          <div class="relative w-full h-[350px] sm:h-[450px] lg:h-[90%] xl:h-[95%] rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-primary-400/20 shadow-2xl group animate-subtleGlow">
            <!-- Cinematic Overlays -->
            <div class="absolute inset-0 bg-gradient-to-tr from-dark-900 via-transparent to-primary-400/10 z-10 pointer-events-none"></div>
            <div class="absolute inset-0 bg-dark-900/10 mix-blend-multiply z-10 pointer-events-none"></div>
            <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] lg:rounded-[4rem] z-20 pointer-events-none"></div>
            
            <!-- Focus Zoom Image -->
            <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop" 
                 alt="Premium Roaster Coffee Packaging" 
                 fetchpriority="high"
                 class="absolute inset-0 w-full h-full object-cover transform animate-imageSlowZoom group-hover:scale-125 transition-transform duration-[2000ms] ease-out">
            
            <!-- Floating Accent -->
            <div class="absolute bottom-10 left-10 z-20 hidden sm:block animate-fadeIn delay-500">
              <div class="glass-effect p-4 rounded-2xl border border-primary-400/30 flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center text-dark-900 font-bold">100%</div>
                <div>
                  <div class="text-xs font-bold uppercase tracking-widest text-primary-400">Pure Grade</div>
                  <div class="text-sm font-macondo text-cream">Single Origin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeroComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  activeSection = 'hero';
  isScrolled = false;
  private observer: IntersectionObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollSpy();
      window.addEventListener('scroll', this.onScroll);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private onScroll = (): void => {
    this.isScrolled = window.scrollY > 50;
  }

  private setupScrollSpy(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Sections to observe
    ['hero', 'story', 'process', 'delivery', 'shop'].forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer?.observe(el);
    });
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.mobileMenuOpen = false;
      this.activeSection = id;
    }
  }

  navLinkClass(section: string): string {
    return this.activeSection === section 
      ? 'text-dark-900 bg-primary-400 shadow-lg shadow-primary-400/20' 
      : 'text-cream/80 hover:text-primary-400 hover:bg-dark-800/50';
  }

  mobileNavLinkClass(section: string): string {
    return this.activeSection === section 
      ? 'text-primary-400 bg-dark-800 border-l-4 border-primary-400' 
      : 'text-cream/80 hover:text-primary-400 hover:bg-dark-800';
  }
}
