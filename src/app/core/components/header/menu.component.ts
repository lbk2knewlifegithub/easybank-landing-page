import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'lbk-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button [class.active]="active" (click)="onMenu()" class="menu grid gap-1">
      <img [src]="src" [alt]="name | titlecase" />
    </button>
  `,
})
export class MenuComponent {
  @Input() active!: boolean;
  @Output() activeChange = new EventEmitter<boolean>();

  onMenu(): void {
    this.active = !this.active;
    this.activeChange.emit(this.active);
  }

  get name(): string {
    return this.active ? 'hamburger' : 'close';
  }

  get src(): string {
    return `assets/images/icon-${this.name}.svg`;
  }
}
