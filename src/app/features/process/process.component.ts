import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="experience-section reveal">
      <div class="section-heading mx-auto mb-12 px-4 sm:mb-16 sm:px-6 lg:mb-20"><span class="eyebrow mb-5 block">The MERZY Experience</span><h2 class="section-title text-4xl sm:text-6xl">Your Coffee Break, Your Way</h2><p class="experience-intro text-base sm:text-lg">Come for a quick stop, settle in with something slow, or make MERZY part of your day in Alexandria.</p></div>
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 sm:px-6">
        <article class="experience-card group relative overflow-hidden"><img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=900&auto=format&fit=crop" alt="Morning coffee in a modern café" width="900" height="620" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="experience-content absolute inset-0"></div><div class="absolute bottom-7 left-7 right-7"><span class="eyebrow">Morning</span><h3 class="experience-title mt-2 text-3xl">Start Well</h3><p class="mt-3 max-w-sm text-sm text-white/70">Start the day with specialty coffee and something freshly baked.</p></div></article>
        <article class="experience-card group relative overflow-hidden"><img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=900&auto=format&fit=crop" alt="Coffee break with pastry" width="900" height="620" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="experience-content absolute inset-0"></div><div class="absolute bottom-7 left-7 right-7"><span class="eyebrow">Afternoon</span><h3 class="experience-title mt-2 text-3xl">Take A Break</h3><p class="mt-3 max-w-sm text-sm text-white/70">Take a break with a V60, signature drink or pastry.</p></div></article>
        <article class="experience-card group relative overflow-hidden"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop" alt="Coffee prepared for a library visit" width="900" height="620" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="experience-content absolute inset-0"></div><div class="absolute bottom-7 left-7 right-7"><span class="eyebrow">After The Library</span><h3 class="experience-title mt-2 text-3xl">Meet In The Middle</h3><p class="mt-3 max-w-sm text-sm text-white/70">The perfect stop before or after exploring the Bibliotheca Alexandrina.</p></div></article>
        <article class="experience-card group relative overflow-hidden"><img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=900&auto=format&fit=crop" alt="Mediterranean blue horizon" width="900" height="620" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="experience-content absolute inset-0"></div><div class="absolute bottom-7 left-7 right-7"><span class="eyebrow">By The Sea</span><h3 class="experience-title mt-2 text-3xl">Alexandria, Around You</h3><p class="mt-3 max-w-sm text-sm text-white/70">Good coffee tastes better with Alexandria's Mediterranean atmosphere around you.</p></div></article>
      </div>
    </section>
  `,
})
export class ProcessComponent {}
