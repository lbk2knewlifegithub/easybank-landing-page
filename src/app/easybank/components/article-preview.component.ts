import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'lbk-article-preview',
  template: `
    <div class="bg-white shadow-md lg:h-full">
      <!-- image -->
      <div class="relative aspect-video rounded overflow-hidden lg:aspect-[16/12]">
        <img
          class="absolute inset-0 w-full h-full object-cover duration-300 hover:scale-110"
          [src]="article.src"
          [alt]="article.name"
        />
      </div>
      <!-- end image -->

      <div class="grid gap-2 pt-6 pb-10 pl-8 pr-4 bg-white lg:pl-6 lg:pb-8">
        <!--    author-->
        <p class="text-muted text-xs">By {{ article.author }}</p>
        <!--    end author-->

        <!--    name-->
        <a routerLink="/" class="text-lg leading-6 duration-300 hover:text-primary">
          {{ article.name }}
        </a>
        <!--    end name-->

        <!--    description-->
        <p class="text-sm text-muted">{{ article.description }}</p>
        <!--    end description-->
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePreviewComponent {
  @Input() article!: Article;
}
