import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  //selectedCountry = 0;
  //selectedState = 0;

  usermaster: Usermaster[] = [];
  submitType = 'Save';
  
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

  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id);
    });
  }

  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.getCity().filter((item) => {
      return item.state_id === Number(state_id);
    });
  }

  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }

  getStates() {
    return [
      { id: 1, country_id: 1, name: 'Andhra Pradesh' },
      { id: 2, country_id: 1, name: 'Madhya Pradesh' },
      { id: 3, country_id: 2, name: 'San Francisco' },
      { id: 4, country_id: 2, name: 'Los Angeles' },
      { id: 5, country_id: 3, name: 'New South Wales' },
      { id: 6, country_id: 3, name: 'Victoria' },
    ];
  }

  getCity() {
    return [
      { id: 1, state_id: 1, name: 'Guntur' },
      { id: 2, state_id: 1, name: 'Vijayawada' },
      { id: 3, state_id: 1, name: 'Nellore' },
      { id: 4, state_id: 1, name: 'Kadapa' },
      { id: 5, state_id: 2, name: 'Warangal' },
      { id: 6, state_id: 2, name: 'Hyderabad' },
      { id: 7, state_id: 2, name: 'Karimnagar' },
      { id: 8, state_id: 2, name: 'Kadapa' },
      { id: 9, state_id: 3, name: 'SOMA' },
      { id: 10, state_id: 3, name: 'Richmond' },
      { id: 11, state_id: 3, name: 'Sunset' },
      { id: 12, state_id: 4, name: 'Burbank' },
      { id: 13, state_id: 4, name: 'Hollywood' },
      { id: 14, state_id: 5, name: 'Sunset' },
      { id: 15, state_id: 5, name: 'Burbank' },
      { id: 16, state_id: 5, name: 'Hollywood' },
      { id: 17, state_id: 6, name: 'Benalla' },
      { id: 18, state_id: 6, name: 'Melbourne' },
    ];
  }
}
