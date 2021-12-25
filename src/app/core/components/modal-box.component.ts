import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-modal-box',
  template: `
    <!--modal-->
    <header class="w-full">
      <nav class="container bg-white py-6 flex items-center justify-between">
        <!--    logo-->
        <div>
          <img src="/assets/images/logo.svg" alt="Logo" />
        </div>
        <!--    end logo-->

        <!--    close-->
        <div (click)="true" class="cursor-pointer">
          <img src="/assets/images/icon-close.svg" alt="Close" />
        </div>
        <!--    end close-->
      </nav>

      <!--  links-->
      <main class="container  mt-8">
        <ul
          class="bg-white grid gap-4 place-content-center py-6 text-center font-medium rounded text-lg text-muted"
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </main>
      <!--  end links-->
    </header>
    <!--end modal-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalBoxComponent {

}
