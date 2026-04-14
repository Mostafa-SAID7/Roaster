import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="story" class="mt-24 sm:mt-32 lg:mt-44 max-w-7xl mx-auto reveal group">
      <div class="relative bg-dark-900 rounded-[3rem] border border-primary-400/10 p-8 sm:p-12 lg:p-20 shadow-2xl overflow-hidden">
        <!-- Background Accent -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div class="lg:col-span-5">
            <span class="text-primary-400 font-bold uppercase text-xs tracking-[0.3em] mb-4 block">Our Origin</span>
            <h2 class="text-4xl sm:text-5xl font-macondo text-cream mb-6 tracking-tight">The Malé Origins</h2>
            <h3 class="text-2xl font-bold uppercase tracking-tight text-primary-400/80 mb-8">Grounded in Place</h3>
            <p class="text-cream/70 text-lg leading-relaxed mb-6 font-medium">Born from a desire to bring true specialty coffee to the heart of the Maldives. We recognized a gap between imported commercial beans and the rich, nuanced flavors of freshly roasted coffee.</p>
          </div>

          <div class="lg:col-span-7 bg-dark-900 border border-primary-400/10 p-8 sm:p-12 rounded-[2.5rem]">
            <p class="text-cream/80 text-base leading-relaxed mb-6">Establishing a roastery in Malé came with its own unique challenges—mastering the delicate balance of heat and airflow amidst the island humidity. Through countless trials, we perfected a roasting profile that honors both the bean's origin and our tropical home.</p>
            <p class="text-cream/80 text-base leading-relaxed italic border-l-2 border-primary-400/30 pl-6">Today, Roaster is more than a brand; it's a commitment to our community and heritage. Every batch is roasted to order, ensuring that the cup you brew captures the essence of uncompromising quality.</p>
          </div>
        </div>

        <!-- Pledge Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 relative z-10">
          <div class="card hover:scale-105 transition-all duration-500 bg-dark-900 border-primary-400/10">
            <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/20 shadow-[0_0_20px_rgba(212,163,115,0.1)]">
              <svg class="w-8 h-8 animate-svgSway" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747C19.716 11.253 16 9 16 9s-2.253 3.716-5.253 4.716A9.004 9.004 0 0012 21zm0 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z"/>
              </svg>
            </div>
            <h4 class="text-xl font-bold uppercase tracking-widest text-cream mb-3">Sustainably Sourced</h4>
            <p class="text-cream/60 text-sm leading-relaxed">Direct relationships with heritage farms, ensuring fair compensation and environmental stewardship.</p>
          </div>

          <div class="card hover:scale-105 transition-all duration-500 bg-dark-900 border-primary-400/10">
            <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/20 shadow-[0_0_20px_rgba(212,163,115,0.1)]">
              <svg class="w-8 h-8 animate-svgFlicker" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-1.568-4.564A3.75 3.75 0 0012 18z" />
              </svg>
            </div>
            <h4 class="text-xl font-bold uppercase tracking-widest text-cream mb-3">Expertly Roasted</h4>
            <p class="text-cream/60 text-sm leading-relaxed">Small-batch roasted in Malé to highlight the distinct terroir and unique flavor notes of every bean.</p>
          </div>

          <div class="card hover:scale-105 transition-all duration-500 bg-dark-900/60 border-primary-400/10">
            <div class="w-16 h-16 rounded-full bg-dark-900 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/20 shadow-[0_0_20px_rgba(212,163,115,0.1)]">
              <svg class="w-8 h-8 animate-svgVibrate" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.256 2.256 0 00-1.903-.933H14.25M16.5 18.75V15.75L13.2 7.125" />
              </svg>
            </div>
            <h4 class="text-xl font-bold uppercase tracking-widest text-cream mb-3">Delivered Fresh</h4>
            <p class="text-cream/60 text-sm leading-relaxed">Packed immediately and delivered swiftly across the islands. Premium quality priced fairly in MVR.</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StoryComponent {}
