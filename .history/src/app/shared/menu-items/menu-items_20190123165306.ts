import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Admin Utility',
    main: [
      {
        state: 'category',
        main_state: 'admin',
        name: 'Category',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'categorytype',
        main_state: 'admin',
        name: 'Category Type',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'categorydescription',
        main_state: 'admin',
        name: 'Category Description',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'city',
        main_state: 'admin',
        name: 'City',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'state',
        main_state: 'admin',
        name: 'State',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'country',
        main_state: 'admin',
        name: 'Country',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    if
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
