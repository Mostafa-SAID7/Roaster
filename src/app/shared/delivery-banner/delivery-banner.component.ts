import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="delivery" class="max-w-6xl mx-auto mb-16 lg:mb-20 scroll-mt-28">
      <div class="relative bg-dark-900 rounded-[2.5rem] border border-primary-400/10 overflow-hidden">
        <!-- BG image -->
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop"
               alt="Coffee delivery" loading="lazy"
               class="w-full h-full object-cover opacity-10 animate-imageSlowZoom">
        </div>
        <div class="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/70 to-dark-900/30 pointer-events-none"></div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-8 sm:p-12 lg:p-16">
          <!-- Left -->
          <div>
            <div class="w-14 h-14 rounded-full bg-dark-800 text-primary-400 flex items-center justify-center mb-6 border border-primary-400/30 animate-pulse">
              <svg class="w-7 h-7 animate-svgVibrate" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.256 2.256 0 00-1.903-.933H14.25M16.5 18.75V15.75L13.2 7.125"/>
              </svg>
            </div>
            <span class="text-primary-400 font-bold uppercase text-xs tracking-[0.3em] mb-3 block">Freshly Packed &amp; Delivered</span>
            <h3 class="text-3xl sm:text-4xl font-macondo text-cream tracking-tight mb-4 leading-tight">
              From Roastery to Your Island, Same-Day Fresh
            </h3>
            <p class="text-cream/60 text-base leading-relaxed max-w-md">
              Select your island below to check delivery times and logistics directly from our Malé
              roastery. Every order is packed and sealed at the moment of dispatch.
            </p>
          </div>
          <!-- Right: delivery cards -->
          <div class="grid grid-cols-2 gap-4">
            <div *ngFor="let d of deliveryHighlights"
                 class="bg-dark-800/60 rounded-2xl border border-primary-400/10 p-5 hover:border-primary-400/30 transition-all duration-300">
              <div class="text-primary-400 mb-3">
                <svg class="w-6 h-6 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="d.icon"/>
                </svg>
              </div>
              <p class="text-cream font-bold text-sm mb-1">{{ d.island }}</p>
              <p class="text-primary-400 text-xs font-bold">{{ d.time }}</p>
              <p class="text-cream/40 text-xs mt-1">{{ d.cost }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DeliveryBannerComponent {
  deliveryHighlights = [
    { island: 'Malé',          time: 'Next-Day',     cost: '40 MVR',   icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z' },
    { island: 'Hulhumalé',     time: 'Next-Day',     cost: '50 MVR',   icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.256 2.256 0 00-1.903-.933H14.25M16.5 18.75V15.75L13.2 7.125' },
    { island: 'Villimalé',     time: '2-Day',        cost: '60 MVR',   icon: 'M12 3v2m6.364.636l-1.414 1.414M21 12h-2M18.364 18.364l-1.414-1.414M12 19v2M7.05 18.364l-1.414 1.414M5 12H3M7.05 5.636L5.636 4.222' },
    { island: 'Resorts',       time: 'Speedboat',    cost: 'Quoted',   icon: 'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' },
  ];
}
