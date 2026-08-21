import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <header id="hero" class="relative w-full min-h-[95vh] rounded-[3rem] sm:rounded-[4rem] overflow-hidden bg-dark-900 shadow-2xl reveal active flex flex-col border border-primary-400/10 mt-2">
      <div class="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
        <div class="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-24 sm:py-28 lg:py-0">
          <span class="reveal reveal-delay-1 inline-block text-primary-400 font-bold uppercase tracking-[0.25em] text-xs sm:text-sm mb-5 animate-slideInLeft">Specialty Coffee &amp; Bakery · Alexandria</span>
          <h1 class="reveal reveal-delay-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream uppercase tracking-tight leading-[1.02] mb-6 sm:mb-8 max-w-2xl animate-slideInLeft delay-200">Good coffee.<br>Fresh bakes.<br>Alexandria by the sea.</h1>
          <p class="reveal reveal-delay-3 text-cream/70 text-base sm:text-lg leading-relaxed max-w-xl mb-8 animate-slideInLeft delay-300">Specialty coffee and freshly baked pastries beside the Bibliotheca Alexandrina. A modern coffee experience shaped by the Mediterranean spirit of Alexandria.</p>
          <div class="reveal reveal-delay-3 flex flex-wrap gap-4 animate-slideInLeft delay-400">
            <a href="#coffee" class="btn-primary group text-sm sm:text-base"><span class="font-bold uppercase tracking-widest">Explore MERZY</span><span class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300 group-hover:translate-x-1"><svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 group-hover:text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span></a>
            <a href="#location" class="btn-secondary text-sm">Get Directions</a>
          </div>
        </div>
        <div class="w-full lg:w-1/2 p-4 sm:p-8 lg:p-12 xl:p-16 flex items-center justify-center reveal reveal-delay-2 animate-slideInRight">
          <div class="relative w-full h-[350px] sm:h-[450px] lg:h-[90%] xl:h-[95%] rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-primary-400/20 shadow-2xl group">
            <div class="absolute inset-0 bg-gradient-to-tr from-dark-900 via-dark-900/10 to-primary-400/10 z-10 pointer-events-none"></div>
            <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] lg:rounded-[4rem] z-20 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" alt="Fresh coffee at MERZY in Alexandria" width="1200" height="900" sizes="(max-width: 1023px) 100vw, 50vw" decoding="async" fetchpriority="high" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out">
            <div class="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 z-20 animate-fadeIn delay-500"><div class="glass-effect p-4 rounded-2xl border border-primary-400/30"><div class="text-xs font-bold uppercase tracking-widest text-primary-400">MERZY</div><div class="text-sm text-cream mt-1">Coffee. Bakery. Mediterranean moments.</div></div></div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeroComponent {}
