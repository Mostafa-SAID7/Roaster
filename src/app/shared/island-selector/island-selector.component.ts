import { Component, Input, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IslandOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-island-selector',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full" (clickOutside)="closeDropdown()">
      <button type="button" (click)="toggleDropdown()" [ngClass]="{'border-primary-400': isOpen, 'shadow-lg': isOpen, 'shadow-primary-400/20': isOpen}" class="w-full h-14 px-5 bg-gradient-to-r from-dark-800 to-dark-900 border border-primary-400/40 rounded-xl text-cream font-oswald uppercase tracking-widest text-sm font-medium flex items-center justify-between hover:border-primary-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary-400/10 focus:outline-none focus:border-primary-400 focus:shadow-lg focus:shadow-primary-400/20">
        <span [ngClass]="{'text-cream/60': !selectedLabel}">{{ selectedLabel || placeholder }}</span>
        <svg class="w-5 h-5 text-primary-400 transition-transform duration-300" [class.rotate-180]="isOpen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>

      <div *ngIf="isOpen" class="absolute top-full left-0 right-0 mt-2 bg-dark-800 border border-primary-400/40 rounded-xl shadow-2xl shadow-dark-900/50 z-50 overflow-hidden animate-slideInDown">
        <div class="max-h-64 overflow-y-auto no-scrollbar">
          <button *ngFor="let option of options; let i = index" type="button" (click)="selectOption(option)" [ngClass]="{'bg-primary-400/25': option.value === selectedValue, 'text-primary-400': option.value === selectedValue}" [style.animation-delay]="(i * 50) + 'ms'" class="w-full px-5 py-3.5 text-left text-cream font-oswald uppercase tracking-widest text-sm font-medium hover:bg-primary-400/15 transition-all duration-200 flex items-center justify-between group">
            <span>{{ option.label }}</span>
            <svg *ngIf="option.value === selectedValue" class="w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    @keyframes slideInDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-slideInDown {
      animation: slideInDown 0.3s ease-out;
    }

    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class IslandSelectorComponent implements OnInit, OnDestroy {
  @Input() options: IslandOption[] = [];
  @Input() placeholder: string = 'Select Island...';
  @Input() selectedValue: string = '';
  @Output() selectionChange = new EventEmitter<string>();

  isOpen = false;
  private clickListener: ((event: MouseEvent) => void) | null = null;

  get selectedLabel(): string {
    return this.options.find(opt => opt.value === this.selectedValue)?.label || '';
  }

  ngOnInit(): void {
    this.setupClickOutsideListener();
  }

  ngOnDestroy(): void {
    this.removeClickOutsideListener();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  closeDropdown(): void {
    this.isOpen = false;
  }

  selectOption(option: IslandOption): void {
    this.selectedValue = option.value;
    this.selectionChange.emit(option.value);
    this.isOpen = false;
  }

  private setupClickOutsideListener(): void {
    this.clickListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('app-island-selector')) {
        this.closeDropdown();
      }
    };
    document.addEventListener('click', this.clickListener);
  }

  private removeClickOutsideListener(): void {
    if (this.clickListener) {
      document.removeEventListener('click', this.clickListener);
    }
  }
}
