import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usermaster } from '../model/usermaster';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  selectedCountry = 0;
  selectedState = 0;

  states = [];
  cities = [];

  constructor() {
   const ownerId = localStorage.getItem('OwnerId');
    //localStorage.clear();
    //localStorage.removeItem(key);
   }

  ngOnInit() {
  }
  onSubmit(ownerForm: NgForm) {
  }

  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }
}
