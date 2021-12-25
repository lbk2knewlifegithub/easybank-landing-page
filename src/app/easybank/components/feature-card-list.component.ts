import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-card-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section @fadeInOnEnter class="bg-muted py-20 md:py-24 lg:py-32">
      <div class="container space-y-20 lg:space-y-16">
        <!-- text -->
        <div
          class="mx-auto space-y-6 max-w-xl  text-center lg:text-left lg:mx-0 lg:mr-auto"
        >
          <h2 class="text-3xl sm:text-4xl">
            Why choose <br class="sm:hidden" />
            Easybank?
          </h2>

          <p class="text-muted ">
            We leverage Open banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <!-- end text -->

        <!-- features -->
        <div
          class="grid  gap-10 sm:gap-16  md:gap-y-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >
          <ng-container *ngFor="let feature of features">
            <lbk-feature-card [feature]="feature"></lbk-feature-card>
          </ng-container>
        </div>
        <!-- end features -->
      </div>
    </section>
  `,
  animations: [fadeInOnEnterAnimation({ delay: 200 })],
})
export class FeatureCardListComponent {
  @Input() features!: Feature[];
}
