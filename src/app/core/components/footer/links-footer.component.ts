import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="space-y-4">
      <li>
        <a class="animate-link" routerLink="/">About Us</a>
      </li>
      <li>
        <a class="animate-link" routerLink="/">Contact</a>
      </li>
      <li>
        <a class="animate-link" routerLink="/">Blog</a>
      </li>
    </ul>

    <ul class="space-y-4">
      <li>
        <a class="animate-link" routerLink="/">Careers</a>
      </li>
      <li>
        <a class="animate-link" routerLink="/">Support</a>
      </li>
      <li>
        <a class="animate-link" routerLink="/">Privacy Policy</a>
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        @apply grid gap-4 text-center text-inverted lg:grid-cols-2 lg:gap-20 lg:text-left;
      }
    `,
  ],
})
export class LinksFooterComponent {}
