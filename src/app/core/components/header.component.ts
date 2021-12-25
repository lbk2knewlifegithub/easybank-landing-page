import { Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  template: `
    <header class="bg-white shadow-sm">
      <nav class="container py-6 tablet:py-0 flex items-center justify-between desktop:py-0">
        <!--    logo-->
        <a href="#">
          <img src="/assets/images/logo.svg" alt="Logo" />
        </a>
        <!--    end logo-->

        <!--    links-->
        <ul
          class="items-center py-6 text-sm gap-6 text-muted tracking-wide hidden tablet:flex desktop:text-base desktop:gap-10 desktop:py-8"
        >
          <li>
            <a
              class="hover:text-primary hover:border-b-4 hover:border-primary pb-6"
              href="#"
              >Home</a
            >
          </li>
          <li>
            <a
              class="hover:text-primary hover:border-b-4 hover:border-primary pb-6"
              href="#"
              >About</a
            >
          </li>
          <li>
            <a
              class="hover:text-primary hover:border-b-4 hover:border-primary pb-6"
              href="#"
              >Contact</a
            >
          </li>
          <li>
            <a
              class="hover:text-primary hover:border-b-4 hover:border-primary pb-6"
              href="#"
              >Blog</a
            >
          </li>
          <li>
            <a
              class="hover:text-primary hover:border-b-4 hover:border-primary pb-6"
              href="#"
              >Careers</a
            >
          </li>
        </ul>
        <!--    end links-->

        <!--    request invite-->
        <div class="hidden tablet:block">
          <a class="btn btn-primary" href="#">Request Invite</a>
        </div>
        <!--    end request invite-->

        <!--    hamburger-->
        <div (click)="isActive = true" class="cursor-pointer tablet:hidden">
          <img src="/assets/images/icon-hamburger.svg" alt="Hamburger" />
        </div>
        <!--    end hamburger-->
      </nav>
    </header>
  `,
})
export class HeaderComponent {
  isActive = false;
}
