import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { fromFooter, fromHeader, LogoComponent } from './components';
import { AppComponent } from './containers';

export const COMPONENTS = [
  fromHeader.COMPONENTS,
  fromFooter.COMPONENTS,
  LogoComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AppComponent, COMPONENTS],
})
export class CoreModule {}
