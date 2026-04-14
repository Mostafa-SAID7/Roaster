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
          <h2 class="text-4xl sm:text-5xl font-playfair italic text-primary-400 mb-6 tracking-tight font-macondo">The Malé Origins</h2>
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
        <div class="card reveal reveal-delay-1 hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 shadow-[0_0_15px_rgba(212,163,115,0.15)] animate-bounce" style="animation-duration: 2s">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <h4 class="text-xl font-oswald uppercase tracking-widest text-cream mb-3">Sustainably Sourced</h4>
          <p class="text-cream/60 text-sm leading-relaxed">Direct relationships with heritage farms, ensuring fair compensation and environmental stewardship.</p>
        </div>

        <div class="card reveal reveal-delay-2 hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 shadow-[0_0_15px_rgba(212,163,115,0.15)] animate-bounce" style="animation-duration: 2.2s">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.23 0-2.25-1.31-2.25-2.72s.92-2.72 2.25-2.72 2.25 1.31 2.25 2.72-1.02 2.72-2.25 2.72z"/>
            </svg>
          </div>
          <h4 class="text-xl font-oswald uppercase tracking-widest text-cream mb-3">Expertly Roasted</h4>
          <p class="text-cream/60 text-sm leading-relaxed">Small-batch roasted in Malé to highlight the distinct terroir and unique flavor notes of every bean.</p>
        </div>

        <div class="card reveal reveal-delay-3 hover:scale-105 transition-transform duration-300">
          <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/30 shadow-[0_0_15px_rgba(212,163,115,0.15)] animate-bounce" style="animation-duration: 2.4s">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
          <h4 class="text-xl font-oswald uppercase tracking-widest text-cream mb-3">Delivered Fresh</h4>
          <p class="text-cream/60 text-sm leading-relaxed">Packed immediately and delivered swiftly across the islands. Premium quality priced fairly in MVR.</p>
        </div>
      </div>
    </section>
  `,
})
export class StoryComponent {}
