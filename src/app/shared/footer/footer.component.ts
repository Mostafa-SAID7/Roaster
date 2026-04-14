import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="mt-32 py-12 px-6 flex flex-col md:flex-row items-center md:items-start justify-between border-t border-dark-800/40 gap-12 reveal text-center md:text-left">
      <div class="space-y-6 flex flex-col items-center md:items-start">
        <div class="flex items-center gap-3">
          <div class="text-primary-400 p-1.5 rounded-lg border border-primary-400/30 bg-dark-900">
            ☕
          </div>
          <span class="text-cream text-xl font-oswald uppercase tracking-widest font-medium">Island Roaster</span>
        </div>
        <p class="text-sm text-cream/60 max-w-xs italic">A commitment to roasting excellence in the Maldives. Sustainable, fresh, unparalleled.</p>
      </div>

      <div class="flex gap-16 text-sm">
        <div>
          <h4 class="font-oswald uppercase tracking-widest text-primary-400 mb-5 text-base">Shop</h4>
          <ul class="space-y-3 text-cream/70">
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Single Origin</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Signature Blends</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Brewing Gear</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-oswald uppercase tracking-widest text-primary-400 mb-5 text-base">Company</h4>
          <ul class="space-y-3 text-cream/70">
            <li><a href="#story" class="hover:text-primary-400 transition-colors duration-300">Our Story</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Wholesale</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>

    <div class="text-center pb-8 text-xs font-oswald tracking-widest text-cream/40 uppercase reveal">
      © 2024 Island Roaster Maldives. All rights reserved.
    </div>
  `
})
export class FooterComponent {}
