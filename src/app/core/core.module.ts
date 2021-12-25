import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FooterComponent,
  HeaderComponent,
  ModalBoxComponent
} from './components';
import { AppComponent } from './containers';

export const COMPONENTS = [HeaderComponent, FooterComponent, ModalBoxComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [COMPONENTS],
  declarations: [AppComponent, COMPONENTS],
})
export class CoreModule {}
