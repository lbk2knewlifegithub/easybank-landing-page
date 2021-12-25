import { Article, Feature } from './models';

export const features: Feature[] = [
  {
    src: '/assets/images/icon-online.svg',
    name: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world',
  },
  {
    src: '/assets/images/icon-budgeting.svg',
    name: 'Simple Budgeting',
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits",
  },
  {
    src: '/assets/images/icon-onboarding.svg',
    name: 'Fast Onboarding',
    description:
      "We don't do branches. Open your account in minutes only and start taking control of your finances right away.",
  },
  {
    src: '/assets/images/icon-api.svg',
    name: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];

export const articles: Article[] = [
  {
    src: '/assets/images/image-currency.jpg',
    author: 'Claire Robinson',
    name: 'Receive money in any currency with no fees',
    description:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single',
  },
  {
    src: '/assets/images/image-restaurant.jpg',
    author: 'Wilson Hutton',
    name: 'Treat yourself without worrying about money',
    description:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    src: '/assets/images/image-plane.jpg',
    author: 'Wilson Hutton',
    name: 'Take your Easybank card wherever you go',
    description:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you',
  },
  {
    src: '/assets/images/image-confetti.jpg',
    author: 'Claire Robinson',
    name: 'Our invite-only Beta accounts are now live',
    description:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta.  It’s easy to request an invite through the site ..',
  },
];
