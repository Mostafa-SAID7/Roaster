import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  host: { 'class': 'block' },
  template: `
    <header id="hero" class="relative w-full min-h-[95vh] rounded-[3rem] sm:rounded-[4rem] overflow-hidden bg-dark-900 shadow-2xl reveal active flex flex-col border border-primary-400/10 mt-2">

      <!-- Hero Split Content -->
      <div class="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
        <!-- Left: Text -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 lg:py-0">
          <span class="reveal reveal-delay-1 inline-block text-primary-400 font-macondo text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 animate-slideInLeft">The Spirit of the Island</span>
          <h1 class="reveal reveal-delay-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream uppercase tracking-tight leading-[1.1] mb-6 sm:mb-8 max-w-2xl animate-slideInLeft delay-200">A Commitment to Roasting Excellence in the Maldives.</h1>
          <a href="#shop" class="reveal reveal-delay-3 w-max btn-primary group animate-slideInLeft hover:scale-105 text-sm sm:text-base delay-400">
            <span class="font-bold uppercase tracking-widest">Taste The Craft</span>
            <span class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-all duration-300 group-hover:translate-x-1">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-primary-400 group-hover:text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>
        </div>

        <!-- Right: Image with Focus Zoom & Rounded Accents -->
        <div class="w-full lg:w-1/2 p-4 sm:p-8 lg:p-12 xl:p-16 flex items-center justify-center reveal reveal-delay-2 animate-slideInRight">
          <div class="relative w-full h-[350px] sm:h-[450px] lg:h-[90%] xl:h-[95%] rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-primary-400/20 shadow-2xl group animate-subtleGlow">
            <!-- Cinematic Overlays -->
            <div class="absolute inset-0 bg-gradient-to-tr from-dark-900 via-transparent to-primary-400/10 z-10 pointer-events-none"></div>
            <div class="absolute inset-0 bg-dark-900/10 mix-blend-multiply z-10 pointer-events-none"></div>
            <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] lg:rounded-[4rem] z-20 pointer-events-none"></div>
            
            <!-- Focus Zoom Image -->
            <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop" 
                 alt="Premium Roaster Coffee Packaging" 
                 fetchpriority="high"
                 class="absolute inset-0 w-full h-full object-cover transform animate-imageSlowZoom group-hover:scale-125 transition-transform duration-[2000ms] ease-out">
            
            <!-- Floating Accent -->
            <div class="absolute bottom-10 left-10 z-20 hidden sm:block animate-fadeIn delay-500">
              <div class="glass-effect p-4 rounded-2xl border border-primary-400/30 flex items-center gap-4">
                <div class="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center text-dark-900 font-bold">100%</div>
                <div>
                  <div class="text-xs font-bold uppercase tracking-widest text-primary-400">Pure Grade</div>
                  <div class="text-sm font-macondo text-cream">Single Origin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
  }
}
