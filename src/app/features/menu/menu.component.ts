import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
  desc: string;
}

import { DeliveryBannerComponent } from '../../shared/delivery-banner/delivery-banner.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, DeliveryBannerComponent],
  template: `
    <section id="menu" class="mt-24 sm:mt-32 lg:mt-44 px-4 sm:px-6 reveal">

      <!-- ── Freshly Packed & Delivered Banner (extracted) ────── -->
      <app-delivery-banner></app-delivery-banner>

      <!-- ── Section Header ─────────────────────── -->
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
        <span class="text-primary-400 font-bold uppercase text-sm tracking-[0.2em] mb-4 block">Our Selection</span>
        <h2 class="section-title">Enjoy A New Blend Of Coffee Style</h2>
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-16 bg-gradient-to-r from-transparent to-primary-400/60"></div>
          <svg class="w-4 h-4 text-primary-400 animate-svgFlicker" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <div class="h-px w-16 bg-gradient-to-l from-transparent to-primary-400/60"></div>
        </div>
        <p class="text-cream/60 text-base leading-relaxed">
          Explore all flavours of coffee with us.<br>
          There is always a new cup worth experiencing.
        </p>
      </div>

      <!-- ── Menu Grid ───────────────────────────── -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div *ngFor="let item of menuItems; let i = index"
             class="group relative bg-dark-900 rounded-[1.75rem] border border-primary-400/10 overflow-hidden
                    hover:border-primary-400/40 hover:shadow-2xl hover:shadow-primary-400/10
                    hover:-translate-y-2 transition-all duration-500">

          <!-- Badge -->
          <div *ngIf="item.tag"
               class="absolute top-4 left-4 z-20 bg-primary-400 text-dark-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {{ item.tag }}
          </div>

          <!-- In-cart quantity badge -->
          <div *ngIf="getQty(item.id) > 0"
               class="absolute top-4 right-4 z-20 w-7 h-7 bg-dark-900 border-2 border-primary-400 rounded-full
                      flex items-center justify-center text-primary-400 font-bold text-xs animate-scaleIn">
            {{ getQty(item.id) }}
          </div>

          <!-- Image -->
          <div class="relative h-52 overflow-hidden">
            <img [src]="item.image" [alt]="item.name" loading="lazy"
                 class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent pointer-events-none"></div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <div class="flex items-start justify-between mb-2">
              <div>
                <h3 class="text-cream font-macondo text-lg tracking-tight">{{ item.name }}</h3>
                <p class="text-cream/40 text-xs leading-relaxed mt-0.5">{{ item.desc }}</p>
              </div>
              <span class="text-primary-400 font-bold text-sm mt-0.5 ml-3 flex-shrink-0">{{ item.price }} MVR</span>
            </div>

            <!-- Add to Cart / Qty Controls -->
            <div class="mt-4">
              <!-- Show simple Add button if qty === 0 -->
              <button *ngIf="getQty(item.id) === 0"
                      (click)="addToCart(item)"
                      class="w-full py-3 bg-dark-800 hover:bg-primary-400 text-primary-400 hover:text-dark-900
                             border border-primary-400/30 hover:border-primary-400 rounded-xl
                             font-bold uppercase tracking-widest text-xs transition-all duration-300
                             hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Add to Cart
              </button>

              <!-- Show qty stepper once in cart -->
              <div *ngIf="getQty(item.id) > 0"
                   class="flex items-center justify-between gap-2 bg-dark-800/60 border border-primary-400/30 rounded-xl px-3 py-2">
                <button (click)="decreaseQty(item)"
                        class="w-8 h-8 rounded-lg border border-primary-400/30 flex items-center justify-center
                               text-cream hover:border-primary-400 hover:bg-primary-400/10 transition-all duration-200">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                  </svg>
                </button>
                <span class="text-primary-400 font-bold text-sm">{{ getQty(item.id) }} in cart</span>
                <button (click)="addToCart(item)"
                        class="w-8 h-8 rounded-lg border border-primary-400/30 flex items-center justify-center
                               text-cream hover:border-primary-400 hover:bg-primary-400/10 transition-all duration-200">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View Cart CTA (shown when cart has items) -->
      <div *ngIf="cartCount > 0" class="text-center mt-10">
        <button (click)="openCart()"
                class="inline-flex items-center gap-3 btn-primary group">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span class="font-bold uppercase tracking-widest">View Cart ({{ cartCount }} item{{ cartCount !== 1 ? 's' : '' }})</span>
          <span class="w-10 h-10 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300 group-hover:translate-x-1">
            <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </span>
        </button>
      </div>

    </section>
  `,
})
export class MenuComponent implements OnInit, OnDestroy {
  cartCount = 0;
  private cartItems: any[] = [];
  private sub!: Subscription;

  menuItems: MenuItem[] = [
    { id: 'cappuccino',  name: 'Cappuccino',  price: 120, tag: 'Popular',     desc: 'Espresso, steamed milk, velvety foam.',
      image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=800&auto=format&fit=crop' },
    { id: 'chai-latte',  name: 'Chai Latte',  price: 110, desc: 'Spiced tea concentrate, oat milk.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop' },
    { id: 'macchiato',   name: 'Macchiato',   price: 130, desc: 'Double ristretto, dash of cream.',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop' },
    { id: 'americano',   name: 'Americano',   price: 90,  desc: 'Long black, clean finish.',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop' },
    { id: 'espresso',    name: 'Espresso',    price: 80,  tag: 'Best Seller', desc: 'Pure, concentrated, bold.',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop' },
    { id: 'cold-brew',   name: 'Cold Brew',   price: 140, desc: '16-hour steep, smooth & sweet.',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop' },
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.sub = this.cartService.items.subscribe(items => {
      this.cartItems = items;
      this.cartCount = this.cartService.totalCount;
    });
  }

  ngOnDestroy(): void { this.sub?.unsubscribe(); }

  getQty(id: string): number { return this.cartService.getItemQty(id); }

  addToCart(item: MenuItem): void {
    this.cartService.addItem({ id: item.id, name: item.name, price: item.price, image: item.image });
  }

  decreaseQty(item: MenuItem): void {
    this.cartService.updateQty(item.id, this.getQty(item.id) - 1);
  }

  openCart(): void { this.cartService.open(); }
}
