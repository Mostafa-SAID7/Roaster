import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <header id="hero" class="hero-section relative flex w-full flex-col overflow-hidden reveal active">
      <div class="relative z-10 grid flex-1 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <div class="hero-copy flex flex-col justify-center px-7 py-20 sm:px-12 sm:py-24 lg:px-16 xl:px-24 lg:py-16">
          <span class="hero-eyebrow reveal reveal-delay-1 mb-6 animate-slideInLeft">Specialty Coffee &amp; Bakery · Alexandria</span>
          <h1 class="hero-heading reveal reveal-delay-2 mb-7 animate-slideInLeft delay-200">Good coffee.<br>Fresh bakes.<br>Alexandria by the sea.</h1>
          <p class="hero-description reveal reveal-delay-3 mb-9 animate-slideInLeft delay-300">Specialty coffee and freshly baked pastries beside the Bibliotheca Alexandrina. A modern coffee experience shaped by the Mediterranean spirit of Alexandria.</p>
          <div class="reveal reveal-delay-3 flex flex-wrap gap-3 animate-slideInLeft delay-400">
            <a href="#coffee" class="btn-primary group text-sm"><span class="px-3 font-bold uppercase tracking-widest">Explore MERZY</span><span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#211815] group-hover:translate-x-1"><svg class="h-5 w-5 text-[#d89a75]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span></a>
            <a href="#location" class="rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#f8f4ed] hover:border-[#d89a75] hover:text-[#d89a75]">Get Directions</a>
          </div>
          <div class="mt-14 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/45"><span class="h-px w-10 bg-[#d89a75]"></span><span>Beside the Bibliotheca Alexandrina</span></div>
        </div>
        <div class="relative min-h-[17rem] p-4 sm:min-h-[23rem] sm:p-7 lg:min-h-0 lg:p-10 xl:p-14">
          <div class="hero-media group relative h-full min-h-[17rem] overflow-hidden sm:min-h-[23rem] lg:min-h-0">
            <video class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" autoplay muted loop playsinline preload="metadata" poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" aria-label="Espresso and bakery preparation at MERZY"><source src="https://videos.pexels.com/video-files/6602224/6602224-sd_360_640_30fps.mp4" type="video/mp4"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" alt="Fresh coffee at MERZY in Alexandria" width="1200" height="900" decoding="async"></video>
            <div class="absolute bottom-5 left-5 z-10 sm:bottom-8 sm:left-8"><div class="glass-effect rounded-xl px-4 py-3"><div class="text-xs font-bold uppercase tracking-widest text-[#8f4f37]">MERZY</div><div class="mt-1 text-sm text-[#211815]">Coffee. Bakery. Mediterranean moments.</div></div></div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeroComponent {}
