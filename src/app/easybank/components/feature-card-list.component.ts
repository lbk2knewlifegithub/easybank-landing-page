import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-card-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mt-32 md:mt-72 lg:mt-32">
      <div
        class="container grid gap-20 place-items-center lg:place-items-start"
      >
        <!-- text -->
        <div
          class="grid place-content-center text-center lg:text-left md:place-content-start"
        >
          <h1 class="font-bold text-3xl lg:text-4xl lg:text-left">
            Why choose Easybank?
          </h1>
          <p class="text-muted text-base mt-6 max-w-xl lg:text-left">
            We leverage Open banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <!-- end text -->

        <!-- features -->
        <div
          class="grid  gap-10  md:gap-y-20 md:grid-cols-2 lg:grid-cols-4 lg:mt-0"
        >
          <ng-container *ngFor="let feature of features">
            <lbk-feature-card [feature]="feature"></lbk-feature-card>
          </ng-container>
        </div>
        <!-- end features -->
      </div>
    </div>
  `,
})
export class FeatureCardListComponent {
  @Input() features!: Feature[];
}
