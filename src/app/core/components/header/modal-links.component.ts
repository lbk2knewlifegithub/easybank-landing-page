import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  zoomInOnEnterAnimation,
  zoomOutOnLeaveAnimation
} from 'angular-animations';
import { debounceTime, fromEvent } from 'rxjs';
import { UnsubscribeComponent } from 'src/app/shared/components/unsubscribe.component';

@Component({
  selector: 'lbk-modal-links',
  template: `
    <div
      *ngIf="open"
      @fadeInOnEnter
      @fadeOutOnLeave
      class="modal-links fixed top-[68px] h-[calc(100%-68px)] left-0 w-full  bg-black/5 z-50"
    >
      <div @zoomInOnEnter @zoomOutOnLeave class="container">
        <!--  links-->
        <ul>
          <li>
            <a (click)="onLink()" class="animate-link" routerLink="/">Home</a>
          </li>
          <li>
            <a (click)="onLink()" class="animate-link" routerLink="/">About</a>
          </li>
          <li>
            <a (click)="onLink()" class="animate-link" routerLink="/"
              >Contact</a
            >
          </li>
          <li>
            <a (click)="onLink()" class="animate-link" routerLink="/">Blog</a>
          </li>
          <li>
            <a (click)="onLink()" class="animate-link" routerLink="/"
              >Careers</a
            >
          </li>
        </ul>
        <!--  end links-->
      </div>
    </div>
  `,
  styles: [
    `
      ul {
        @apply bg-white mt-10 grid gap-4 place-content-center py-6 text-center font-medium rounded-lg max-w-sm mx-auto md:gap-8 md:py-10;
        li {
          a {
            @apply text-muted hover:text-black;
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation({ delay: 300 }),
    zoomInOnEnterAnimation({ delay: 300 }),
    zoomOutOnLeaveAnimation(),
    fadeOutOnLeaveAnimation({ delay: 300 }),
  ],
})
export class ModalLinksComponent extends UnsubscribeComponent {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();

  constructor(private readonly _cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.appendSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(200))
      .subscribe(() => {
        if (this.open) this.close();
      });

    this.appendSub = fromEvent(window, 'click').subscribe((event: Event) => {
      const target = event.target as HTMLElement;
      const matched = target.matches('#menu');
      if (matched) return;

      const closest = target.closest('.modal-links');
      if (!closest && this.open) this.close();
    });
  }

  onLink() {
    this.close();
  }

  close() {
    this.open = false;
    this._cd.markForCheck();

    setTimeout(() => {
      this.openChange.emit(false);
    }, 1990);
  }
}
