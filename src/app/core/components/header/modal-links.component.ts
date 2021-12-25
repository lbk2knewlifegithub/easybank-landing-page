import {
  ChangeDetectionStrategy,
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

@Component({
  selector: 'lbk-modal-links',
  template: `
    <div
      *ngIf="open"
      @fadeInOnEnter
      @fadeOutOnLeave
      class="fixed top-[68px] h-[calc(100%-68px)] left-0 w-full  bg-black/5 z-20"
    >
      <div class="container">
        <!--  links-->
        <ul
          @zoomInOnEnter
          @zoomOutOnLeave
          class="bg-white mt-10 grid gap-4 place-content-center py-6 text-center font-medium rounded max-w-md mx-auto"
        >
          <li><a class="animate-link" routerLink="/">Home</a></li>
          <li><a class="animate-link" routerLink="/">About</a></li>
          <li><a class="animate-link" routerLink="/">Contact</a></li>
          <li><a class="animate-link" routerLink="/">Blog</a></li>
          <li><a class="animate-link" routerLink="/">Careers</a></li>
        </ul>
        <!--  end links-->
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation({delay: 300}),
    fadeOutOnLeaveAnimation(),
    zoomInOnEnterAnimation({ delay: 300}),
    zoomOutOnLeaveAnimation(),
  ],
})
export class ModalLinksComponent {
  @Input() open!: boolean;
  @Output() openChange = new EventEmitter<boolean>();
}
