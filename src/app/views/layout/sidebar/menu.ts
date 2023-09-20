import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
  },
  {
    label: 'Deadlines',
    icon: 'calendar',
    link: '/deadlines',
  },
  {
    label: 'Summary',
    icon: 'home',
    link: '/summary',
  },
];
