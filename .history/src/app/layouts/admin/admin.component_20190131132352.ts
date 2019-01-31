import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  state,
  style,
  transition,
  animate,
  trigger,
  AUTO_STYLE
} from '@angular/animations';
import 'rxjs/add/operator/filter';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { APIService } from '../../shared/services/api.service';
import { Company } from '../business/model/company';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('mobileMenuTop', [
      state(
        'no-block, void',
        style({
          overflow: 'hidden',
          height: '0px'
        })
      ),
      state(
        'yes-block',
        style({
          height: AUTO_STYLE
        })
      ),
      transition('no-block <=> yes-block', [animate('400ms ease-in-out')])
    ])
  ]
})
export class AdminComponent implements OnInit {
  deviceType = 'desktop';
  verticalNavType = 'expanded';
  verticalEffect = 'shrink';
  chatToggle = 'out';
  chatInnerToggle = 'off';
  innerHeight: string;
  isScrolled = false;
  isCollapsedMobile = 'no-block';
  toggleOn = true;
  windowWidth: number;
  @ViewChild('searchFriends') search_friends: ElementRef;
  @ViewChild('toggleButton') toggle_button: ElementRef;
  @ViewChild('sideMenu') side_menu: ElementRef;
  company: Company[] = [];
  private ValueId : number = 0; 
  private selectedObj : any;

  config: any;

  constructor(public menuItems: MenuItems, private apiService: APIService) {
    const scrollHeight = window.screen.height - 150;
    this.innerHeight = scrollHeight + 'px';
    this.windowWidth = window.innerWidth;
    this.setMenuAttributs(this.windowWidth);
    this.apiService.setBaseUrl(true);
  }

  ngOnInit() {
    document.getElementById('lblUserName').innerHTML = localStorage.getItem('UserName');
    if (localStorage.getItem('IsCompanyAdmin') === 'true') {
      this.apiService
        .getModelListbyActive('BusinessCompanies', 'GetActiveBusinessCompany')
        .subscribe((data: Company[]) => {
          const filterData = data;
          this.company = filterData;
        });
    } else {
      this.apiService
        .getServiceById(
          Number(localStorage.getItem('UserCompanyID')),
          'GetBusinessCompanyById'
        )
        .subscribe((data: Company[]) => {
          const filterData = data;
          this.company = filterData;
        });
    }

    
  }

  private selectedValueObj(id: any) {
    debugger;
  this.ValueId = (id.srcElement || id.target).value;
}

  onClickedOutside(e: Event) {
    if (
      this.windowWidth < 768 &&
      this.toggleOn &&
      this.verticalNavType !== 'offcanvas'
    ) {
      this.toggleOn = true;
      this.verticalNavType = 'offcanvas';
    }
  }

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
    /* menu responsive */
    this.windowWidth = event.target.innerWidth;
    let reSizeFlag = true;
    if (
      this.deviceType === 'tablet' &&
      this.windowWidth >= 768 &&
      this.windowWidth <= 1024
    ) {
      reSizeFlag = false;
    } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }

    if (reSizeFlag) {
      this.setMenuAttributs(this.windowWidth);
    }
  }

  setMenuAttributs(windowWidth) {
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.deviceType = 'tablet';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'push';
    } else if (windowWidth < 768) {
      this.deviceType = 'mobile';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
    } else {
      this.deviceType = 'desktop';
      this.verticalNavType = 'expanded';
      this.verticalEffect = 'shrink';
    }
  }

  toggleOpened() {
    if (this.windowWidth < 768) {
      this.toggleOn =
        this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
      this.verticalNavType =
        this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    } else {
      this.verticalNavType =
        this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    }
  }
  onMobileMenu() {
    this.isCollapsedMobile =
      this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
  }

  onScroll(event) {
    this.isScrolled = false;
  }

  selectedCompanyIDChange(event) {
    debugger;
    //localStorage.setItem('SelectedCompanyID', event.target.);
  }
}
