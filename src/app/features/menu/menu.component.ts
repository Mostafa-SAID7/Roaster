import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="menu" class="mt-24 sm:mt-32 lg:mt-44 px-4 sm:px-6 reveal">
      <div class="text-center max-w-3xl mx-auto mb-12 lg:mb-16"><span class="text-primary-400 font-bold uppercase text-sm tracking-[0.2em] mb-4 block">Discover MERZY</span><h2 class="section-title">Coffee And Bakery, In Good Company.</h2><p class="text-cream/60 text-base sm:text-lg leading-relaxed">A thoughtful selection of specialty coffee, fresh pastries, breakfast treats, desserts, and seasonal bakes.</p></div>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <article *ngFor="let feature of features" class="group relative min-h-[420px] bg-dark-900 rounded-[2rem] border border-primary-400/10 overflow-hidden hover:border-primary-400/40 hover:-translate-y-1 transition-all duration-500"><img [src]="feature.image" [alt]="feature.alt" width="900" height="720" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"><div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/65 to-transparent"></div><div class="absolute inset-x-0 bottom-0 p-8 sm:p-10"><span class="text-primary-400 font-bold uppercase text-xs tracking-[0.25em]">{{ feature.label }}</span><h3 class="text-3xl sm:text-4xl font-macondo text-cream mt-3 mb-4">{{ feature.title }}</h3><p class="text-cream/70 leading-relaxed max-w-md">{{ feature.description }}</p><a [href]="feature.label === 'Specialty Coffee' ? '#coffee' : '#bakery'" class="inline-flex items-center gap-2 text-primary-400 text-xs font-bold uppercase tracking-widest mt-6 hover:text-cream transition-colors">{{ feature.label === 'Specialty Coffee' ? 'Discover The Coffee' : 'Explore The Bakery' }}<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></a></div></article>
      </div>
      <div class="max-w-6xl mx-auto mt-8 sm:mt-12 relative rounded-[2.5rem] overflow-hidden border border-primary-400/10 bg-dark-900 grid grid-cols-1 lg:grid-cols-2"><div class="p-8 sm:p-12 lg:p-16 flex flex-col justify-center"><span class="text-primary-400 font-bold uppercase text-xs tracking-[0.3em] mb-4">Something New To Discover</span><h3 class="text-4xl sm:text-5xl font-macondo text-cream mb-5">London Cake</h3><p class="text-cream/70 leading-relaxed max-w-md">From familiar favorites to seasonal creations, MERZY's bakery menu keeps things interesting.</p><p class="text-primary-400/80 text-sm font-bold uppercase tracking-widest mt-7">A seasonal MERZY creation worth discovering.</p></div><div class="min-h-[300px]"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop" alt="Seasonal cake from the bakery" width="1000" height="700" loading="lazy" class="w-full h-full object-cover"></div></div>
    </section>
  `,
})
export class MenuComponent {
  features: Feature[] = [
    { label: 'Specialty Coffee', title: 'Coffee, Made With Care.', description: 'Carefully prepared espresso and manual brews made for people who appreciate the details.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop', alt: 'Specialty coffee being prepared' },
    { label: 'Fresh From The Bakery', title: 'A Good Pairing.', description: 'Fresh pastries and desserts made to pair perfectly with your coffee.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop', alt: 'Fresh pastries from an artisan bakery' },
  ];
}
