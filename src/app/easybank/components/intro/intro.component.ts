import { Component } from '@angular/core';
import {
  slideInLeftOnEnterAnimation,
  slideInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-intro',
  templateUrl: './intro.component.html',
  animations: [slideInLeftOnEnterAnimation(), slideInRightOnEnterAnimation()],
})
export class IntroComponent {}
