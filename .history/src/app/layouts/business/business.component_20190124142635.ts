import { Component, OnInit } from '@angular/core';
import {MenuItems} from '../../shared/menu-items/menu-items';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(public menuItems: MenuItems) { }

  ngOnInit() {
  }
}
