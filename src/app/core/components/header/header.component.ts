import { Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  template: `
    <header class="relative shadow-sm bg-white lg:z-50 lg:fixed lg:w-full " >
      <nav class="container py-6 flex items-center justify-between lg:py-4 ">
        <!--    logo-->
        <lbk-logo></lbk-logo>
        <!--    end logo-->

        <!--    links-->
        <lbk-links-header class="hidden lg:block"></lbk-links-header>
        <!--    end links-->


        <!-- menu -->
        <lbk-menu class="lg:hidden" [(active)]="openModal"></lbk-menu>
        <!-- end menu -->

        <!--    request invite-->
        <div class="hidden lg:block">
          <a class="btn btn-primary" routerLink="/">Request Invite</a>
        </div>
        <!--    end request invite-->
      </nav>
    </header>

    <!-- modal links mobile and tablet -->
    <lbk-modal-links [(open)]="openModal"></lbk-modal-links>
    <!-- end modal links mobile and tablet -->
  `,
  animations: [],
})
export class HeaderComponent {
  openModal = false;
}
