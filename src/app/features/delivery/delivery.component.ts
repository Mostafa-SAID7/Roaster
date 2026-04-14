import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../../core/services/coffee.service';
import { DeliveryOption } from '../../core/models/coffee.model';
import { IslandSelectorComponent, IslandOption } from '../../shared/island-selector/island-selector.component';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, IslandSelectorComponent],
  template: `
    <section id="delivery" class="bg-dark-800/30 rounded-[2rem] border border-primary-400/20 p-8 sm:p-12 text-center max-w-4xl mx-auto animate-fadeIn reveal">
      <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 animate-pulse">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 015.5 17 1.5 1.5 0 017 15.5 1.5 1.5 0 015.5 14m6.5 4.5H8V9.5h3.5M4 6.5H2v11a1.5 1.5 0 001.5 1.5H6m14-12H6.5v3h11.96L22 9.5z"/>
        </svg>
      </div>
      <h3 class="text-3xl font-playfair italic text-cream mb-4 tracking-tight animate-slideInUp font-exo2">Freshly Packed & Delivered</h3>
      <p class="text-cream/70 text-base mb-8 max-w-lg mx-auto animate-slideInUp" style="animation-delay: 100ms">Select your island below to check delivery times and logistics directly from our Malé roastery.</p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto animate-slideInUp" style="animation-delay: 200ms">
        <app-island-selector
          [options]="islands"
          [selectedValue]="selectedIsland"
          placeholder="Select Island..."
          (selectionChange)="onIslandSelected($event)"
          class="w-full sm:w-2/3">
        </app-island-selector>
        <button 
          (click)="checkDelivery()" 
          class="w-full sm:w-1/3 bg-primary-400 text-dark-900 font-oswald uppercase tracking-widest font-semibold py-4 px-6 rounded-xl hover:bg-cream transition-all duration-300 h-14 flex items-center justify-center hover:scale-105 active:scale-95">
          Check
        </button>
      </div>

      <div *ngIf="deliveryResult" class="mt-6 text-primary-400 font-oswald uppercase tracking-widest text-lg animate-fadeIn">
        {{ deliveryResult }}
      </div>
    </section>
  `,
})
export class DeliveryComponent implements OnInit {
  selectedIsland: string = '';
  deliveryResult: string = '';
  deliveryOptions: DeliveryOption[] = [];
  islands: IslandOption[] = [
    { label: 'Malé', value: 'male' },
    { label: 'Hulhumalé', value: 'hulhumale' },
    { label: 'Villimalé', value: 'villimale' },
    { label: 'Resort Islands', value: 'resort' }
  ];

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getDeliveryOptions().subscribe(options => {
      this.deliveryOptions = options;
    });
  }

  onIslandSelected(value: string): void {
    this.selectedIsland = value;
  }

  checkDelivery(): void {
    if (!this.selectedIsland) {
      this.deliveryResult = 'Please select an island.';
      return;
    }

    const option = this.coffeeService.getDeliveryByIsland(this.selectedIsland);
    if (option) {
      this.deliveryResult = `${option.time}: ${option.cost} MVR`;
    }
  }
}
