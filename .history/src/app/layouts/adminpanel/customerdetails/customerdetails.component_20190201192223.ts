import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerdetailsComponent implements OnInit {

  customer: Customer[] = [];
  tempFilter = [];
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public searchString: string;

  constructor(public apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.customer;
    this.bindAllCustomer();
  }

  ngOnInit() {
  }

  bindAllCustomer() {
    this.apiService
      .getService('Customers')
      .subscribe((data: Customer[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  isActiveCustomer(customerId: number): void {
    debugger;
    this.selectedRow = customerId;
    this.apiService.selectedModel = new Customer();
    const tempCustomer = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    if (tempCustomer[0].IsActive) {
      tempCustomer[0].IsActive = false;
    } else {
      tempCustomer[0].IsActive = true;
    }
    this.apiService
      .updateService(tempCustomer[0], tempCustomer[0].ID, 'Customers')
      .subscribe(
        result => {
          this.bindAllCustomer();
        },
        err => {
          console.log(err);
        }
      );
  }
}
