import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotionService } from '../../core/services/motion.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="site-footer mt-24 overflow-hidden sm:mt-32 lg:mt-44">
      <div class="mx-auto max-w-[1440px] px-6 py-14 sm:px-10 sm:py-20 lg:py-24">
        <div class="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-20 lg:pb-20">
          <div>
            <button (click)="scrollToTop()" class="group inline-flex items-center" aria-label="Go to MERZY home"><span class="text-3xl font-bold uppercase tracking-[0.2em] text-[#d89a75] transition-colors group-hover:text-white">MERZY</span></button>
            <p class="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#d89a75]">Specialty Coffee &amp; Bakery</p>
            <p class="footer-muted mt-5 max-w-xs text-sm leading-relaxed">Alexandria, Egypt<br> Coffee. Bakery. Mediterranean moments.</p>
          </div>
          <div><h2 class="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">Explore</h2><ul class="space-y-3"><li *ngFor="let link of links"><a [href]="link.href" class="footer-muted text-sm">{{ link.label }}</a></li></ul></div>
          <div><h2 class="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-white">Location</h2><p class="footer-muted max-w-xs text-sm leading-relaxed">Bibliotheca Alexandrina<br>Alexandria, Egypt</p><a href="#location" class="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#d89a75]">Get Directions <span aria-hidden="true">↗</span></a></div>
        </div>
        <div class="footer-muted flex flex-col gap-3 pt-7 text-xs uppercase tracking-[0.16em] sm:flex-row sm:items-center sm:justify-between"><span>© {{ currentYear }} MERZY</span><span>Good coffee. Fresh bakes. Alexandria by the sea.</span></div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  links = [{ label: 'Home', href: '#hero' }, { label: 'Coffee', href: '#coffee' }, { label: 'Bakery', href: '#bakery' }, { label: 'Experience', href: '#experience' }, { label: 'Location', href: '#location' }];
  constructor(private motion: MotionService) {}
  scrollToTop(): void { this.motion.scrollToTop(); }
}
