import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lbk-socials',
  template: `
              <!--    socials-->
              <ul class="flex gap-4 text-xl">
                <!--      facebook-->
                <li>
                  <a class="hover:text-primary" href="#">
                    <span class="fab fa-facebook-square"></span>
                  </a>
                </li>
                <!--      end facebook-->

                <!--      youtube-->
                <li>
                  <a class="hover:text-primary" href="#">
                    <span class="fab fa-youtube"></span>
                  </a>
                </li>
                <!--      end youtube-->

                <!--      twitter-->
                <li>
                  <a class="hover:text-primary" href="#">
                    <span class="fab fa-twitter"></span>
                  </a>
                </li>
                <!--      end twitter-->

                <!--      pinterest-->
                <li>
                  <a class="hover:text-primary" href="#">
                    <span class="fab fa-pinterest"></span>
                  </a>
                </li>
                <!--      end pinterest-->

                <!--      instagram-->
                <li>
                  <a class="hover:text-primary" href="#">
                    <span class="fab fa-instagram"> </span>
                  </a>
                </li>
                <!--      end instagram-->
              </ul>
              <!--    end socials-->

  `,
})
export class SocialsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
