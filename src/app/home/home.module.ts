import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ArticlePreviewComponent,
  ArticlesPreviewListComponent,
  FeatureCardComponent,
  FeatureCardListComponent,
  IntroComponent
} from './components';
import { HomePageComponent } from './containers';
import { HomeRoutingModule } from './home-routing.module';

export const CONTAINERS = [HomePageComponent];

export const COMPONENTS = [
  IntroComponent,
  ArticlePreviewComponent,
  ArticlesPreviewListComponent,
  FeatureCardComponent,
  FeatureCardListComponent,
];
@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [CONTAINERS, COMPONENTS],
})
export class HomeModule {}
