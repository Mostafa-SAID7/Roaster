import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <header id="hero" class="hero-section relative flex w-full flex-col overflow-hidden reveal active">
      <div class="hero-grid relative z-10 grid flex-1 grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
        <div class="hero-copy relative flex flex-col justify-center px-7 py-16 sm:px-12 sm:py-20 lg:px-14 lg:py-14 xl:px-20">
          <div class="hero-copy-inner">
            <div class="hero-eyebrow-row reveal reveal-delay-1 mb-6 flex items-center justify-between gap-4 animate-slideInLeft"><span class="hero-eyebrow">Specialty Coffee &amp; Bakery · Alexandria</span><span class="hero-edition hidden text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:inline">MERZY / ALEXANDRIA</span></div>
            <h1 class="hero-heading reveal reveal-delay-2 mb-6 animate-slideInLeft delay-200">Good coffee.<br>Fresh bakes.<br><span class="hero-heading-accent">Alexandria by the sea.</span></h1>
            <p class="hero-description reveal reveal-delay-3 mb-8 animate-slideInLeft delay-300">Specialty coffee and freshly baked pastries beside the Bibliotheca Alexandrina. A modern coffee experience shaped by the Mediterranean spirit of Alexandria.</p>
            <div class="reveal reveal-delay-3 flex flex-wrap gap-3 animate-slideInLeft delay-400"><a href="#coffee" class="btn-primary group text-sm"><span class="px-3 font-bold uppercase tracking-widest">Explore MERZY</span><span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#211815] group-hover:translate-x-1"><svg class="h-5 w-5 text-[#d89a75]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span></a><a href="#location" class="rounded-full border border-white/25 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#f8f4ed] hover:border-[#d89a75] hover:text-[#d89a75]">Get Directions</a></div>
            <div class="hero-location-note mt-10 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/45 sm:mt-14"><span class="h-px w-10 shrink-0 bg-[#d89a75]"></span><span>Beside the Bibliotheca Alexandrina</span></div>
          </div>
        </div>
        <div class="hero-media-column relative min-h-[17rem] p-4 sm:min-h-[23rem] sm:p-7 lg:min-h-0 lg:p-9 xl:p-12">
          <div class="hero-media group relative h-full min-h-[17rem] overflow-hidden sm:min-h-[23rem] lg:min-h-0">
            <video class="hero-video absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" autoplay muted loop playsinline preload="metadata" poster="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" aria-label="Espresso and bakery preparation at MERZY"><source src="https://videos.pexels.com/video-files/6602224/6602224-sd_360_640_30fps.mp4" type="video/mp4"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" alt="Fresh coffee at MERZY in Alexandria" width="1200" height="900" decoding="async"></video>
            <div class="hero-media-topline absolute left-5 right-5 top-5 z-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 sm:left-7 sm:right-7 sm:top-7"><span>MERZY</span><span>Specialty Coffee / Bakery</span></div>
            <div class="absolute bottom-5 left-5 z-10 sm:bottom-8 sm:left-8"><div class="glass-effect rounded-xl px-4 py-3"><div class="text-xs font-bold uppercase tracking-widest text-[#8f4f37]">MERZY</div><div class="mt-1 text-sm text-[#211815]">Coffee. Bakery. Mediterranean moments.</div></div></div>
          </div>
          <div class="hero-media-caption flex items-center justify-between px-1 pt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35"><span>Good coffee / fresh bakes</span><span>Alexandria by the sea</span></div>
        </div>
      </div>
    </header>
  `,
})
export class HeroComponent {}
