import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="location" class="mt-24 reveal sm:mt-32 lg:mt-44">
      <div class="location-panel mx-4 grid overflow-hidden sm:mx-6 lg:mx-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-20">
          <span class="eyebrow mb-5">Alexandria</span>
          <h2 class="mb-6 text-4xl sm:text-6xl">Coffee By The Mediterranean</h2>
          <p class="location-copy mb-5 text-base sm:text-lg">MERZY sits beside one of Alexandria's most recognizable cultural landmarks — the Bibliotheca Alexandrina.</p>
          <p class="location-copy mb-8 text-base sm:text-lg">Come for the coffee. Stay for the view, the atmosphere and the rhythm of Alexandria.</p>
          <a href="#find-merzy" class="btn-primary group w-max text-sm"><span class="px-3 font-bold uppercase tracking-widest">Find MERZY</span><span class="flex h-10 w-10 items-center justify-center rounded-full bg-[#211815] group-hover:translate-x-1"><svg class="h-5 w-5 text-[#d89a75]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg></span></a>
        </div>
        <div class="relative min-h-[26rem] lg:min-h-0">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" alt="Mediterranean coastline atmosphere near Alexandria" width="1200" height="900" loading="lazy" class="absolute inset-0 h-full w-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-r from-[#2b1d19]/45 via-transparent to-transparent"></div>
          <div class="absolute bottom-7 left-7"><div class="glass-effect rounded-xl px-4 py-3"><span class="text-xs font-bold uppercase tracking-widest text-[#8f4f37]">Alexandria, Egypt</span><p class="mt-1 text-sm text-[#211815]">By the Mediterranean</p></div></div>
        </div>
      </div>
      <div id="find-merzy" class="location-details mx-4 mt-5 grid max-w-[calc(100%-2rem)] items-center gap-7 p-8 sm:mx-6 sm:max-w-[calc(100%-3rem)] sm:p-10 md:grid-cols-[1fr_auto] lg:mx-10 lg:max-w-[calc(100%-5rem)]"><div><span class="eyebrow mb-4 block">Find Us In Alexandria</span><h3 class="mb-3 text-3xl sm:text-4xl">Bibliotheca Alexandrina Services Area</h3><p class="max-w-2xl leading-relaxed">On the Mediterranean, at the Bibliotheca Alexandrina services area, Alexandria, Egypt.</p></div><a href="#location" class="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-bold uppercase tracking-widest text-white hover:border-white hover:bg-white/10">Get Directions</a></div>
    </section>
  `,
})
export class TestimonialsComponent {}
