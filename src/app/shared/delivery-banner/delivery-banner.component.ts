import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-delivery-banner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="max-w-6xl mx-auto relative bg-dark-900 rounded-[2.5rem] border border-primary-400/10 overflow-hidden p-8 sm:p-12"><span class="text-primary-400 text-xs font-bold uppercase tracking-[0.3em]">MERZY</span><h2 class="text-3xl font-macondo text-cream mt-4">Coffee. Bakery. Mediterranean moments.</h2><p class="text-cream/60 mt-4 max-w-xl">Visit MERZY beside the Bibliotheca Alexandrina in Alexandria, Egypt.</p></section>
  `,
})
export class DeliveryBannerComponent {}
