import { Component } from '@angular/core';

@Component({
  selector: 'lbk-socials',
  template: `
    <!--    socials-->
    <ul class="flex gap-6 text-3xl text-white">
      <!--      facebook-->
      <li>
        <a routerLink="/" class="link">
          <span class="fab fa-facebook-square"></span>
        </a>
      </li>
      <!--      end facebook-->

      <!--      youtube-->
      <li>
        <a routerLink="/" class="link">
          <span class="fab fa-youtube"></span>
        </a>
      </li>
      <!--      end youtube-->

      <!--      twitter-->
      <li>
        <a routerLink="/" class="link">
          <span class="fab fa-twitter"></span>
        </a>
      </li>
      <!--      end twitter-->

      <!--      pinterest-->
      <li>
        <a routerLink="/" class="link">
          <span class="fab fa-pinterest"></span>
        </a>
      </li>
      <!--      end pinterest-->

      <!--      instagram-->
      <li>
        <a routerLink="/" class="link">
          <span class="fab fa-instagram"> </span>
        </a>
      </li>
      <!--      end instagram-->
    </ul>
    <!--    end socials-->
  `,
})
export class SocialsComponent {}
