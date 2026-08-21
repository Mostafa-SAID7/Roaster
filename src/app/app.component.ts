import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HeroComponent } from './features/hero/hero.component';
import { StoryComponent } from './features/story/story.component';
import { ServicesComponent } from './features/services/services.component';
import { ProcessComponent } from './features/process/process.component';
import { MenuComponent } from './features/menu/menu.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BackgroundComponent } from './shared/background/background.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundComponent,
    HeroComponent,
    StoryComponent,
    ServicesComponent,
    ProcessComponent,
    MenuComponent,
    TestimonialsComponent,
    FooterComponent,
    NavbarComponent,
  ],
  template: `
    <app-background></app-background>
    <app-navbar></app-navbar>
    <main class="relative z-10 max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6 overflow-hidden">
      <app-hero></app-hero>
      @defer (on idle) {
        <app-story></app-story>
      } @placeholder {
        <div class="section-placeholder ph-story"></div>
      }
      @defer (on idle) {
        <app-services></app-services>
      } @placeholder {
        <div class="section-placeholder ph-services"></div>
      }
      @defer (on idle) {
        <app-process></app-process>
      } @placeholder {
        <div class="section-placeholder ph-process"></div>
      }
      @defer (on idle) {
        <app-menu></app-menu>
      } @placeholder {
        <div class="section-placeholder ph-menu"></div>
      }
      @defer (on idle) {
        <app-testimonials></app-testimonials>
      } @placeholder {
        <div class="section-placeholder ph-testimonials"></div>
      }
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('MERZY | Specialty Coffee & Bakery in Alexandria');
    this.metaService.updateTag({ name: 'description', content: 'Discover MERZY, a specialty coffee and artisan bakery beside the Bibliotheca Alexandrina in Alexandria, Egypt. Enjoy specialty coffee, V60, fresh pastries and modern café experiences by the Mediterranean.' });
    this.metaService.updateTag({ name: 'keywords', content: 'MERZY Alexandria, MERZY Specialty Coffee, specialty coffee Alexandria, coffee shop Alexandria, cafés in Alexandria, coffee near Bibliotheca Alexandrina, bakery Alexandria, V60 Alexandria, specialty coffee Egypt, Alexandria coffee' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:title', content: 'MERZY | Specialty Coffee & Bakery in Alexandria' });
    this.metaService.updateTag({ property: 'og:description', content: 'Good coffee. Fresh bakes. Alexandria by the sea.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: 'MERZY | Specialty Coffee & Bakery in Alexandria' });
    this.metaService.updateTag({ name: 'twitter:description', content: 'Good coffee. Fresh bakes. Alexandria by the sea.' });
    this.metaService.updateTag({ name: 'twitter:image', content: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop' });
  }
}
