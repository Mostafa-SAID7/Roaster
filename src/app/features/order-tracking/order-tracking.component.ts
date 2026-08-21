import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from '../../core/services/order.service';
import { Order, OrderStatus } from '../../core/models/order.model';

@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (order) {
      <div class="fixed inset-0 z-[210] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-dark-900/85 backdrop-blur-sm animate-fadeIn" (click)="close()"></div>
        <div class="relative w-full max-w-lg bg-dark-900 border border-primary-400/20 rounded-[2rem] shadow-2xl overflow-hidden animate-scaleIn">
          <!-- Header -->
          <div class="px-8 pt-8 pb-6 text-center border-b border-primary-400/10">
            <div class="w-16 h-16 rounded-full bg-primary-400/15 border border-primary-400/30 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h2 class="text-3xl font-macondo text-cream tracking-tight">Order Confirmed</h2>
            <p class="text-primary-400 text-sm font-bold uppercase tracking-widest mt-2">{{ order.id }}</p>
          </div>

          <!-- Status Timeline -->
          <div class="px-8 py-8">
            <div class="flex items-center justify-between relative">
              <div class="absolute top-5 left-0 right-0 h-0.5 bg-dark-800"></div>
              <div class="absolute top-5 left-0 h-0.5 bg-primary-400 transition-all duration-700"
                   [style.width.%]="progressWidth"></div>

              @for (step of steps; track step.status) {
                <div class="relative z-10 flex flex-col items-center gap-2 flex-1">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500"
                       [ngClass]="circleClass(step.status)">
                    @if (isStepDone(step.status)) {
                      <svg class="w-5 h-5 text-dark-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                    } @else if (isStepCurrent(step.status)) {
                      <span class="w-2.5 h-2.5 rounded-full bg-primary-400"></span>
                    } @else {
                      <span class="w-2.5 h-2.5 rounded-full bg-dark-700"></span>
                    }
                  </div>
                  <span class="text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                        [ngClass]="labelClass(step.status)">{{ step.label }}</span>
                </div>
              }
            </div>

            @if (order.status === 'ready') {
              <div class="mt-6 text-center bg-primary-400/10 border border-primary-400/20 rounded-2xl p-4">
                <p class="text-primary-400 font-bold uppercase tracking-widest text-sm">Your order is ready!</p>
                <p class="text-cream/60 text-xs mt-1">Please pick it up at MERZY.</p>
              </div>
            }
          </div>

          <!-- Items Summary -->
          <div class="px-8 pb-6">
            <h3 class="text-cream/50 text-xs font-bold uppercase tracking-widest mb-3">Order Details</h3>
            <div class="space-y-2">
              @for (item of order.items; track item.id) {
                <div class="flex items-center justify-between text-sm">
                  <span class="text-cream/70">{{ item.quantity }}× {{ item.name }}</span>
                  <span class="text-cream/50">{{ item.price * item.quantity }} EGP</span>
                </div>
              }
            </div>
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-primary-400/10">
              <span class="text-cream font-bold uppercase tracking-widest text-sm">Total</span>
              <span class="text-cream text-xl font-macondo">{{ order.total }} <span class="text-primary-400 text-sm font-exo">EGP</span></span>
            </div>
          </div>

          <!-- Close -->
          <div class="px-8 pb-8">
            <button (click)="close()" class="btn-secondary w-full justify-center text-sm">Close</button>
          </div>
        </div>
      </div>
    }
  `,
})
export class OrderTrackingComponent implements OnInit, OnDestroy {
  order: Order | null = null;
  steps = [
    { status: 'received' as OrderStatus, label: 'Received' },
    { status: 'preparing' as OrderStatus, label: 'Preparing' },
    { status: 'ready' as OrderStatus, label: 'Ready' },
  ];
  private sub = new Subscription();

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.sub.add(this.orderService.currentOrder.subscribe(o => { this.order = o; }));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  close(): void { this.orderService.clearOrder(); }

  get progressWidth(): number {
    if (!this.order) return 0;
    if (this.order.status === 'received') return 0;
    if (this.order.status === 'preparing') return 50;
    return 100;
  }

  isStepDone(status: OrderStatus): boolean {
    if (!this.order) return false;
    const orderIdx = this.steps.findIndex(s => s.status === this.order!.status);
    const stepIdx = this.steps.findIndex(s => s.status === status);
    return stepIdx <= orderIdx;
  }

  isStepCurrent(status: OrderStatus): boolean {
    return this.order?.status === status;
  }

  circleClass(status: OrderStatus): string {
    if (this.isStepDone(status)) return 'bg-primary-400 border-primary-400';
    if (this.isStepCurrent(status)) return 'bg-dark-800 border-primary-400';
    return 'bg-dark-800 border-dark-700';
  }

  labelClass(status: OrderStatus): string {
    if (this.isStepDone(status)) return 'text-primary-400';
    if (this.isStepCurrent(status)) return 'text-cream';
    return 'text-cream/40';
  }
}
