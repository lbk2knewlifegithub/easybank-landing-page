import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'lbk-article-preview-list',
  template: `
    <div class="container mt-40 lg:mt-48">
      <h1 class="text-center font-medium text-3xl lg:text-4xl lg:text-left">
        Latest Articles
      </h1>

      <div class="mt-10 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        <ng-container *ngFor="let article of articles">
          <lbk-article-preview [article]="article"></lbk-article-preview>
        </ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesPreviewListComponent {
  @Input() articles!: Article[];
}
