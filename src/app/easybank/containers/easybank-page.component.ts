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
    <!-- <lbk-feature-card-list
      *ngIf="features$ | async as features"
      [features]="features"
    ></lbk-feature-card-list> -->
    <!-- end features -->

    <!--articles-->
    <!-- <lbk-article-preview-list
      *ngIf="articles$ | async as articles"
      [articles]="articles"
    ></lbk-article-preview-list> -->
    <!--end articles-->
  `,
})
export class EasybankPageComponent {
  features$!: Observable<Feature[]>;
  articles$!: Observable<Article[]>;

  constructor() {
    this.features$ = of(fromData.features);
    this.articles$ = of(fromData.articles);
  }
}
