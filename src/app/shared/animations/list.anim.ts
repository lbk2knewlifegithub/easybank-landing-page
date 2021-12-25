import {
  animate, animateChild, group, query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CustomAnimation, DefaultCustomAnimation } from '../models';

export function listAnimation(option?: CustomAnimation) {
  option = { ...DefaultCustomAnimation, ...option };
  const { name, delayEnter, delayLeave, duration, timing } = option;
  return trigger('listAnimation', [
    transition(
      ':enter',
      group([
        animateChild(),
        query(
          '*',
          [
            style({ opacity: 0, transform: 'translateX(-100%)' }),
            stagger(100, [
              animate(
                '{{duration}}ms {{delayEnter}}ms {{timing}}',
                style({ opacity: 1, transform: 'translateX(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
      {
        params: { delayEnter, timing, duration },
      }
    ),

    transition(
      ':leave',
      [
        // each time the binding value changes
        query(
          '*',
          group([
            animateChild(),
            stagger(100, [
              animate(
                '{{duration}}ms {{delayEnter}}ms {{timing}}',
                style({ opacity: 0, transform: 'translateX(-100%)' })
              ),
            ]),
          ]),
          {
            optional: true,
          }
        ),
      ],
      {
        params: { delayLeave, timing, duration },
      }
    ),
  ]);
}
