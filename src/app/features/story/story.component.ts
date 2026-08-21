import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="story" class="mt-24 sm:mt-32 lg:mt-44 max-w-7xl mx-auto reveal group">
      <div class="relative bg-dark-900 rounded-[3rem] border border-primary-400/10 p-8 sm:p-12 lg:p-20 shadow-2xl overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div class="lg:col-span-5">
            <span class="text-primary-400 font-bold uppercase text-xs tracking-[0.3em] mb-4 block">MERZY, Alexandria</span>
            <h2 class="text-4xl sm:text-5xl font-macondo text-cream mb-6 tracking-tight">A Different Kind of Coffee Break</h2>
            <p class="text-primary-400/80 text-xl font-medium leading-relaxed">At MERZY, specialty coffee meets the everyday rhythm of Alexandria.</p>
          </div>
          <div class="lg:col-span-7 bg-dark-900 border border-primary-400/10 p-8 sm:p-12 rounded-[2.5rem]">
            <p class="text-cream/80 text-base sm:text-lg leading-relaxed mb-6">Start your morning with a carefully prepared espresso, slow down with a V60, or pair your favorite coffee with something freshly baked from our bakery.</p>
            <p class="text-cream/80 text-base sm:text-lg leading-relaxed italic border-l-2 border-primary-400/30 pl-6">Just steps from the Bibliotheca Alexandrina and the Mediterranean, MERZY is made for quick coffee stops, slow mornings, afternoon treats, and everything in between.</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 sm:mt-24 relative z-10">
          <article class="card hover:scale-105 transition-all duration-500 bg-dark-900 border-primary-400/10"><div class="w-14 h-14 rounded-full bg-dark-800 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/20"><svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v-4m4 4v-4m-8 4v-4M5.25 8h13.5v9a3.75 3.75 0 01-3.75 3.75h-6A3.75 3.75 0 015.25 17V8zM18.75 11.25h1.125A1.875 1.875 0 0121.75 13.125v.75a1.875 1.875 0 01-1.875 1.875h-1.125V11.25z"/></svg></div><h3 class="text-lg font-bold uppercase tracking-widest text-cream mb-3">Specialty Coffee</h3><p class="text-cream/60 text-sm leading-relaxed">Carefully prepared coffee with attention to extraction, flavor, and quality.</p></article>
          <article class="card hover:scale-105 transition-all duration-500 bg-dark-900 border-primary-400/10"><div class="w-14 h-14 rounded-full bg-dark-800 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/20"><svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m-7-9h14M5 7.5h14M5 16.5h14"/></svg></div><h3 class="text-lg font-bold uppercase tracking-widest text-cream mb-3">Fresh Bakery</h3><p class="text-cream/60 text-sm leading-relaxed">Pastries and desserts made to sit beautifully beside a good cup of coffee.</p></article>
          <article class="card hover:scale-105 transition-all duration-500 bg-dark-900 border-primary-400/10"><div class="w-14 h-14 rounded-full bg-dark-800 text-primary-400 flex items-center justify-center mx-auto mb-6 border border-primary-400/20"><svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg></div><h3 class="text-lg font-bold uppercase tracking-widest text-cream mb-3">Alexandria</h3><p class="text-cream/60 text-sm leading-relaxed">A contemporary stop for the city, the library, and the Mediterranean waterfront.</p></article>
        </div>
      </div>
    </section>
  `,
})
export class StoryComponent {}
