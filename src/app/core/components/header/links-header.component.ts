import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-links-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="">
      <li><a class="animate-link" routerLink="/">Home</a></li>
      <li><a class="animate-link" routerLink="/">About</a></li>
      <li><a class="animate-link" routerLink="/">Contact</a></li>
      <li><a class="animate-link" routerLink="/">Blog</a></li>
      <li><a class="animate-link" routerLink="/">Careers</a></li>
    </ul>
  `,
  styles: [
    `
      ul {
        @apply flex items-center text-sm gap-10 text-muted tracking-wide lg:text-base;
        li{
          a{
            @apply pb-8 hover:text-black;
          }
        }
      }
    `,
  ],
})
export class LinksHeaderComponent {}
