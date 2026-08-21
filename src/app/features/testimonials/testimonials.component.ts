import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="location" class="mt-24 sm:mt-32 lg:mt-44 px-4 sm:px-6 reveal">
      <div class="max-w-6xl mx-auto bg-dark-900 rounded-[3rem] border border-primary-400/10 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        <div class="p-8 sm:p-12 lg:p-16 flex flex-col justify-center"><span class="text-primary-400 font-bold uppercase text-xs tracking-[0.3em] mb-4">Alexandria</span><h2 class="text-4xl sm:text-5xl font-macondo text-cream mb-6">Coffee By The Mediterranean</h2><p class="text-cream/70 text-base sm:text-lg leading-relaxed mb-5">MERZY sits beside one of Alexandria's most recognizable cultural landmarks — the Bibliotheca Alexandrina.</p><p class="text-cream/70 text-base sm:text-lg leading-relaxed mb-8">Come for the coffee. Stay for the view, the atmosphere and the rhythm of Alexandria.</p><a href="#find-merzy" class="btn-primary group w-max text-sm"><span class="font-bold uppercase tracking-widest">Find MERZY</span><span class="w-10 h-10 bg-dark-900 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform"><svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span></a></div><div class="relative min-h-[400px]"><img src="https://images.unsplash.com/photo-1519608487953-e999c86e7454?q=80&w=1200&auto=format&fit=crop" alt="Mediterranean atmosphere in Alexandria" width="1200" height="900" loading="lazy" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-dark-900/65 via-transparent to-transparent"></div><div class="absolute bottom-8 left-8 right-8 glass-effect rounded-2xl p-5"><div class="text-primary-400 text-xs font-bold uppercase tracking-[0.25em]">Loved For The Coffee. Remembered For The Place.</div><div class="text-cream text-sm mt-2">Specialty Coffee · Bakery · Alexandria</div></div></div>
      </div>
      <div id="find-merzy" class="max-w-6xl mx-auto mt-8 bg-[#13374b] rounded-[2.5rem] border border-primary-400/20 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center"><div><span class="text-primary-400 font-bold uppercase text-xs tracking-[0.3em] mb-4 block">Find Us In Alexandria</span><h3 class="text-3xl sm:text-4xl font-macondo text-cream mb-3">Bibliotheca Alexandrina Services Area</h3><p class="text-cream/75 leading-relaxed max-w-2xl">On the Mediterranean, at the Bibliotheca Alexandrina services area, Alexandria, Egypt.</p></div><a href="#location" class="btn-secondary justify-center text-sm">Get Directions</a></div>
    </section>
  `,
})
export class TestimonialsComponent {}
