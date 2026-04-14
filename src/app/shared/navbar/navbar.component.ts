import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Wrapper for Sticky Header -->
    <div class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none px-4 sm:px-6 lg:px-8 py-4" 
         [class.md:py-6]="!isScrolled">
      <nav class="max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 gap-4 bg-dark-900/80 backdrop-blur-xl border border-primary-400/20 rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-auto transition-all duration-500"
           [class.translate-y-0]="!isScrolled">
        
        <!-- Logo -->
        <div (click)="scrollToSection('hero')" class="flex items-center gap-2 sm:gap-3 cursor-pointer group min-w-fit">
          <div class="text-primary-400 p-1.5 sm:p-2 rounded-lg border border-primary-400/30 bg-dark-900/50 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v-4m4 4v-4m-8 4v-4M5.25 8h13.5v9a3.75 3.75 0 01-3.75 3.75h-6A3.75 3.75 0 015.25 17V8zM18.75 11.25h1.125A1.875 1.875 0 0121.75 13.125v.75a1.875 1.875 0 01-1.875 1.875h-1.125V11.25z"/>
            </svg>
          </div>
          <span class="text-primary-400 text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-widest hidden sm:inline group-hover:text-cream transition-colors">Roaster</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1 bg-dark-950/50 backdrop-blur-md border border-primary-400/10 rounded-full p-1 font-bold uppercase tracking-widest text-xs">
          <a (click)="scrollToSection('story')" 
             [class]="navLinkClass('story')" 
             class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer">Story</a>
          <a (click)="scrollToSection('services')" 
             [class]="navLinkClass('services')" 
             class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer">Services</a>
          <a (click)="scrollToSection('menu')" 
             [class]="navLinkClass('menu')" 
             class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer">Menu</a>
          <a (click)="scrollToSection('reviews')" 
             [class]="navLinkClass('reviews')" 
             class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer">Reviews</a>
          <a (click)="scrollToSection('delivery')" 
             [class]="navLinkClass('delivery')" 
             class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300 cursor-pointer">Delivery</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button (click)="toggleMobileMenu()" class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-primary-400/30 hover:border-primary-400 transition-all duration-300">
          <svg class="w-6 h-6 text-primary-400 animate-svgPulse" [class.hidden]="mobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg class="w-6 h-6 text-primary-400" [class.hidden]="!mobileMenuOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center gap-3">
          <!-- Cart icon -->
          <button (click)="openCart()"
                  class="relative w-10 h-10 rounded-full border border-primary-400/30 flex items-center justify-center
                         text-cream/60 hover:text-primary-400 hover:border-primary-400 hover:bg-primary-400/10
                         transition-all duration-300 group/cart">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span *ngIf="cartCount > 0"
                  class="absolute -top-1 -right-1 w-5 h-5 bg-primary-400 text-dark-900 text-[9px] font-bold
                         rounded-full flex items-center justify-center animate-scaleIn">
              {{ cartCount }}
            </span>
          </button>
          <!-- CTA -->
          <a (click)="scrollToSection('menu')" class="group flex items-center gap-3 bg-primary-400 pl-5 pr-1.5 py-1.5 rounded-full hover:bg-cream transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95">
            <span class="font-bold uppercase tracking-widest text-dark-900 text-xs">Order Now</span>
            <span class="w-8 h-8 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300">
              <svg class="w-4 h-4 text-primary-400 group-hover:text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
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
          <a (click)="scrollToSection('services')" class="px-6 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             [class]="mobileNavLinkClass('services')">Services</a>
          <a (click)="scrollToSection('menu')" class="px-6 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             [class]="mobileNavLinkClass('menu')">Menu</a>
          <a (click)="scrollToSection('reviews')" class="px-6 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             [class]="mobileNavLinkClass('reviews')">Reviews</a>
          <a (click)="scrollToSection('delivery')" class="px-6 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm"
             [class]="mobileNavLinkClass('delivery')">Delivery</a>
          <div class="h-px bg-primary-400/10 my-2 mx-4"></div>
          <a (click)="scrollToSection('shop')" class="px-6 py-4 bg-primary-400 text-dark-900 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm hover:bg-cream text-center">Taste the Craft</a>
        </div>
      </div>
    </div>
  `
})
export class NavbarComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  activeSection = 'hero';
  isScrolled = false;
  cartCount = 0;
  private observer: IntersectionObserver | null = null;
  private cartSub!: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollSpy();
      window.addEventListener('scroll', this.onScroll);
    }
    this.cartSub = this.cartService.items.subscribe(
      () => this.cartCount = this.cartService.totalCount
    );
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
    }
    this.cartSub?.unsubscribe();
  }

  openCart(): void { this.cartService.open(); }

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

    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);

      // Sections to observe
      ['hero', 'story', 'services', 'process', 'menu', 'reviews', 'delivery', 'shop'].forEach(id => {
        const el = document.getElementById(id);
        if (el) this.observer?.observe(el);
      });
    }
  }

  scrollToSection(id: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.mobileMenuOpen = false;
        this.activeSection = id;
      }
    }
  }

  navLinkClass(section: string): string {
    return this.activeSection === section 
      ? 'text-dark-900 bg-primary-400 shadow-lg shadow-primary-400/20' 
      : 'text-cream/80 hover:text-primary-400 hover:bg-dark-800/50';
  }

  mobileNavLinkClass(section: string): string {
    return this.activeSection === section
      ? 'bg-primary-400 text-dark-900 shadow-lg shadow-primary-400/20'
      : 'text-cream/80 hover:text-primary-400 hover:bg-dark-800/50';
  }
}
