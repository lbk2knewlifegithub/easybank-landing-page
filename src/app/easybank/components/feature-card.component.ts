import { Component, Input } from '@angular/core';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'lbk-feature-card',
  template: `
    <div
      class="grid gap-6 place-items-center mx-auto max-w-md lg:place-items-start lg:max-w-full"
    >
      <!--  icon-->
      <div>
        <img [src]="feature.src" [alt]="feature.name" />
      </div>
      <!--  end icon-->

      <!--  name-->
      <h4 class="text-center text-lg font-medium lg:text-left lg:font-semibold">
        {{ feature.name }}
      </h4>
      <!--  end name-->

      <!--  description-->
      <p class="text-muted text-center lg:text-left">
        {{ feature.description }}
      </p>
      <!--  end description-->
    </div>
  `,
})
export class FeaturePreviewComponent {
  @Input() feature!: Feature;
}
