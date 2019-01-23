import { Component, OnInit } from '@angular/core';
import {MenuItems} from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class AdminpanelComponent implements OnInit {

  constructor(public menuItems: MenuItems) { }

  ngOnInit() {
  }
}
