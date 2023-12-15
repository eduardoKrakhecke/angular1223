import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  state('void', style({ opacity: 0 })),
  transition('void => *', animate('0.5s ease-in-out')),
]);
