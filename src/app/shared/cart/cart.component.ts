import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { CartItem } from '../../core/models/cart.model';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (isOpen) {
      <div class="fixed inset-0 z-[200] flex justify-end">
        <div class="absolute inset-0 bg-dark-900/80 backdrop-blur-sm animate-fadeIn" (click)="close()"></div>
        <div class="relative w-full max-w-md bg-dark-900 border-l border-primary-400/20 h-full flex flex-col shadow-2xl animate-slideInRight">
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-5 border-b border-primary-400/10">
            <h2 class="text-2xl font-macondo text-cream tracking-tight">Your Order</h2>
            <button (click)="close()" aria-label="Close cart" class="w-10 h-10 rounded-full border border-primary-400/20 flex items-center justify-center text-primary-400 hover:bg-dark-800 hover:border-primary-400/40 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Items -->
          <div class="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
            @if (items.length === 0) {
              <div class="flex flex-col items-center justify-center h-full text-center gap-4">
                <div class="w-16 h-16 rounded-full bg-dark-800 border border-primary-400/20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary-400/50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <p class="text-cream/50 text-sm">Your cart is empty.<br>Add something from the menu.</p>
              </div>
            } @else {
              <div class="space-y-4">
                @for (item of items; track item.id) {
                  <div class="flex items-center gap-4 bg-dark-800/50 border border-primary-400/10 rounded-2xl p-4">
                    <div class="flex-1 min-w-0">
                      <h3 class="text-cream font-bold text-sm uppercase tracking-wider truncate">{{ item.name }}</h3>
                      <p class="text-primary-400 text-sm mt-1">{{ item.price }} EGP</p>
                    </div>
                    <div class="flex items-center gap-2 bg-dark-900 rounded-full border border-primary-400/20 px-2 py-1">
                      <button (click)="decreaseQty(item.id)" aria-label="Decrease quantity" class="w-7 h-7 flex items-center justify-center text-primary-400 hover:text-cream transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 12H4"/></svg>
                      </button>
                      <span class="text-cream font-bold text-sm w-6 text-center">{{ item.quantity }}</span>
                      <button (click)="increaseQty(item.id)" aria-label="Increase quantity" class="w-7 h-7 flex items-center justify-center text-primary-400 hover:text-cream transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
                      </button>
                    </div>
                    <button (click)="removeItem(item.id)" aria-label="Remove item" class="w-8 h-8 flex items-center justify-center text-cream/30 hover:text-red-400 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22"/></svg>
                    </button>
                  </div>
                }
              </div>
            }
          </div>

          <!-- Footer -->
          @if (items.length > 0) {
            <div class="px-6 py-5 border-t border-primary-400/10 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-cream/60 text-sm uppercase tracking-widest">Subtotal</span>
                <span class="text-cream text-2xl font-macondo">{{ subtotal }} <span class="text-primary-400 text-sm font-exo">EGP</span></span>
              </div>
              <button (click)="checkout()" class="btn-primary w-full justify-center text-sm py-3">
                <span class="font-bold uppercase tracking-widest">Place Order</span>
                <span class="w-10 h-10 bg-dark-900 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </span>
              </button>
              <p class="text-cream/40 text-xs text-center">Pay in store · Pickup at MERZY</p>
            </div>
          }
        </div>
      </div>
    }
  `,
})
export class CartComponent implements OnInit, OnDestroy {
  isOpen = false;
  items: CartItem[] = [];
  subtotal = 0;
  private sub = new Subscription();

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.sub.add(this.cartService.isOpen.subscribe(open => { this.isOpen = open; }));
    this.sub.add(this.cartService.items.subscribe(items => {
      this.items = items;
      this.subtotal = this.cartService.subtotal;
    }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  close(): void { this.cartService.close(); }
  increaseQty(id: string): void { this.cartService.updateQty(id, (this.items.find(i => i.id === id)?.quantity ?? 0) + 1); }
  decreaseQty(id: string): void { this.cartService.updateQty(id, (this.items.find(i => i.id === id)?.quantity ?? 0) - 1); }
  removeItem(id: string): void { this.cartService.removeItem(id); }

  checkout(): void {
    if (this.items.length === 0) return;
    this.orderService.placeOrder(this.items, this.subtotal);
    this.cartService.clear();
    this.cartService.close();
  }
}
