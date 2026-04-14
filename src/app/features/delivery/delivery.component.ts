import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CoffeeService } from '../../core/services/coffee.service';
import { DeliveryOption } from '../../core/models/coffee.model';

interface IslandOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, ButtonModule],
  template: `
    <section id="delivery" class="bg-dark-800/30 rounded-[2rem] border border-primary-400/20 p-8 sm:p-12 text-center max-w-4xl mx-auto animate-fadeIn">
      <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 animate-pulse">
        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 015.5 17 1.5 1.5 0 017 15.5 1.5 1.5 0 015.5 14m6.5 4.5H8V9.5h3.5M4 6.5H2v11a1.5 1.5 0 001.5 1.5H6m14-12H6.5v3h11.96L22 9.5z"/>
        </svg>
      </div>
      <h3 class="text-3xl font-playfair italic text-cream mb-4 tracking-tight animate-slideInUp">Freshly Packed & Delivered</h3>
      <p class="text-cream/70 text-base mb-8 max-w-lg mx-auto animate-slideInUp" style="animation-delay: 100ms">Select your island below to check delivery times and logistics directly from our Malé roastery.</p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto animate-slideInUp" style="animation-delay: 200ms">
        <p-dropdown 
          [(ngModel)]="selectedIsland" 
          [options]="islands" 
          optionLabel="label" 
          optionValue="value"
          placeholder="Select Island..."
          class="w-full sm:w-2/3"
          [styleClass]="'w-full island-dropdown'">
        </p-dropdown>
        <button 
          (click)="checkDelivery()" 
          class="w-full sm:w-1/3 bg-primary-400 text-dark-900 font-oswald uppercase tracking-widest font-semibold py-4 px-6 rounded-xl hover:bg-cream transition-all duration-300 h-[56px] flex items-center justify-center">
          Check
        </button>
      </div>

      <div *ngIf="deliveryResult" class="mt-6 text-primary-400 font-oswald uppercase tracking-widest text-lg animate-fadeIn">
        {{ deliveryResult }}
      </div>
    </section>
  `,
  styles: [`
    :host ::ng-deep {
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }

      /* Dropdown Wrapper */
      .island-dropdown {
        width: 100% !important;
      }

      /* Dropdown Container */
      .island-dropdown .p-dropdown {
        background: linear-gradient(135deg, #2f2a28 0%, #1a1614 100%) !important;
        border: 1.5px solid #d4a373/40 !important;
        border-radius: 0.75rem !important;
        padding: 0 !important;
        height: 56px !important;
        display: flex !important;
        align-items: center !important;
        transition: all 0.3s ease !important;
      }

      .island-dropdown .p-dropdown:hover {
        border-color: #d4a373/70 !important;
        box-shadow: 0 0 15px rgba(212, 163, 115, 0.15) !important;
      }

      .island-dropdown .p-dropdown.p-focus {
        border-color: #d4a373 !important;
        box-shadow: 0 0 20px rgba(212, 163, 115, 0.25) !important;
      }

      /* Dropdown Label/Display */
      .island-dropdown .p-dropdown .p-dropdown-label {
        color: #e9edc9 !important;
        font-family: 'Oswald', sans-serif !important;
        font-size: 0.875rem !important;
        padding: 0 1.25rem !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        font-weight: 500 !important;
        height: 100% !important;
        display: flex !important;
        align-items: center !important;
      }

      .island-dropdown .p-dropdown .p-placeholder {
        color: #e9edc9/60 !important;
      }

      /* Dropdown Trigger Icon */
      .island-dropdown .p-dropdown .p-dropdown-trigger {
        color: #d4a373 !important;
        width: 2.5rem !important;
        height: 100% !important;
        background: transparent !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }

      /* Dropdown Panel */
      .island-dropdown .p-dropdown-panel {
        background: #2f2a28 !important;
        border: 1.5px solid #d4a373/40 !important;
        border-radius: 0.75rem !important;
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6) !important;
        margin-top: 0.5rem !important;
      }

      /* Dropdown Items Container */
      .island-dropdown .p-dropdown-panel .p-dropdown-items {
        padding: 0.5rem 0 !important;
      }

      /* Individual Dropdown Items */
      .island-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
        background: transparent !important;
        color: #e9edc9 !important;
        padding: 0.875rem 1.25rem !important;
        font-family: 'Oswald', sans-serif !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        font-size: 0.875rem !important;
        font-weight: 500 !important;
        transition: all 0.2s ease !important;
        cursor: pointer !important;
      }

      .island-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:hover {
        background: linear-gradient(90deg, #d4a373/20 0%, #d4a373/10 100%) !important;
        color: #d4a373 !important;
        padding-left: 1.5rem !important;
      }

      .island-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
        background: linear-gradient(90deg, #d4a373 0%, #d4a373/80 100%) !important;
        color: #1a1614 !important;
        font-weight: 600 !important;
      }

      /* Empty Message */
      .island-dropdown .p-dropdown-panel .p-dropdown-empty-message {
        color: #e9edc9/60 !important;
        padding: 1rem !important;
        font-family: 'Oswald', sans-serif !important;
      }
    }
  `]
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
