import { Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-card',
  template: `
    <div
      class="grid gap-6 place-items-center mx-auto max-w-md desktop:place-items-start"
    >
      <!--  icon-->
      <div>
        <img [src]="feature.src" [alt]="feature.name" />
      </div>
      <!--  end icon-->

      <!--  name-->
      <h4 class="text-center text-lg font-medium desktop:text-left desktop:font-semibold">
        {{ feature.name }}
      </h4>
      <!--  end name-->

      <!--  description-->
      <p class="text-muted text-center desktop:text-left">
        {{ feature.description }}
      </p>
      <!--  end description-->
    </div>
  `,
})
export class FeatureCardComponent {
  @Input() feature!: Feature;
}
