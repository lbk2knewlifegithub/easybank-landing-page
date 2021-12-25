import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'lbk-article-preview',
  template: `
    <div class="">
      <!-- image -->
      <div class="relative aspect-w-16 aspect-h-9 rounded  overflow-hidden">
        <img
          class="absolute inset-0 w-full h-full"
          [src]="article.src"
          [alt]="article.name"
        />
      </div>
      <!-- end image -->

      <div class="grid gap-2 py-6 pl-6 pr-4 bg-white">
        <!--    author-->
        <p class="text-muted text-xs">By {{ article.author }}</p>
        <!--    end author-->

        <!--    name-->
        <h6 class="text-lg leading-6 ">
          {{ article.name }}
        </h6>
        <!--    end name-->

        <!--    description-->
        <p class="text-xs text-muted">{{ article.description }}</p>
        <!--    end description-->
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePreviewComponent {
  @Input('article') article!: Article;
}
