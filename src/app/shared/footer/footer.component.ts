import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="shop" class="mt-16 sm:mt-24 border-t border-primary-400/10 bg-dark-900 rounded-t-[3rem] sm:rounded-t-[4rem] px-4 overflow-hidden relative reveal">
      <!-- Background Glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent"></div>
      
      <div class="max-w-[1500px] mx-auto py-12 sm:py-16 px-4 sm:px-6">
        <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 sm:gap-16">
          <!-- Brand Section -->
          <div class="space-y-6 flex flex-col items-center md:items-start animate-slideInUp">
            <div (click)="scrollToTop()" class="flex items-center gap-3 group cursor-pointer">
              <div class="text-primary-400 p-2 rounded-lg border border-primary-400/30 bg-dark-950 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-400/20 transition-all duration-300">
                <svg class="w-5 h-5 text-primary-400 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v-4m4 4v-4m-8 4v-4M5.25 8h13.5v9a3.75 3.75 0 01-3.75 3.75h-6A3.75 3.75 0 015.25 17V8zM18.75 11.25h1.125A1.875 1.875 0 0121.75 13.125v.75a1.875 1.875 0 01-1.875 1.875h-1.125V11.25z" />
                </svg>
              </div>
              <span class="text-primary-400 text-xl font-bold uppercase tracking-widest group-hover:text-cream transition-colors duration-300">Roaster</span>
            </div>
            <p class="text-sm text-cream/50 max-w-xs text-center md:text-left italic leading-relaxed">A commitment to roasting excellence in the Maldives. Sustainable, fresh, unparalleled.</p>
          </div>

          <!-- Links Section -->
          <div class="flex flex-col sm:flex-row gap-12 sm:gap-24 text-sm">
            <!-- Shop Links -->
            <div class="animate-slideInUp" style="animation-delay: 100ms">
              <h4 class="font-bold uppercase tracking-[0.2em] text-primary-400 mb-6 text-xs text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
                <svg class="w-4 h-4 animate-svgPulse" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Shop
              </h4>
              <ul class="space-y-4 text-cream/70 text-center sm:text-left">
                <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Single Origin</a></li>
                <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Signature Blends</a></li>
                <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Brewing Gear</a></li>
              </ul>
            </div>

            <!-- Company Links -->
            <div class="animate-slideInUp" style="animation-delay: 150ms">
              <h4 class="font-bold uppercase tracking-[0.2em] text-primary-400 mb-6 text-xs text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
                <svg class="w-4 h-4 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
                Company
              </h4>
              <ul class="space-y-4 text-cream/70 text-center sm:text-left">
                <li><a href="#story" class="hover:text-primary-400 transition-colors duration-300">Our Story</a></li>
                <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Wholesale</a></li>
                <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-20 pt-8 border-t border-primary-400/5 text-center text-[10px] font-bold tracking-[0.3em] text-cream/30 uppercase">
          © 2024 - {{currentYear}} Roaster Maldives. All rights reserved.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
