import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="story" class="mt-32 px-4 sm:px-6 relative">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        <div class="lg:col-span-5 reveal">
          <h2 class="text-4xl sm:text-5xl font-playfair italic text-primary-400 mb-6 tracking-tight">The Malé Origins</h2>
          <h3 class="text-3xl font-oswald uppercase tracking-tight text-cream mb-8">Grounded in Place</h3>
          <p class="text-cream/70 text-lg leading-relaxed mb-6 font-medium">Born from a desire to bring true specialty coffee to the heart of the Maldives. We recognized a gap between imported commercial beans and the rich, nuanced flavors of freshly roasted coffee.</p>
        </div>

        <div class="lg:col-span-7 bg-dark-800/40 border border-primary-400/10 p-8 sm:p-12 rounded-[2rem] backdrop-blur-sm reveal reveal-delay-1">
          <p class="text-cream/80 text-base leading-relaxed mb-6">Establishing a roastery in Malé came with its own unique challenges—mastering the delicate balance of heat and airflow amidst the island humidity. Through countless trials, we perfected a roasting profile that honors both the bean's origin and our tropical home.</p>
          <p class="text-cream/80 text-base leading-relaxed italic">Today, Island Roaster is more than a brand; it's a commitment to our community and heritage. Every batch is roasted to order, ensuring that the cup you brew captures the essence of uncompromising quality.</p>
        </div>
      </div>

      <!-- Pledge Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-24">
        <div class="card reveal reveal-delay-1">
          <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 shadow-[0_0_15px_rgba(212,163,115,0.15)]">
            🌿
          </div>
          <h4 class="text-xl font-oswald uppercase tracking-widest text-cream mb-3">Sustainably Sourced</h4>
          <p class="text-cream/60 text-sm leading-relaxed">Direct relationships with heritage farms, ensuring fair compensation and environmental stewardship.</p>
        </div>

        <div class="card reveal reveal-delay-2">
          <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 shadow-[0_0_15px_rgba(212,163,115,0.15)]">
            🔥
          </div>
          <h4 class="text-xl font-oswald uppercase tracking-widest text-cream mb-3">Expertly Roasted</h4>
          <p class="text-cream/60 text-sm leading-relaxed">Small-batch roasted in Malé to highlight the distinct terroir and unique flavor notes of every bean.</p>
        </div>

        <div class="card reveal reveal-delay-3">
          <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 shadow-[0_0_15px_rgba(212,163,115,0.15)]">
            🛵
          </div>
          <h4 class="text-xl font-oswald uppercase tracking-widest text-cream mb-3">Delivered Fresh</h4>
          <p class="text-cream/60 text-sm leading-relaxed">Packed immediately and delivered swiftly across the islands. Premium quality priced fairly in MVR.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host ::ng-deep {
      .reveal-delay-1 { animation-delay: 150ms; }
      .reveal-delay-2 { animation-delay: 300ms; }
      .reveal-delay-3 { animation-delay: 450ms; }
    }
  `]
})
export class StoryComponent {}
