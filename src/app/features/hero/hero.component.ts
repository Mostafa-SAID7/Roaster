import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="relative w-full min-h-[90vh] rounded-[2rem] overflow-hidden bg-dark-800/30 shadow-2xl reveal active flex flex-col border border-dark-800">
      <!-- Navigation Bar -->
      <nav class="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="text-primary-400 p-2 rounded-lg border border-primary-400/30 bg-dark-900/50 backdrop-blur-md">
            <span class="text-2xl">☕</span>
          </div>
          <span class="text-primary-400 text-xl font-oswald uppercase tracking-widest font-semibold">Island Roaster</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1 bg-dark-900/80 backdrop-blur-md border border-primary-400/20 rounded-full p-1.5 px-2 font-oswald uppercase tracking-widest text-sm">
          <a href="#story" class="px-5 py-2 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-full transition-colors duration-300">Our Story</a>
          <a href="#process" class="px-5 py-2 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-full transition-colors duration-300">Bean-to-Mug</a>
          <a href="#delivery" class="px-5 py-2 text-cream/80 hover:text-primary-400 hover:bg-dark-800 rounded-full transition-colors duration-300">Delivery</a>
        </div>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center gap-3">
          <a href="#shop" class="group flex items-center gap-3 bg-primary-400 pl-5 pr-1.5 py-1.5 rounded-full hover:bg-cream transition-all duration-300">
            <span class="text-sm font-oswald uppercase tracking-widest text-dark-900 font-medium">Taste the Craft</span>
            <span class="w-8 h-8 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-colors duration-300">
              🛒
            </span>
          </a>
        </div>
      </nav>

      <!-- Hero Split Content -->
      <div class="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">
        <!-- Left: Text -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-12 lg:py-0">
          <span class="reveal reveal-delay-1 inline-block text-primary-400 font-playfair italic text-3xl sm:text-4xl lg:text-5xl mb-6">The Spirit of the Island</span>
          <h1 class="reveal reveal-delay-2 text-5xl sm:text-6xl lg:text-7xl text-cream font-oswald uppercase tracking-tight leading-[1.1] mb-8 max-w-2xl">A Commitment to Roasting Excellence in the Maldives.</h1>
          <a href="#shop" class="reveal reveal-delay-3 w-max btn-primary">
            <span class="text-base font-oswald uppercase tracking-widest font-semibold">Taste The Craft</span>
            <span class="w-12 h-12 bg-dark-900 rounded-full flex items-center justify-center group-hover:bg-dark-800 transition-colors duration-300">
              →
            </span>
          </a>
        </div>

        <!-- Right: Image -->
        <div class="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full reveal reveal-delay-2">
          <div class="lg:from-dark-900 bg-gradient-to-r from-dark-800/30 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
          <img src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=2670&auto=format&fit=crop" alt="Premium Matte Black Coffee Pouch" class="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten scale-105">
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host ::ng-deep {
      .reveal-delay-1 { animation-delay: 150ms; }
      .reveal-delay-2 { animation-delay: 300ms; }
      .reveal-delay-3 { animation-delay: 450ms; }
    }
  `]
})
export class HeroComponent implements OnInit {
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

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }
}
