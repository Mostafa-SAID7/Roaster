import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="mt-24 sm:mt-32 lg:mt-44 px-4 sm:px-6 reveal">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
        <span class="text-primary-400 font-bold uppercase text-sm tracking-[0.2em] mb-4 block">What We Offer</span>
        <h2 class="section-title">Our Delicious Services</h2>
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-16 bg-gradient-to-r from-transparent to-primary-400/60"></div>
          <svg class="w-4 h-4 text-primary-400 animate-svgFloat" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <div class="h-px w-16 bg-gradient-to-l from-transparent to-primary-400/60"></div>
        </div>
        <p class="text-cream/60 text-base leading-relaxed">
          We offer a carefully curated collection that showcases the distinct characteristics of<br class="hidden sm:block">
          beans sourced from specific regions.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        <!-- Coffee Types -->
        <div class="group bg-dark-900 rounded-[2rem] border border-primary-400/10 p-10 text-center
                    hover:border-primary-400/40 hover:shadow-2xl hover:shadow-primary-400/10
                    hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-primary-400/0 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
          <!-- Icon -->
          <div class="w-20 h-20 rounded-full bg-dark-800/80 border border-primary-400/20
                      flex items-center justify-center mx-auto mb-8
                      group-hover:border-primary-400/50 group-hover:shadow-[0_0_30px_rgba(212,163,115,0.15)]
                      transition-all duration-500">
            <svg class="w-9 h-9 text-primary-400 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v-4m4 4v-4m-8 4v-4M5.25 8h13.5v9a3.75 3.75 0 01-3.75 3.75h-6A3.75 3.75 0 015.25 17V8zM18.75 11.25h1.125A1.875 1.875 0 0121.75 13.125v.75a1.875 1.875 0 01-1.875 1.875h-1.125V11.25z"/>
            </svg>
          </div>
          <h3 class="text-xl font-macondo text-cream mb-4 tracking-tight">Coffee Types</h3>
          <p class="text-cream/60 text-sm leading-relaxed mb-8">
            We offer a tantalizing variety of coffee types to cater to your unique preferences.
          </p>
          <a href="#process" class="inline-flex items-center gap-2 text-primary-400 text-sm font-bold uppercase tracking-widest
                    hover:text-cream transition-colors duration-300 group/link">
            Learn More
            <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <!-- Different Beans -->
        <div class="group bg-dark-900 rounded-[2rem] border border-primary-400/10 p-10 text-center
                    hover:border-primary-400/40 hover:shadow-2xl hover:shadow-primary-400/10
                    hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-primary-400/0 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
          <div class="w-20 h-20 rounded-full bg-dark-800/80 border border-primary-400/20
                      flex items-center justify-center mx-auto mb-8
                      group-hover:border-primary-400/50 group-hover:shadow-[0_0_30px_rgba(212,163,115,0.15)]
                      transition-all duration-500">
            <svg class="w-9 h-9 text-primary-400 animate-svgPulse" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
            </svg>
          </div>
          <h3 class="text-xl font-macondo text-cream mb-4 tracking-tight">Different Beans</h3>
          <p class="text-cream/60 text-sm leading-relaxed mb-8">
            We take pride in sourcing and roasting the finest quality beans from around the world.
          </p>
          <a href="#process" class="inline-flex items-center gap-2 text-primary-400 text-sm font-bold uppercase tracking-widest
                    hover:text-cream transition-colors duration-300 group/link">
            Learn More
            <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <!-- Cold Coffee -->
        <div class="group bg-dark-900 rounded-[2rem] border border-primary-400/10 p-10 text-center
                    hover:border-primary-400/40 hover:shadow-2xl hover:shadow-primary-400/10
                    hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-primary-400/0 to-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"></div>
          <div class="w-20 h-20 rounded-full bg-dark-800/80 border border-primary-400/20
                      flex items-center justify-center mx-auto mb-8
                      group-hover:border-primary-400/50 group-hover:shadow-[0_0_30px_rgba(212,163,115,0.15)]
                      transition-all duration-500">
            <svg class="w-9 h-9 text-primary-400 animate-svgSway" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 2c.34 0 .67.03 1 .08V12h7.92c-.4 3.6-3.41 6.42-7.03 6.94V21H11v-2.06A8.01 8.01 0 013.08 12H5c.37 3.11 2.9 5.5 6.08 5.92V12h-.08A8.009 8.009 0 015 5.08"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.5 7.5h2m-2 3h2"/>
            </svg>
          </div>
          <h3 class="text-xl font-macondo text-cream mb-4 tracking-tight">Cold Coffee</h3>
          <p class="text-cream/60 text-sm leading-relaxed mb-8">
            We offer a variety of cold coffee options to satisfy your cravings at any time.
          </p>
          <a href="#menu" class="inline-flex items-center gap-2 text-primary-400 text-sm font-bold uppercase tracking-widest
                    hover:text-cream transition-colors duration-300 group/link">
            Learn More
            <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

      </div>

      <!-- Divider Coffee Beans Banner -->
      <div class="mt-20 lg:mt-28 relative h-48 rounded-[2rem] overflow-hidden border border-primary-400/10">
        <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop"
             alt="Coffee beans spread"
             loading="lazy"
             class="w-full h-full object-cover object-center animate-imageSlowZoom">
        <div class="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/40 to-dark-900 pointer-events-none"></div>
      </div>

    </section>
  `,
})
export class ServicesComponent {}
