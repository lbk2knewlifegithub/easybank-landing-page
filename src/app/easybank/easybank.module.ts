import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ArticlePreviewComponent,
  ArticlesPreviewListComponent,
  FeatureCardListComponent,
  FeaturePreviewComponent,
  IntroComponent
} from './components';
import { EasybankPageComponent } from './containers';
import { EasybankRoutingModule } from './easybank-routing.module';

export const CONTAINERS = [EasybankPageComponent];

export const COMPONENTS = [
  IntroComponent,
  ArticlePreviewComponent,
  ArticlesPreviewListComponent,
  FeaturePreviewComponent,
  FeatureCardListComponent,
];

@NgModule({
  imports: [CommonModule, EasybankRoutingModule],
  declarations: [CONTAINERS, COMPONENTS],
})
export class EasybankModule {}
