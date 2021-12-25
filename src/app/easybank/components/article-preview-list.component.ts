import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'lbk-article-preview-list',
  template: `
    <div class="container mt-28 lg:mt-32">
      <h2 class="text-center text-3xl lg:text-4xl lg:text-left">
        Latest Articles
      </h2>

      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:mt-12">
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
