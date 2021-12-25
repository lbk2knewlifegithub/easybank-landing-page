import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromData from '../data';
import { Article, Feature } from '../models';

@Component({
  selector: 'lbk-easybank-page',
  template: `
    <!--intro-->
    <lbk-intro></lbk-intro>
    <!--end intro-->

    <!-- features -->
    <lbk-feature-card-list
      class="block mt-32 md:mt-32 lg:mt-[10.8rem] z-[-1]"
      *ngIf="features$ | async as features"
      [features]="features"
    ></lbk-feature-card-list>
    <!-- end features -->

    <!--articles-->
    <lbk-article-preview-list
      *ngIf="articles$ | async as articles"
      [articles]="articles"
    ></lbk-article-preview-list>
    <!--end articles-->
  `,
})
export class EasybankPageComponent {
  features$!: Observable<Feature[]>;
  articles$!: Observable<Article[]>;

  constructor() {
    this.features$ = of(fromData.features);
    this.articles$ = of(fromData.articles);

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }
}
