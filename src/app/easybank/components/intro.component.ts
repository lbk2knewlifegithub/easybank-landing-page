import { Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  template: `
    <div
      class="relative mx-auto max-w-[1440px] grid place-items-center  overflow-hidden desktop:max-w-[1600px]  desktop:grid-cols-5 bg-yellow-200/20"
    >
      <div
        class="relative aspect-w-16 aspect-h-12 w-full desktop:order-last desktop:col-span-3 bg-red-500 max-h-[700px]"
      >
        <!-- background desktop -->
        <img
          class="absolute top-0 right-0 hidden desktop:block scale-[180%] h-full object-cover object-center "
          src="/assets/images/bg-intro-desktop.svg"
          alt="Background"
        />
        <!-- end background desktop -->

        <!--    background mobile-->
        <img
          class="absolute inset-0 w-full h-full object-cover desktop:hidden"
          src="/assets/images/bg-intro-mobile.svg"
          alt="Background"
        />
        <!--    end background mobile-->

        <!--    phone-->
        <img
          class="absolute top-[-7rem] h-full w-full object-fill"
          src="/assets/images/image-mockups.png"
          alt="Mockups"
        />
        <!--    end phone-->
      </div>

      <!-- text -->
      <div
        class="grid w-full py-32 bg-yellow-300 place-items-center max-w-xl tablet:place-items-start desktop:px-0 desktop:col-span-2"
      >
        <h1 class="text-center text-4xl tablet:text-left desktop:text-5xl">
          Next generation digital baking
        </h1>
        <p class="mt-6 text-center text-base text-muted  tablet:text-left">
          Take your financial life only. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>

        <div class="mt-14 tablet:mt-10">
          <a class="btn btn-primary" href="#">Request Invite</a>
        </div>
      </div>
      <!-- end text -->
    </div>
  `,
})
export class IntroComponent {}
