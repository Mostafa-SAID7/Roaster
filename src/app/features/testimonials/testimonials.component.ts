import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="reviews" class="mt-24 sm:mt-32 lg:mt-44 px-4 sm:px-6 reveal">

      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <span class="text-primary-400 font-bold uppercase text-sm tracking-[0.2em] mb-4 block">Happy Customers</span>
        <h2 class="section-title">From Our Customers</h2>
        <div class="flex items-center justify-center gap-3">
          <div class="h-px w-16 bg-gradient-to-r from-transparent to-primary-400/60"></div>
          <svg class="w-4 h-4 text-primary-400 animate-svgPulse" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <div class="h-px w-16 bg-gradient-to-l from-transparent to-primary-400/60"></div>
        </div>
      </div>

      <!-- Testimonial Carousel -->
      <div class="max-w-5xl mx-auto">
        <div class="bg-dark-900 rounded-[3rem] border border-primary-400/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">

          <!-- Background Accent -->
          <div class="absolute -top-32 -right-32 w-96 h-96 bg-primary-400/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-400/3 blur-[120px] rounded-full pointer-events-none"></div>

          <!-- Opening Quote Mark -->
          <div class="text-primary-400 text-9xl font-macondo leading-none opacity-20 absolute top-6 left-8 select-none">"</div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">

            <!-- Left: Testimonial Text -->
            <div class="flex flex-col justify-center">
              <blockquote class="text-cream/90 text-lg sm:text-xl font-macondo italic leading-relaxed mb-8">
                {{ testimonials[activeIndex].quote }}
              </blockquote>

              <!-- Closing Quote Mark -->
              <div class="text-primary-400 text-9xl font-macondo leading-none opacity-20 text-right select-none mb-4">"</div>

              <!-- Stars -->
              <div class="flex gap-1 mb-4">
                <svg *ngFor="let s of [1,2,3,4,5]" class="w-5 h-5 text-primary-400 animate-svgFlicker"
                     fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.117L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.951-.69l1.286-3.967z"/>
                </svg>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-400/30">
                  <img [src]="testimonials[activeIndex].image"
                       [alt]="testimonials[activeIndex].name"
                       class="w-full h-full object-cover">
                </div>
                <div>
                  <div class="text-cream font-bold uppercase tracking-[0.15em] text-sm">
                    – {{ testimonials[activeIndex].name }}
                  </div>
                  <div class="text-primary-400/70 text-xs uppercase tracking-widest mt-0.5">
                    {{ testimonials[activeIndex].role }}
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex gap-3 mt-10">
                <button (click)="prev()"
                        class="w-11 h-11 rounded-full border border-primary-400/30 flex items-center justify-center
                               text-cream/60 hover:text-cream hover:border-primary-400 hover:bg-primary-400/10
                               transition-all duration-300 group/btn">
                  <svg class="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform duration-300"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button (click)="next()"
                        class="w-11 h-11 rounded-full border border-primary-400/30 flex items-center justify-center
                               text-cream/60 hover:text-cream hover:border-primary-400 hover:bg-primary-400/10
                               transition-all duration-300 group/btn">
                  <svg class="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform duration-300"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>

                <!-- Dots -->
                <div class="flex items-center gap-2 ml-4">
                  <button *ngFor="let t of testimonials; let i = index"
                          (click)="activeIndex = i"
                          class="transition-all duration-300 rounded-full"
                          [class]="i === activeIndex
                            ? 'w-6 h-2 bg-primary-400'
                            : 'w-2 h-2 bg-primary-400/30 hover:bg-primary-400/60'">
                  </button>
                </div>
              </div>
            </div>

            <!-- Right: Customer Photo -->
            <div class="hidden lg:flex items-center justify-center">
              <div class="relative w-72 h-80">
                <!-- Arch frame -->
                <div class="w-full h-full rounded-[6rem_6rem_4rem_4rem] overflow-hidden border border-primary-400/20 shadow-2xl shadow-primary-400/10">
                  <img [src]="testimonials[activeIndex].image"
                       [alt]="testimonials[activeIndex].name"
                       class="w-full h-full object-cover object-top transition-all duration-700">
                  <div class="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <!-- Coffee Bean Splatter Accent -->
                <div class="absolute -bottom-4 -right-4 w-32 h-32 opacity-30">
                  <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400&auto=format&fit=crop"
                       alt="Coffee beans accent" loading="lazy"
                       class="w-full h-full object-cover rounded-3xl">
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  `,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  activeIndex = 0;
  private autoPlay: ReturnType<typeof setInterval> | null = null;

  testimonials: Testimonial[] = [
    {
      quote: "I've tried coffee from various places, but Roaster stands out from the rest. The quality and consistency of their blends are unmatched. Each cup is a flavor journey that takes my taste buds to new heights. Their commitment to sourcing the finest beans and their meticulous roasting process truly shines through in every sip.",
      name: 'Samantha R.',
      role: 'Regular Customer · Malé',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&facepad=2'
    },
    {
      quote: "As someone who takes coffee very seriously, I was thrilled to find Roaster in the Maldives. The single origin Ethiopian is extraordinary — jasmine-forward with a silky finish. Delivered fresh, next day. This is specialty coffee done right, right here on our island.",
      name: 'Ahmed K.',
      role: 'Coffee Enthusiast · Hulhumalé',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&facepad=2'
    },
    {
      quote: "Roaster has completely changed my morning routine. The pour-over guide they include with each shipment is genuinely helpful, and the beans taste noticeably fresher than anything I've ordered from overseas. Supporting a local Maldivian roastery that does it this well feels incredible.",
      name: 'Mariyam S.',
      role: 'Home Brewer · Villimalé',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop&facepad=2'
    },
  ];

  ngOnInit(): void {
    this.autoPlay = setInterval(() => this.next(), 6000);
  }

  ngOnDestroy(): void {
    if (this.autoPlay) clearInterval(this.autoPlay);
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
