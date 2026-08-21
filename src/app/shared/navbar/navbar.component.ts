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
    <div class="pointer-events-none fixed left-0 right-0 top-0 z-[100] px-4 py-4 sm:px-6 lg:px-8" [class.md:py-6]="!isScrolled">
      <nav aria-label="Primary navigation" class="pointer-events-auto mx-auto flex max-w-[1380px] items-center justify-between gap-4 rounded-full border border-[#211815]/12 bg-[#fffdf8]/90 px-4 py-3 shadow-[0_12px_35px_rgba(33,24,21,0.1)] backdrop-blur-md transition-all duration-500 sm:px-6 lg:px-8">
        <button (click)="scrollToSection('hero')" class="group flex min-w-fit items-center gap-3" aria-label="Go to MERZY home"><span class="flex h-9 w-9 items-center justify-center rounded-full bg-[#2b1d19] text-[#d89a75] transition-transform duration-300 group-hover:scale-105"><svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v-4m4 4v-4m-8 4v-4M5.25 8h13.5v9a3.75 3.75 0 01-3.75 3.75h-6A3.75 3.75 0 015.25 17V8zM18.75 11.25h1.125A1.875 1.875 0 0121.75 13.125v.75a1.875 1.875 0 01-1.875 1.875h-1.125V11.25z"/></svg></span><span class="hidden text-sm font-bold uppercase tracking-[0.24em] text-[#2b1d19] transition-colors group-hover:text-[#8f4f37] sm:inline lg:text-base">MERZY</span></button>
        <div class="hidden items-center gap-1 rounded-full bg-[#f8f4ed] p-1 md:flex"><button (click)="scrollToSection('coffee')" [class]="navLinkClass('coffee')" class="rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 lg:px-4">Coffee</button><button (click)="scrollToSection('bakery')" [class]="navLinkClass('bakery')" class="rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 lg:px-4">Bakery</button><button (click)="scrollToSection('experience')" [class]="navLinkClass('experience')" class="rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 lg:px-4">Experience</button><button (click)="scrollToSection('location')" [class]="navLinkClass('location')" class="rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 lg:px-4">Location</button></div>
        <div class="flex items-center gap-2"><button (click)="openCart()" class="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#211815]/18 text-[#2b1d19] transition-all duration-300 hover:border-[#b86f4b] hover:text-[#8f4f37]" aria-label="Open cart"><svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>@if (cartCount > 0) {<span class="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b86f4b] px-1 text-[10px] font-bold text-white">{{ cartCount }}</span>}</button><button (click)="toggleMobileMenu()" class="flex h-10 w-10 items-center justify-center rounded-full border border-[#211815]/18 text-[#2b1d19] transition-all duration-300 hover:border-[#b86f4b] md:hidden" [attr.aria-expanded]="mobileMenuOpen" aria-label="Toggle menu"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"/></svg></button><button (click)="scrollToSection('location')" class="hidden items-center gap-3 rounded-full bg-[#2b1d19] py-1.5 pl-5 pr-1.5 text-[#fffdf8] transition-all duration-300 hover:bg-[#b86f4b] md:flex"><span class="text-xs font-bold uppercase tracking-widest">Visit MERZY</span><span class="flex h-8 w-8 items-center justify-center rounded-full bg-[#d89a75] text-[#2b1d19]"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span></button></div>
      </nav>
      <div *ngIf="mobileMenuOpen" class="pointer-events-auto mt-3 rounded-3xl border border-[#211815]/12 bg-[#fffdf8]/95 p-4 shadow-xl backdrop-blur-md md:hidden"><div class="flex flex-col gap-1"><button (click)="scrollToSection('hero')" [class]="mobileNavLinkClass('hero')" class="rounded-xl px-5 py-3 text-left text-sm font-bold uppercase tracking-widest">Home</button><button (click)="scrollToSection('coffee')" [class]="mobileNavLinkClass('coffee')" class="rounded-xl px-5 py-3 text-left text-sm font-bold uppercase tracking-widest">Coffee</button><button (click)="scrollToSection('bakery')" [class]="mobileNavLinkClass('bakery')" class="rounded-xl px-5 py-3 text-left text-sm font-bold uppercase tracking-widest">Bakery</button><button (click)="scrollToSection('experience')" [class]="mobileNavLinkClass('experience')" class="rounded-xl px-5 py-3 text-left text-sm font-bold uppercase tracking-widest">Experience</button><button (click)="scrollToSection('location')" [class]="mobileNavLinkClass('location')" class="rounded-xl px-5 py-3 text-left text-sm font-bold uppercase tracking-widest">Location</button><button (click)="scrollToSection('location')" class="mt-2 rounded-xl bg-[#2b1d19] px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-white hover:bg-[#b86f4b]">Visit MERZY</button></div></div>
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
  scrollToSection(id: string): void { this.mobileMenuOpen = false; this.activeSection = id; this.cdr.markForCheck(); this.motion.scrollToId(id); }
  navLinkClass(section: string): string { return this.activeSection === section ? 'bg-[#2b1d19] text-[#fffdf8]' : 'text-[#211815]/60 hover:bg-white hover:text-[#8f4f37]'; }
  mobileNavLinkClass(section: string): string { return this.activeSection === section ? 'bg-[#2b1d19] text-[#fffdf8]' : 'text-[#211815]/60 hover:bg-[#f8f4ed] hover:text-[#8f4f37]'; }
}
