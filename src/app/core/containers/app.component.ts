import { Component } from '@angular/core';

@Component({
  selector: 'lbk-root',
  template: `
    <lbk-header></lbk-header>

    <router-outlet></router-outlet>

    <!--footer-->
    <!-- <lbk-footer></lbk-footer> -->
    <!--end footer-->
  `,
})
export class AppComponent {}
