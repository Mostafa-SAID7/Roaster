import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoffeeService } from '../../core/services/coffee.service';
import { RoastLevel, BrewMethod, CoffeeOrigin } from '../../core/models/coffee.model';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="process" class="mt-32 px-4 sm:px-6 reveal">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-primary-400 font-oswald uppercase text-sm tracking-[0.2em] mb-4 block font-exo2">Roasted With Purpose</span>
        <h2 class="section-title font-exo2">The Bean-to-Mug Journey</h2>
        <p class="text-cream/70 text-lg">Experience the meticulous craft behind every cup. Interact with our process below.</p>
      </div>

      <!-- Origin Selection Map -->
      <div class="bg-dark-800/30 rounded-[2rem] border border-primary-400/20 p-6 sm:p-10 mb-8 relative overflow-hidden group">
        <h3 class="text-2xl font-oswald uppercase tracking-widest text-primary-400 mb-8 flex items-center gap-3 font-exo2">
          <span class="w-8 h-px bg-primary-400/50 block"></span> Origin Selection
        </h3>
        <div class="relative w-full h-[300px] sm:h-[400px] bg-dark-900 rounded-2xl border border-dark-800 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="World Map Abstract" class="w-full h-full object-cover opacity-20 grayscale">
          
          <!-- Interactive Origin Points -->
          <div *ngFor="let origin of origins" 
            (click)="selectOrigin(origin)"
            class="absolute w-4 h-4 rounded-full bg-primary-400 shadow-[0_0_20px_#d4a373] cursor-pointer hover:scale-125 transition-transform origin-center"
            [style.top.%]="getOriginTop(origin)"
            [style.left.%]="getOriginLeft(origin)">
            <div class="absolute -inset-2 rounded-full border border-primary-400 animate-ping opacity-50"></div>
          </div>

          <!-- Origin Info Panel -->
          <div *ngIf="selectedOrigin" class="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-80 bg-dark-900/90 backdrop-blur-md border border-primary-400/30 p-5 rounded-xl z-10 animate-fadeIn">
            <span class="text-xs font-oswald uppercase tracking-widest text-primary-400 block mb-1">{{ selectedOrigin.country }}</span>
            <h4 class="text-xl font-playfair text-cream mb-2 tracking-tight">{{ selectedOrigin.bean }}</h4>
            <p class="text-cream/70 text-sm mb-4">{{ selectedOrigin.notes }}</p>
            <div class="text-primary-400 font-oswald tracking-widest font-medium">{{ selectedOrigin.price }} MVR / 250g</div>
          </div>
        </div>
      </div>

      <!-- Roast Chamber -->
      <div class="bg-dark-800/30 rounded-[2rem] border border-primary-400/20 p-6 sm:p-10 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-2xl font-oswald uppercase tracking-widest text-primary-400 mb-6 flex items-center gap-3 font-exo2">
            <span class="w-8 h-px bg-primary-400/50 block"></span> The Roast Chamber
          </h3>
          <p class="text-cream/70 text-base mb-10">Slide to adjust the roast level. Witness how heat transforms the bean's character, crafted specifically for the Maldivian palate.</p>

          <div class="mb-10">
            <div class="flex justify-between text-xs font-oswald uppercase tracking-widest text-primary-400 mb-4">
              <span>Light</span>
              <span>Dark</span>
            </div>
            <input type="range" [(ngModel)]="selectedRoastLevel" (change)="onRoastChange()" min="0" max="3" step="1" class="w-full">
          </div>

          <div class="bg-dark-900 border border-dark-800 p-6 rounded-xl">
            <span class="text-xs font-oswald uppercase tracking-[0.2em] text-primary-400 block mb-2">Tasting Notes</span>
            <h4 class="text-2xl font-playfair text-cream mb-2 tracking-tight">{{ currentRoast?.title }}</h4>
            <p class="text-cream/70 text-sm italic">{{ currentRoast?.description }}</p>
          </div>
        </div>

        <div class="relative h-[400px] rounded-2xl overflow-hidden bg-dark-900 flex items-center justify-center border border-dark-800">
          <img [src]="coffeeImage" alt="Coffee Beans" class="absolute inset-0 w-full h-full object-cover mix-blend-lighten transition-all duration-700 brightness-110 sepia-[0.2]" [style.filter]="currentRoast?.filter">
          <div class="absolute inset-0 bg-dark-900/20 z-10"></div>
        </div>
      </div>

      <!-- Brewing Methods -->
      <div class="bg-dark-800/30 rounded-[2rem] border border-primary-400/20 p-6 sm:p-10 mb-8">
        <h3 class="text-2xl font-oswald uppercase tracking-widest text-primary-400 mb-8 flex items-center justify-center gap-3 font-exo2">
          <span class="w-8 h-px bg-primary-400/50 block"></span> Brewing Perfection <span class="w-8 h-px bg-primary-400/50 block"></span>
        </h3>

        <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          <button *ngFor="let method of brewMethods" 
            (click)="selectBrewMethod(method.id)"
            [class.active]="selectedBrewMethod === method.id"
            class="brew-tab px-6 py-3 rounded-full border border-primary-400/30 font-oswald uppercase tracking-widest text-sm transition-colors duration-300"
            [ngClass]="selectedBrewMethod === method.id ? 'bg-dark-900 text-primary-400' : 'text-cream/60 hover:text-primary-400'">
            {{ method.name }}
          </button>
        </div>

        <!-- Tab Content -->
        <div class="max-w-4xl mx-auto">
          <div *ngIf="currentBrewMethod" class="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fadeIn">
            <div class="bg-dark-900 p-6 rounded-xl border border-dark-800 text-center">
              <span class="block text-xs font-oswald uppercase tracking-widest text-primary-400 mb-1">Grind Size</span>
              <strong class="text-cream font-playfair text-xl">{{ currentBrewMethod.grindSize }}</strong>
            </div>
            <div class="bg-dark-900 p-6 rounded-xl border border-dark-800 text-center">
              <span class="block text-xs font-oswald uppercase tracking-widest text-primary-400 mb-1">Ratio</span>
              <strong class="text-cream font-playfair text-xl">{{ currentBrewMethod.ratio }}</strong>
            </div>
            <div class="bg-dark-900 p-6 rounded-xl border border-dark-800 text-center">
              <span class="block text-xs font-oswald uppercase tracking-widest text-primary-400 mb-1">Timing</span>
              <strong class="text-cream font-playfair text-xl">{{ currentBrewMethod.timing }}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProcessComponent implements OnInit {
  selectedRoastLevel: number = 1;
  selectedBrewMethod: string = 'pourover';
  selectedOrigin: CoffeeOrigin | null = null;
  currentRoast: RoastLevel | undefined;
  currentBrewMethod: BrewMethod | undefined;
  brewMethods: BrewMethod[] = [];
  origins: CoffeeOrigin[] = [];
  coffeeImage = 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1000&auto=format&fit=crop';

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getBrewMethods().subscribe(methods => {
      this.brewMethods = methods;
      this.selectBrewMethod('pourover');
    });

    this.coffeeService.getOrigins().subscribe(origins => {
      this.origins = origins;
      if (origins.length > 0) {
        this.selectOrigin(origins[0]);
      }
    });

    this.onRoastChange();
  }

  onRoastChange(): void {
    this.currentRoast = this.coffeeService.getRoastById(this.selectedRoastLevel);
  }

  selectBrewMethod(methodId: string): void {
    this.selectedBrewMethod = methodId;
    this.currentBrewMethod = this.coffeeService.getBrewMethodById(methodId);
  }

  selectOrigin(origin: CoffeeOrigin): void {
    this.selectedOrigin = origin;
    this.coffeeService.setSelectedOrigin(origin);
  }

  getOriginTop(origin: CoffeeOrigin): number {
    // Map latitude (-90 to 90) to percentage (0 to 100)
    return ((origin.latitude + 90) / 180) * 100;
  }

  getOriginLeft(origin: CoffeeOrigin): number {
    // Map longitude (-180 to 180) to percentage (0 to 100)
    return ((origin.longitude + 180) / 360) * 100;
  }
}
