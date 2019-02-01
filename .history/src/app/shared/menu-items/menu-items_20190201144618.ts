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
const BUSINESSMENUITEMS = [
  {
    label: 'Business Utility',
    main: [
      {
        state: 'status',
        main_state: 'business',
        name: 'Status',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'priority',
        main_state: 'business',
        name: 'Priority',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'taskcategory',
        main_state: 'business',
        name: 'Task Category',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'taskcategorytype',
        main_state: 'business',
        name: 'Task Category Type',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      },
      {
        state: 'taskcategorydescription',
        main_state: 'business',
        name: 'Task Category Description',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }
    ]
  }
];

const ADMINMENUITEMS = [
  {
  
    main: [
      {
        state: 'deshbord',
        main_state: 'admin',
        name: 'Deshbord',
        type: 'link',
        icon: 'ti-home'
      }]
    },
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
      }, {
        state: 'country',
        main_state: 'admin',
        name: 'Country',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }, {
        state: 'state',
        main_state: 'admin',
        name: 'State',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }, {
        state: 'city',
        main_state: 'admin',
        name: 'City',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }, {
        state: 'area',
        main_state: 'admin',
        name: 'Area',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }
    ]
  }, {
    label: 'Company Utility',
    main: [
      {
        state: 'pendingcompany',
        main_state: 'admin',
        name: 'Pending',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }, {
        state: 'approvedcompany',
        main_state: 'admin',
        name: 'Approved',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }, {
        state: 'rejectedcompany',
        main_state: 'admin',
        name: 'Rejected',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }
    ]
  }, {
    label: 'Customer Utility',
    main: [
      {
        state: 'customerdetails',
        main_state: 'admin',
        name: 'Customer Details',
        type: 'link',
        icon: 'icon-people'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    if (localStorage.getItem('isAdmin') === 'true') {
      return ADMINMENUITEMS;
    } else {
      return BUSINESSMENUITEMS;
    }
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
