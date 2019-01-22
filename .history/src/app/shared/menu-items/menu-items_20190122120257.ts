import {Injectable} from '@angular/core';

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

    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'widget',
        name: 'Widget',
        type: 'link',
        icon: 'ti-view-grid',
        badge: [
          {
            type: 'danger',
            value: '100+'
          }
        ]
      }
    ],
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'basic',
        name: 'Basic Components',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'alert',
            name: 'Alert'
          },
          {
            state: 'button',
            name: 'Button'
          },
          {
            state: 'typography',
            name: 'Typography'
          }
        ]
      },
      {
        state: 'notifications',
        main_state: 'advance',
        name: 'Notifications',
        type: 'link',
        icon: 'ti-crown'
      }
    ]
  },
  {
    label: 'Forms',
    main: [
      {
        state: 'basic-elements',
        main_state: 'forms',
        name: 'Form Components',
        type: 'link',
        icon: 'ti-layers'
      }
    ]
  },
  {
    label: 'Tables & Chart',
    main: [
      {
        state: 'basic-bootstrap',
        main_state: 'bootstrap-table',
        name: 'Basic Table',
        type: 'link',
        icon: 'ti-receipt'
      },
      {
        state: 'google',
        main_state: 'charts',
        name: 'Charts',
        type: 'link',
        icon: 'ti-bar-chart-alt'
      },
      {
        state: 'landing',
        external: 'http://html.codedthemes.com/mash-able/dark/landingpage/index.html',
        name: 'Landing Page',
        type: 'external',
        icon: 'ti-mobile',
        target: true
      }
    ]
  },
  {
    label: 'Pages',
    main: [
      {
        state: 'login',
        main_state: 'auth',
        short_label: 'L',
        name: 'Login',
        type: 'link',
        icon: 'ti-id-badge',
        target: true
      },
      {
        state: 'registration',
        main_state: 'auth',
        short_label: 'R',
        name: 'Registration',
        type: 'link',
        icon: 'ti-id-badge',
        target: true
      },
      {
        state: 'landingpage',
        main_state: 'landing',
        short_label: 'R',
        name: 'Landing Page',
        type: 'link',
        icon: 'ti-id-badge',
        target: true
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      }, {
        state: 'simple-page',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },
      {
          state: 'categorytype',
          name: 'Category Type',
          type: 'link',
          icon: 'ti-layout-sidebar-left'
      }
    ]
  }, {
    label: 'Support',
    main: [
      {
        state: 'documentation',
        name: 'Documentation',
        external: 'http://html.codedthemes.com/mash-able/doc/',
        type: 'external',
        icon: 'ti-file',
        target: true
      }
    ]
   }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
