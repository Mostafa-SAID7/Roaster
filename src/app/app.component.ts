import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { HeroComponent } from './features/hero/hero.component';
import { StoryComponent } from './features/story/story.component';
import { ServicesComponent } from './features/services/services.component';
import { ProcessComponent } from './features/process/process.component';
import { MenuComponent } from './features/menu/menu.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackgroundComponent } from './shared/background/background.component';
import { CartComponent } from './shared/cart/cart.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CartService } from './core/services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundComponent,
    HeroComponent,
    StoryComponent,
    ServicesComponent,
    ProcessComponent,
    MenuComponent,
    TestimonialsComponent,
    FooterComponent,
    CartComponent,
    NavbarComponent,
  ],
  template: `
    <!-- Cart Sidebar (global, always mounted) -->
    <app-cart></app-cart>

    <!-- Floating Action Buttons (Bottom Right) -->
    <div class="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[150] flex flex-col items-center gap-4">
      
      <!-- WhatsApp FAB (Always visible) -->
      <a href="https://wa.me/9603007000" target="_blank" rel="noopener" aria-label="Contact on WhatsApp"
         class="w-14 h-14 sm:w-16 sm:h-16 bg-dark-900 text-primary-400 border border-primary-400/30 rounded-full
                shadow-2xl shadow-primary-400/10 flex items-center justify-center
                hover:bg-primary-400 hover:text-dark-900 transition-all duration-300 hover:scale-110 active:scale-95 group">
        <svg class="w-6 h-6 sm:w-7 sm:h-7 animate-svgFloat" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.125.556 4.122 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
      </a>

      <!-- Cart FAB (Visible when items exist) -->
      <button *ngIf="cartCount > 0 && !cartOpen"
              (click)="openCart()"
              class="relative w-14 h-14 sm:w-16 sm:h-16 bg-primary-400 text-dark-900 rounded-full
                     shadow-2xl shadow-primary-400/30 flex items-center justify-center
                     hover:bg-cream transition-all duration-300 hover:scale-110 active:scale-95 group">
        <svg class="w-6 h-6 sm:w-7 sm:h-7 animate-svgPulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <span class="absolute -top-1.5 -right-1.5 w-6 h-6 bg-dark-900 text-primary-400 rounded-full
                     text-xs font-bold flex items-center justify-center border-2 border-primary-400 animate-scaleIn">
          {{ cartCount }}
        </span>
      </button>

    </div>

   

    <app-background></app-background>
     <app-navbar></app-navbar>
    <div class="relative z-10 max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6 overflow-hidden">
      <app-hero></app-hero>
      <app-story></app-story>
      <app-services></app-services>
      <app-process></app-process>
      <app-menu></app-menu>
      <app-testimonials></app-testimonials>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Roaster';
  cartCount = 0;
  cartOpen = false;
  private subs: Subscription[] = [];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.setupScrollReveal();
    this.subs.push(
      this.cartService.items.subscribe(() => this.cartCount = this.cartService.totalCount),
      this.cartService.isOpen.subscribe(open => this.cartOpen = open),
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  openCart(): void { this.cartService.open(); }

  private setupSEO(): void {
    this.titleService.setTitle('Roaster - Premium Maldivian Coffee | Specialty Coffee Roasted in Malé');
    this.metaService.updateTag({ name: 'description', content: 'Roaster - Premium specialty coffee roasted in the Maldives. Sustainably sourced, expertly roasted, delivered fresh to your island.' });
    this.metaService.updateTag({ name: 'keywords', content: 'specialty coffee, Maldives coffee, premium coffee, roasted coffee, sustainable coffee, Malé roastery, coffee delivery, single origin coffee' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://roaster7.netlify.app/' });
    this.metaService.updateTag({ property: 'og:title', content: 'Roaster - Premium Maldivian Coffee' });
    this.metaService.updateTag({ property: 'og:description', content: 'Specialty coffee roasted in the Maldives. Sustainably sourced, expertly roasted, delivered fresh.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'Roaster - Premium Maldivian Coffee' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop' });
    this.updateCanonicalLink('https://roaster7.netlify.app/');
  }

  private updateCanonicalLink(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setupScrollReveal(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 500);
  }
}
