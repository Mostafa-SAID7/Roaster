import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MotionService } from '../../core/services/motion.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="mt-16 sm:mt-24 relative overflow-hidden reveal"><div class="relative bg-dark-900/95 border-t border-primary-400/10 py-14 px-4 overflow-hidden"><div class="absolute inset-0 opacity-10 pointer-events-none"><img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" alt="" width="1200" height="500" loading="lazy" class="w-full h-full object-cover"></div><div class="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/85 to-dark-900"></div><div class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"><div><button (click)="scrollToTop()" class="inline-flex items-center gap-3 group"><span class="text-primary-400 text-2xl font-bold uppercase tracking-[0.25em] group-hover:text-cream transition-colors">MERZY</span></button><p class="text-primary-400 text-xs font-bold uppercase tracking-[0.25em] mt-4">Specialty Coffee &amp; Bakery</p><p class="text-cream/60 text-sm leading-relaxed mt-5 max-w-xs">Alexandria, Egypt<br>Coffee. Bakery. Mediterranean moments.</p></div><div><h2 class="font-bold uppercase tracking-[0.2em] text-cream text-sm mb-6">Explore</h2><ul class="space-y-3"><li *ngFor="let link of links"><a [href]="link.href" class="text-cream/60 text-sm hover:text-primary-400 transition-colors">{{ link.label }}</a></li></ul></div><div><h2 class="font-bold uppercase tracking-[0.2em] text-cream text-sm mb-6">Location</h2><p class="text-cream/60 text-sm leading-relaxed">Bibliotheca Alexandrina<br>Alexandria, Egypt</p><a href="#location" class="inline-flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-widest mt-6 hover:text-cream transition-colors">Get Directions<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></a></div></div></div><div class="bg-[#0a0807] border-t border-primary-400/5 px-4 py-5"><div class="max-w-6xl mx-auto text-center text-[10px] font-bold tracking-[0.25em] text-cream/25 uppercase">© {{ currentYear }} MERZY. All rights reserved.</div></div></footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  links = [{ label: 'Home', href: '#hero' }, { label: 'Coffee', href: '#coffee' }, { label: 'Bakery', href: '#bakery' }, { label: 'Experience', href: '#experience' }, { label: 'Location', href: '#location' }];
  constructor(private motion: MotionService) {}
  scrollToTop(): void { this.motion.scrollToTop(); }
}
