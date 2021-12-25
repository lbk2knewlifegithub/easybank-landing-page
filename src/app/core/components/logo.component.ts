import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type Logo = 'dark' | 'light';
@Component({
  selector: 'lbk-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a routerLink="/">
      <img [src]="src" alt="Logo" />
    </a>
  `,
})
export class LogoComponent {
  @Input() public logo: Logo = 'dark';

  get src(): string {
    return `/assets/images/logo-${this.logo}.svg`;
  }
}
