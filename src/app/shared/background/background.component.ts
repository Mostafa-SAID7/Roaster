import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Static base background -->
    <div class="fixed inset-0 w-full h-full -z-10 bg-dark-900"></div>

    <!-- Cinematic Vignette Overlay -->
    <div class="fixed inset-0 w-full h-full -z-5 pointer-events-none bg-gradient-to-b from-dark-900/10 via-transparent to-dark-900/60"></div>
  `,
})
export class BackgroundComponent {}
