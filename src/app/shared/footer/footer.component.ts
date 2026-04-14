import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="shop" class="mt-16 sm:mt-24 relative overflow-hidden reveal">

      <!-- Social / Brand Banner -->
      <div class="relative bg-dark-900/95 border-t border-primary-400/10 py-12 px-4 text-center overflow-hidden">
        <!-- Blurred background coffee image -->
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop"
               alt="" loading="lazy" class="w-full h-full object-cover object-center">
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/80 to-dark-900 pointer-events-none"></div>

        <!-- Top glow line -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent"></div>

        <div class="relative z-10">
          <!-- Logo -->
          <div (click)="scrollToTop()" class="inline-flex items-center gap-3 group cursor-pointer mb-4">
            <div class="text-primary-400 p-2 rounded-lg border border-primary-400/30 bg-dark-950
                        group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-400/20 transition-all duration-300">
              <svg class="w-5 h-5 text-primary-400 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v-4m4 4v-4m-8 4v-4M5.25 8h13.5v9a3.75 3.75 0 01-3.75 3.75h-6A3.75 3.75 0 015.25 17V8zM18.75 11.25h1.125A1.875 1.875 0 0121.75 13.125v.75a1.875 1.875 0 01-1.875 1.875h-1.125V11.25z"/>
              </svg>
            </div>
            <span class="text-primary-400 text-xl font-bold uppercase tracking-widest group-hover:text-cream transition-colors duration-300">
              Roaster
            </span>
          </div>

          <p class="text-cream/50 text-sm italic max-w-xs mx-auto mb-8">
            Sip, Savor, and Be Captivated by Roaster Mastery.
          </p>

          <!-- Social Icons -->
          <div class="flex items-center justify-center gap-4">
            <a *ngFor="let social of socials" [href]="social.href" [attr.aria-label]="social.label" target="_blank" rel="noopener"
               class="w-10 h-10 rounded-full bg-dark-800 border border-primary-400/20 flex items-center justify-center
                      text-cream/50 hover:text-primary-400 hover:border-primary-400/60 hover:bg-dark-700
                      hover:shadow-md hover:shadow-primary-400/10 hover:-translate-y-0.5
                      transition-all duration-300 group/social">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path [attr.d]="social.path"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Main Footer Links -->
      <div class="bg-[#0e0b09] border-t border-primary-400/5 px-4 py-14">
        <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <!-- About Company -->
          <div>
            <h4 class="font-bold uppercase tracking-[0.2em] text-cream text-sm mb-6">About Company</h4>
            <p class="text-cream/50 text-sm leading-relaxed mb-6">
              Born in Malé, Roaster is a specialty coffee roastery dedicated to bringing the world's
              finest beans to the Maldivian palate — freshly roasted, sustainably sourced.
            </p>
            <div class="space-y-3 text-sm">
              <div class="flex items-center gap-3 text-cream/50">
                <svg class="w-4 h-4 text-primary-400 flex-shrink-0 animate-svgPulse" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
                <span>Malé City, Republic of Maldives</span>
              </div>
              <div class="flex items-center gap-3 text-cream/50">
                <svg class="w-4 h-4 text-primary-400 flex-shrink-0 animate-svgFloat" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                <span>+960 300 7000</span>
              </div>
              <div class="flex items-center gap-3 text-cream/50">
                <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
                <span>hello&#64;roaster.mv</span>
              </div>
            </div>
          </div>

          <!-- Useful Links -->
          <div>
            <h4 class="font-bold uppercase tracking-[0.2em] text-cream text-sm mb-6">Useful Links</h4>
            <ul class="space-y-3">
              <li *ngFor="let link of usefulLinks">
                <a [href]="link.href"
                   class="flex items-center gap-2 text-cream/50 text-sm hover:text-primary-400 transition-colors duration-300 group/link">
                  <svg class="w-3 h-3 text-primary-400/50 group-hover/link:text-primary-400 group-hover/link:translate-x-0.5 transition-all duration-300"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Opening Hours -->
          <div>
            <h4 class="font-bold uppercase tracking-[0.2em] text-cream text-sm mb-6">Opening Hours</h4>
            <p class="text-cream/50 text-sm leading-relaxed mb-6">
              Our roastery dispatch runs every weekday. Orders placed before noon are prioritised for next-day delivery.
            </p>
            <div class="space-y-3 text-sm">
              <div class="flex justify-between items-center border-b border-primary-400/10 pb-3">
                <span class="text-cream/60 font-bold uppercase tracking-wider text-xs">Monday – Friday</span>
                <span class="text-primary-400 font-bold text-xs">09:00 – 20:00</span>
              </div>
              <div class="flex justify-between items-center border-b border-primary-400/10 pb-3">
                <span class="text-cream/60 font-bold uppercase tracking-wider text-xs">Saturday – Sunday</span>
                <span class="text-primary-400 font-bold text-xs">12:00 – 14:00</span>
              </div>
              <div class="flex items-center gap-2 mt-2">
                <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span class="text-green-400/80 text-xs font-bold uppercase tracking-widest">Currently Open</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="bg-[#0a0807] border-t border-primary-400/5 px-4 py-5">
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold tracking-[0.25em] text-cream/25 uppercase">
          <span>© 2024 – {{ currentYear }} Roaster Maldives. All rights reserved.</span>
          <div class="flex items-center gap-6">
            <a href="#" class="hover:text-primary-400/60 transition-colors duration-300">Privacy Policy</a>
            <a href="#" class="hover:text-primary-400/60 transition-colors duration-300">Support</a>
            <a href="#" class="hover:text-primary-400/60 transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socials = [
    {
      label: 'Facebook', href: '#',
      path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    {
      label: 'WhatsApp', href: '#',
      path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M12 0C5.373 0 0 5.373 0 12c0 2.125.556 4.122 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z'
    },
    {
      label: 'Twitter / X', href: '#',
      path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
    },
    {
      label: 'Instagram', href: '#',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
    },
    {
      label: 'TikTok', href: '#',
      path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'
    },
  ];

  usefulLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Our Services', href: '#services' },
    { label: 'Bean-to-Mug Process', href: '#process' },
    { label: 'Coffee Menu', href: '#menu' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Island Delivery', href: '#delivery' },
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
