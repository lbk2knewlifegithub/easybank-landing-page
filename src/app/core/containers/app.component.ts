import { Component } from '@angular/core';

@Component({
  selector: 'lbk-root',
  template: `
    <!--navbar-->
    <lbk-header></lbk-header>
    <!--end navbar-->

    <router-outlet></router-outlet>

    <!--footer-->
    <lbk-footer></lbk-footer>
    <!--end footer-->
  `,
})
export class AppComponent {}
