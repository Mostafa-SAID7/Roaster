import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { CartItem } from '../../core/models/cart.model';
import { SelectorComponent, SelectorOption } from '../selector/selector.component';

type CheckoutStep = 'cart' | 'checkout' | 'confirmation';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectorComponent],
  template: `
    <!-- Overlay -->
    <div *ngIf="isOpen"
         class="fixed inset-0 z-[200] bg-dark-900/60 backdrop-blur-sm"
         (click)="close()">
    </div>

    <!-- Sidebar Drawer -->
    <div class="fixed top-0 right-0 h-full z-[210] w-full max-w-md flex flex-col
                bg-dark-900 border-l border-primary-400/20 shadow-2xl
                transition-transform duration-500 ease-in-out"
         [class.translate-x-0]="isOpen"
         [class.translate-x-full]="!isOpen">

      <!-- ── HEADER ─────────────────────────────── -->
      <div class="flex items-center justify-between px-6 py-5 border-b border-primary-400/10">
        <!-- Step breadcrumbs -->
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <span [class]="step === 'cart' ? 'text-primary-400' : 'text-cream/30'">Cart</span>
          <svg class="w-3 h-3 text-cream/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span [class]="step === 'checkout' ? 'text-primary-400' : 'text-cream/30'">Checkout</span>
          <svg class="w-3 h-3 text-cream/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
          <span [class]="step === 'confirmation' ? 'text-primary-400' : 'text-cream/30'">Done</span>
        </div>
        <button (click)="close()"
                class="w-9 h-9 rounded-full border border-primary-400/20 flex items-center justify-center
                       text-cream/50 hover:text-cream hover:border-primary-400/60 transition-all duration-300">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- ── STEP 1: CART ───────────────────────── -->
      <div *ngIf="step === 'cart'" class="flex flex-col flex-1 overflow-hidden">
        <!-- Empty state -->
        <div *ngIf="items.length === 0" class="flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center">
          <div class="w-20 h-20 rounded-full bg-dark-800 border border-primary-400/20 flex items-center justify-center">
            <svg class="w-10 h-10 text-primary-400/40 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="1.3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <div>
            <p class="text-cream font-macondo text-xl mb-2 tracking-tight">Your cart is empty</p>
            <p class="text-cream/40 text-sm">Browse the menu and add your favourite coffees.</p>
          </div>
          <button (click)="close()"
                  class="btn-secondary text-sm">Browse Menu</button>
        </div>

        <!-- Items list -->
        <div *ngIf="items.length > 0" class="flex-1 overflow-y-auto no-scrollbar px-6 py-4 space-y-4">
          <div *ngFor="let item of items"
               class="flex items-center gap-4 bg-dark-800/50 rounded-2xl p-4 border border-primary-400/10
                      hover:border-primary-400/30 transition-all duration-300 group">
            <!-- Thumb -->
            <div class="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-primary-400/10">
              <img [src]="item.image" [alt]="item.name"
                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            </div>
            <!-- Info -->
            <div class="flex-1 min-w-0">
              <p class="text-cream font-macondo text-base tracking-tight truncate">{{ item.name }}</p>
              <p class="text-primary-400 text-sm font-bold">{{ item.price }} MVR</p>
            </div>
            <!-- Qty controls -->
            <div class="flex items-center gap-2">
              <button (click)="updateQty(item.id, item.quantity - 1)"
                      class="w-7 h-7 rounded-full border border-primary-400/30 flex items-center justify-center
                             text-cream/60 hover:text-cream hover:border-primary-400 hover:bg-primary-400/10 transition-all duration-200">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                </svg>
              </button>
              <span class="text-cream font-bold text-sm w-6 text-center">{{ item.quantity }}</span>
              <button (click)="updateQty(item.id, item.quantity + 1)"
                      class="w-7 h-7 rounded-full border border-primary-400/30 flex items-center justify-center
                             text-cream/60 hover:text-cream hover:border-primary-400 hover:bg-primary-400/10 transition-all duration-200">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
            <!-- Remove -->
            <button (click)="removeItem(item.id)"
                    class="w-7 h-7 rounded-full flex items-center justify-center text-cream/20 hover:text-red-400 transition-colors duration-200">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Cart Footer -->
        <div *ngIf="items.length > 0" class="px-6 py-5 border-t border-primary-400/10 space-y-4">
          <!-- Delivery island selector -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-widest text-primary-400 mb-2">Delivery Island</label>
            <app-selector
              [options]="islands"
              [selectedValue]="selectedIsland"
              placeholder="Select Island..."
              (selectionChange)="selectedIsland = $event">
            </app-selector>
          </div>

          <!-- Subtotal -->
          <div class="flex items-center justify-between text-sm">
            <span class="text-cream/50 font-bold uppercase tracking-widest text-xs">Subtotal</span>
            <span class="text-cream font-bold text-base">{{ subtotal }} MVR</span>
          </div>
          <div *ngIf="deliveryCost > 0" class="flex items-center justify-between text-sm">
            <span class="text-cream/50 font-bold uppercase tracking-widest text-xs">Delivery ({{ deliveryLabel }})</span>
            <span class="text-primary-400 font-bold text-sm">+ {{ deliveryCost }} MVR</span>
          </div>
          <div class="flex items-center justify-between border-t border-primary-400/10 pt-3">
            <span class="text-cream font-bold uppercase tracking-widest text-xs">Total</span>
            <span class="text-primary-400 font-bold text-xl">{{ total }} MVR</span>
          </div>

          <button (click)="goToCheckout()"
                  [disabled]="!selectedIsland"
                  class="w-full py-4 bg-primary-400 text-dark-900 font-bold uppercase tracking-widest text-sm rounded-xl
                         hover:bg-cream transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary-400">
            Proceed to Checkout
            <svg class="w-4 h-4 inline-block ml-2 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- ── STEP 2: CHECKOUT ───────────────────── -->
      <div *ngIf="step === 'checkout'" class="flex flex-col flex-1 overflow-hidden">
        <div class="flex-1 overflow-y-auto no-scrollbar px-6 py-6 space-y-5">
          <p class="text-cream/50 text-xs uppercase tracking-widest font-bold">Delivery Details</p>

          <!-- Name -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-primary-400/80">Full Name</label>
            <input type="text" [(ngModel)]="form.name" placeholder="Your name"
                   class="w-full h-12 bg-dark-800 border border-primary-400/20 rounded-xl px-4 text-cream text-sm
                          placeholder-cream/30 focus:border-primary-400 focus:outline-none transition-colors duration-300">
          </div>

          <!-- Phone -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-primary-400/80">Phone</label>
            <input type="tel" [(ngModel)]="form.phone" placeholder="+960 ..."
                   class="w-full h-12 bg-dark-800 border border-primary-400/20 rounded-xl px-4 text-cream text-sm
                          placeholder-cream/30 focus:border-primary-400 focus:outline-none transition-colors duration-300">
          </div>

          <!-- Island (readonly summary) -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-primary-400/80">Deliver to</label>
            <div class="w-full h-12 bg-dark-800/60 border border-primary-400/10 rounded-xl px-4 flex items-center text-primary-400 font-bold text-sm">
              {{ deliveryLabel }}
            </div>
          </div>

          <!-- Notes -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-widest text-primary-400/80">Special Notes <span class="text-cream/30 font-normal normal-case">(optional)</span></label>
            <textarea [(ngModel)]="form.notes" rows="3" placeholder="Any brewing preference, grind size, or notes..."
                      class="w-full bg-dark-800 border border-primary-400/20 rounded-xl px-4 py-3 text-cream text-sm
                             placeholder-cream/30 focus:border-primary-400 focus:outline-none transition-colors duration-300 resize-none no-scrollbar">
            </textarea>
          </div>

          <!-- Order Summary Mini -->
          <div class="bg-dark-800/50 rounded-2xl border border-primary-400/10 p-4 space-y-2">
            <p class="text-xs font-bold uppercase tracking-widest text-primary-400/60 mb-3">Order Summary</p>
            <div *ngFor="let item of items" class="flex justify-between text-sm text-cream/70">
              <span>{{ item.name }} × {{ item.quantity }}</span>
              <span class="font-bold">{{ item.price * item.quantity }} MVR</span>
            </div>
            <div class="border-t border-primary-400/10 pt-2 flex justify-between font-bold text-cream">
              <span>Total</span>
              <span class="text-primary-400">{{ total }} MVR</span>
            </div>
          </div>
        </div>

        <div class="px-6 py-5 border-t border-primary-400/10 flex gap-3">
          <button (click)="step = 'cart'"
                  class="flex-shrink-0 w-12 h-12 rounded-xl border border-primary-400/20 flex items-center justify-center
                         text-cream/50 hover:text-cream hover:border-primary-400 transition-all duration-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button (click)="placeOrder()"
                  [disabled]="!form.name || !form.phone"
                  class="flex-1 py-4 bg-primary-400 text-dark-900 font-bold uppercase tracking-widest text-sm rounded-xl
                         hover:bg-cream transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]
                         disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-primary-400">
            Place Order · {{ total }} MVR
          </button>
        </div>
      </div>

      <!-- ── STEP 3: CONFIRMATION ───────────────── -->
      <div *ngIf="step === 'confirmation'"
           class="flex-1 flex flex-col items-center justify-center px-8 text-center gap-6">
        <!-- Success checkmark animation -->
        <div class="w-24 h-24 rounded-full bg-primary-400/10 border-2 border-primary-400/40 flex items-center justify-center
                    animate-scaleIn">
          <svg class="w-12 h-12 text-primary-400 animate-svgPulse" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>

        <div class="space-y-3">
          <p class="text-primary-400 font-bold uppercase tracking-[0.2em] text-xs">Order Confirmed</p>
          <h3 class="text-cream font-macondo text-2xl sm:text-3xl tracking-tight">
            Thank you, {{ form.name.split(' ')[0] }}! ☕
          </h3>
          <p class="text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
            Your order <strong class="text-primary-400">#{{ orderNumber }}</strong> is being prepared at
            our Malé roastery and will be on its way to
            <strong class="text-cream">{{ deliveryLabel }}</strong> shortly.
          </p>
        </div>

        <!-- Estimated delivery -->
        <div class="w-full bg-dark-800/60 border border-primary-400/10 rounded-2xl p-5 text-sm space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-cream/50 uppercase tracking-widest text-xs font-bold">Estimated Delivery</span>
            <span class="text-primary-400 font-bold">{{ deliveryTime }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-cream/50 uppercase tracking-widest text-xs font-bold">Total Paid</span>
            <span class="text-cream font-bold">{{ total }} MVR</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-cream/50 uppercase tracking-widest text-xs font-bold">Contact</span>
            <span class="text-cream/70 text-xs">{{ form.phone }}</span>
          </div>
        </div>

        <button (click)="reset()"
                class="btn-primary group text-sm">
          <span class="font-bold uppercase tracking-widest">Order Again</span>
          <span class="w-8 h-8 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300">
            <svg class="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
          </span>
        </button>
      </div>

    </div>
  `,
})
export class CartComponent implements OnInit, OnDestroy {
  isOpen = false;
  step: CheckoutStep = 'cart';
  items: CartItem[] = [];
  selectedIsland = '';
  orderNumber = '';

  form = { name: '', phone: '', notes: '' };

  islands: SelectorOption[] = [
    { label: 'Malé — Next-Day · 40 MVR', value: 'male' },
    { label: 'Hulhumalé — Next-Day · 50 MVR', value: 'hulhumale' },
    { label: 'Villimalé — 2-Day · 60 MVR', value: 'villimale' },
    { label: 'Resort Islands — Speedboat · Quote', value: 'resort' },
  ];

  private deliveryMap: Record<string, { label: string; cost: number; time: string }> = {
    male:      { label: 'Malé',          cost: 40,  time: 'Next-Day Delivery' },
    hulhumale: { label: 'Hulhumalé',     cost: 50,  time: 'Next-Day Delivery' },
    villimale: { label: 'Villimalé',     cost: 60,  time: '2-Day Delivery'    },
    resort:    { label: 'Resort Island', cost: 0,   time: 'Speedboat – quoted' },
  };

  private subs: Subscription[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subs.push(
      this.cartService.items.subscribe(items => this.items = items),
      this.cartService.isOpen.subscribe(open => this.isOpen = open),
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  get subtotal(): number { return this.cartService.subtotal; }

  get deliveryCost(): number {
    return this.deliveryMap[this.selectedIsland]?.cost ?? 0;
  }

  get deliveryLabel(): string {
    return this.deliveryMap[this.selectedIsland]?.label ?? '';
  }

  get deliveryTime(): string {
    return this.deliveryMap[this.selectedIsland]?.time ?? '';
  }

  get total(): number { return this.subtotal + this.deliveryCost; }

  updateQty(id: string, qty: number): void { this.cartService.updateQty(id, qty); }
  removeItem(id: string): void { this.cartService.removeItem(id); }
  close(): void { this.cartService.close(); }

  goToCheckout(): void {
    if (this.selectedIsland) this.step = 'checkout';
  }

  placeOrder(): void {
    if (!this.form.name || !this.form.phone) return;
    this.orderNumber = 'RST-' + Math.floor(1000 + Math.random() * 9000);
    this.step = 'confirmation';
  }

  reset(): void {
    this.cartService.clear();
    this.step = 'cart';
    this.selectedIsland = '';
    this.form = { name: '', phone: '', notes: '' };
    this.cartService.close();
  }
}
