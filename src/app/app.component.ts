import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { HeroComponent } from './features/hero/hero.component';
import { StoryComponent } from './features/story/story.component';
import { ProcessComponent } from './features/process/process.component';
import { DeliveryComponent } from './features/delivery/delivery.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VantaBackgroundComponent } from './shared/vanta-background/vanta-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    VantaBackgroundComponent,
    HeroComponent,
    StoryComponent,
    ProcessComponent,
    DeliveryComponent,
    FooterComponent
  ],
  template: `
    <app-vanta-background></app-vanta-background>
    <div class="relative z-0 max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6 overflow-hidden">
      <app-hero></app-hero>
      <app-story></app-story>
      <app-process></app-process>
      <app-delivery></app-delivery>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Island Roaster';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.setupSEO();
    this.setupScrollReveal();
  }

  private setupSEO(): void {
    // Set page title
    this.titleService.setTitle('Island Roaster - Premium Maldivian Coffee | Specialty Coffee Roasted in Malé');

    // Set meta tags
    this.metaService.updateTag({
      name: 'description',
      content: 'Island Roaster - Premium specialty coffee roasted in the Maldives. Sustainably sourced, expertly roasted, delivered fresh to your island. Experience the finest Maldivian coffee.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'specialty coffee, Maldives coffee, premium coffee, roasted coffee, sustainable coffee, Malé roastery, coffee delivery, single origin coffee'
    });

    this.metaService.updateTag({
      name: 'author',
      content: 'Island Roaster'
    });

    this.metaService.updateTag({
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    });

    // Open Graph tags
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Island Roaster - Premium Maldivian Coffee'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Specialty coffee roasted in the Maldives. Sustainably sourced, expertly roasted, delivered fresh.'
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop'
    });

    // Twitter tags
    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: 'Island Roaster - Premium Maldivian Coffee'
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: 'Specialty coffee roasted in the Maldives. Sustainably sourced, expertly roasted, delivered fresh.'
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop'
    });
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

    // Observe all reveal elements
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    }, 100);
  }
}
