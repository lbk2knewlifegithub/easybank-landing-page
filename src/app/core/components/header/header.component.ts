import { Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  template: `
    <header class="shadow-sm ">
      <nav class="container py-6 flex items-center justify-between z-50">
        <!--    logo-->
        <lbk-logo></lbk-logo>
        <!--    end logo-->

        <!--    links-->
        <lbk-links-header class="hidden lg:block"></lbk-links-header>
        <!--    end links-->

        <!--    request invite-->
        <div class="hidden tablet:block">
          <a class="btn btn-primary" href="#">Request Invite</a>
        </div>
        <!--    end request invite-->

        <!-- menu -->
        <lbk-menu [(active)]="openModal"></lbk-menu>
        <!-- end menu -->
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
