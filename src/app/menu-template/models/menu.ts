import { MenuItem } from './menuItem';

export interface Menu {
  id: string;
  location: string;
  menuItems: MenuItem[];
}
