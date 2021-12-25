import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'lbk-article-preview-list',
  template: `
    <section class="container mt-40 desktop:mt-48">
      <h1 class="text-center font-medium text-3xl desktop:text-4xl desktop:text-left">
        Latest Articles
      </h1>

      <div class="mt-10 grid gap-14 tablet:grid-cols-2 desktop:grid-cols-4">
        <ng-container *ngFor="let article of articles">
          <lbk-article-preview [article]="article"></lbk-article-preview>
        </ng-container>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesPreviewListComponent {
  @Input() articles!: Article[];
}
