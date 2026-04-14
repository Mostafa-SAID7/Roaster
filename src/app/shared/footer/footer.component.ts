import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="mt-32 py-12 px-6 flex flex-col md:flex-row items-center md:items-start justify-between border-t border-dark-800/40 gap-12 reveal text-center md:text-left">
      <!-- Brand Section -->
      <div class="space-y-6 flex flex-col items-center md:items-start animate-slideInUp">
        <div class="flex items-center gap-3 group">
          <div class="text-primary-400 p-2 rounded-lg border border-primary-400/30 bg-dark-900 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-400/20 transition-all duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <span class="text-cream text-xl font-oswald uppercase tracking-widest font-medium group-hover:text-primary-400 transition-colors duration-300">Island Roaster</span>
        </div>
        <p class="text-sm text-cream/60 max-w-xs italic font-exo2">A commitment to roasting excellence in the Maldives. Sustainable, fresh, unparalleled.</p>
      </div>

      <!-- Links Section -->
      <div class="flex flex-col sm:flex-row gap-12 sm:gap-16 text-sm">
        <!-- Shop Links -->
        <div class="animate-slideInUp" style="animation-delay: 100ms">
          <h4 class="font-oswald uppercase tracking-widest text-primary-400 mb-5 text-base flex items-center justify-center sm:justify-start gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-. 9-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25z"/>
            </svg>
            Shop
          </h4>
          <ul class="space-y-3 text-cream/70">
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">Single Origin</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">Signature Blends</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">Brewing Gear</a></li>
          </ul>
        </div>

        <!-- Company Links -->
        <div class="animate-slideInUp" style="animation-delay: 150ms">
          <h4 class="font-oswald uppercase tracking-widest text-primary-400 mb-5 text-base flex items-center justify-center sm:justify-start gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Company
          </h4>
          <ul class="space-y-3 text-cream/70">
            <li><a href="#story" class="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">Our Story</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">Wholesale</a></li>
            <li><a href="#" class="hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 inline-block">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>

    <!-- Copyright -->
    <div class="text-center pb-8 text-xs font-oswald tracking-widest text-cream/40 uppercase reveal animate-slideInUp delay-200">
      © 2024 Island Roaster Maldives. All rights reserved.
    </div>
  `,
})
export class FooterComponent implements OnInit {
  ngOnInit(): void {
    this.setupScrollReveal();
  }

  private setupScrollReveal(): void {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
