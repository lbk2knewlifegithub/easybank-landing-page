import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-card-list',
  template: `
    <div class="mt-32 tablet:mt-72 desktop:mt-32">
      <div class="container grid gap-20 place-items-center desktop:place-items-start">
        <div class="grid place-content-center text-center desktop:text-left tablet:place-content-start">
          <h1 class="font-bold text-3xl desktop:text-4xl desktop:text-left" >
            Why choose Easybank?
          </h1>
          <p class="text-muted text-base mt-6 max-w-xl desktop:text-left">
            We leverage Open banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <!-- features -->
        <div
          class="grid  gap-10  tablet:gap-y-20 tablet:grid-cols-2 desktop:grid-cols-4 desktop:mt-0"
        >
          <ng-container *ngFor="let feature of features">
            <lbk-feature-card [feature]="feature" ></lbk-feature-card>
          </ng-container>
        </div>
        <!-- end features -->
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardListComponent {
  @Input() features!: Feature[];
}
