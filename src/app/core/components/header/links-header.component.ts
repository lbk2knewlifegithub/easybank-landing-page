import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="">
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/">About</a></li>
      <li><a routerLink="/">Contact</a></li>
      <li><a routerLink="/">Blog</a></li>
      <li><a routerLink="/">Careers</a></li>
    </ul>
  `,
  styles: [
    `
      ul {
        /* @apply items-center py-6 text-sm gap-6 text-muted tracking-wide hidden md:flex lg:text-base lg:gap-10 lg:py-8; */
      }
    `,
  ],
})
export class LinksHeaderComponent {}
