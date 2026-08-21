import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { MotionService } from '../../core/services/motion.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-none px-4 sm:px-6 lg:px-8 py-4" [class.md:py-6]="!isScrolled">
      <nav class="max-w-[1500px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 gap-4 bg-dark-900/80 backdrop-blur-md border border-primary-400/20 rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-auto transition-all duration-500">
        <button (click)="scrollToSection('hero')" class="flex items-center gap-2 sm:gap-3 group min-w-fit" aria-label="Go to MERZY home"><span class="w-9 h-9 sm:w-10 sm:h-10 text-primary-400 rounded-lg border border-primary-400/30 bg-dark-900/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v-4m4 4v-4m-8 4v-4M5.25 8h13.5v9a3.75 3.75 0 01-3.75 3.75h-6A3.75 3.75 0 015.25 17V8zM18.75 11.25h1.125A1.875 1.875 0 0121.75 13.125v.75a1.875 1.875 0 01-1.875 1.875h-1.125V11.25z"/></svg></span><span class="text-primary-400 text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-[0.25em] hidden sm:inline group-hover:text-cream transition-colors">MERZY</span></button>
        <div class="hidden md:flex items-center gap-1 bg-dark-950/50 backdrop-blur-sm border border-primary-400/10 rounded-full p-1 font-bold uppercase tracking-widest text-xs">
          <button (click)="scrollToSection('coffee')" [class]="navLinkClass('coffee')" class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300">Coffee</button>
          <button (click)="scrollToSection('bakery')" [class]="navLinkClass('bakery')" class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300">Bakery</button>
          <button (click)="scrollToSection('experience')" [class]="navLinkClass('experience')" class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300">Experience</button>
          <button (click)="scrollToSection('location')" [class]="navLinkClass('location')" class="px-3 lg:px-5 py-2 rounded-full transition-all duration-300">Location</button>
        </div>
        <div class="flex items-center gap-2">
          <button (click)="openCart()" class="relative flex items-center justify-center w-10 h-10 rounded-xl border border-primary-400/30 hover:border-primary-400 hover:bg-dark-800/50 transition-all duration-300" aria-label="Open cart"><svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>@if (cartCount > 0) {<span class="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 bg-primary-400 text-dark-900 text-[10px] font-bold rounded-full flex items-center justify-center">{{ cartCount }}</span>}</button>
          <button (click)="toggleMobileMenu()" class="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-primary-400/30 hover:border-primary-400 transition-all duration-300" [attr.aria-expanded]="mobileMenuOpen" aria-label="Toggle menu"><svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"/></svg></button>
          <button (click)="scrollToSection('location')" class="hidden md:flex group items-center gap-3 bg-primary-400 pl-5 pr-1.5 py-1.5 rounded-full hover:bg-cream transition-all duration-300 hover:scale-105 active:scale-95"><span class="font-bold uppercase tracking-widest text-dark-900 text-xs">Visit MERZY</span><span class="w-8 h-8 bg-dark-900 rounded-full flex items-center justify-center"><svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span></button>
        </div>
      </nav>
      <div *ngIf="mobileMenuOpen" class="md:hidden mt-4 bg-dark-900/95 backdrop-blur-md border border-primary-400/20 px-4 py-6 rounded-[2rem] shadow-2xl animate-slideInDown animate-fadeIn pointer-events-auto"><div class="flex flex-col gap-2"><button (click)="scrollToSection('hero')" [class]="mobileNavLinkClass('hero')" class="text-left px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Home</button><button (click)="scrollToSection('coffee')" [class]="mobileNavLinkClass('coffee')" class="text-left px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Coffee</button><button (click)="scrollToSection('bakery')" [class]="mobileNavLinkClass('bakery')" class="text-left px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Bakery</button><button (click)="scrollToSection('experience')" [class]="mobileNavLinkClass('experience')" class="text-left px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Experience</button><button (click)="scrollToSection('location')" [class]="mobileNavLinkClass('location')" class="text-left px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm">Location</button><button (click)="scrollToSection('location')" class="px-6 py-4 bg-primary-400 text-dark-900 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-cream text-center">Visit MERZY</button></div></div>
    </div>
  `,
})
export class NavbarComponent implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  activeSection = 'hero';
  isScrolled = false;
  cartCount = 0;
  private readonly sectionIds = ['hero', 'story', 'coffee', 'bakery', 'experience', 'location', 'menu'];
  private observed = new Set<string>();
  private observer: IntersectionObserver | null = null;
  private mutationObserver: MutationObserver | null = null;
  private scrollFrame: number | null = null;
  private cartSub?: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private motion: MotionService, private cdr: ChangeDetectorRef, private cartService: CartService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollSpy();
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.cartSub = this.cartService.items.subscribe(items => { this.cartCount = items.reduce((sum, i) => sum + i.quantity, 0); this.cdr.markForCheck(); });
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.mutationObserver?.disconnect();
    this.cartSub?.unsubscribe();
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
      if (this.scrollFrame !== null) cancelAnimationFrame(this.scrollFrame);
    }
  }

  toggleMobileMenu(): void { this.mobileMenuOpen = !this.mobileMenuOpen; }
  openCart(): void { this.cartService.open(); }
  private onScroll = (): void => { if (this.scrollFrame !== null) return; this.scrollFrame = requestAnimationFrame(() => { this.isScrolled = window.scrollY > 50; this.scrollFrame = null; this.cdr.markForCheck(); }); };
  private setupScrollSpy(): void { this.observer = new IntersectionObserver(entries => { const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) { this.activeSection = visible.target.id; this.cdr.markForCheck(); } }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 }); this.observeSections(); this.mutationObserver = new MutationObserver(() => this.observeSections()); this.mutationObserver.observe(document.body, { childList: true, subtree: true }); }
  private observeSections(): void { for (const id of this.sectionIds) { if (this.observed.has(id)) continue; const element = document.getElementById(id); if (element) { this.observed.add(id); this.observer?.observe(element); } } if (this.observed.size === this.sectionIds.length) { this.mutationObserver?.disconnect(); this.mutationObserver = null; } }
  scrollToSection(id: string): void { this.mobileMenuOpen = false; this.activeSection = id; this.cdr.markForCheck(); if (!this.motion.scrollToId(id)) requestAnimationFrame(() => this.motion.scrollToId(id)); }
  navLinkClass(section: string): string { return this.activeSection === section ? 'text-dark-900 bg-primary-400 shadow-lg shadow-primary-400/20' : 'text-cream/80 hover:text-primary-400 hover:bg-dark-800/50'; }
  mobileNavLinkClass(section: string): string { return this.activeSection === section ? 'bg-primary-400 text-dark-900 shadow-lg shadow-primary-400/20' : 'text-cream/80 hover:text-primary-400 hover:bg-dark-800/50'; }
}
