import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CountryMaster } from '../model/countrymaster';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countrymaster: CountryMaster[] = [];
  submitType = 'Save';
  selectedRow: number;
  tempFilter = [];

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.apiService.selectedModel = this.countrymaster;
    this.bindAllCountryMaster();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {}

  onSubmit(countrymasterForm: NgForm) {
    if (countrymasterForm.value.ID === 0) {
      this.apiService
        .addService(countrymasterForm.value, 'CountryMasters')
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllCountryMaster();
            this.showSuccess();
          },
          err => {
            console.log(err);
          }
        );
    } else {
      this.apiService
        .updateService(
          countrymasterForm.value,
          countrymasterForm.value.ID,
          'CountryMasters'
        )
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllCountryMaster();
            this.showSuccess();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(countrymasterForm?: NgForm) {
    this.apiService.selectedModel = {
      CountryName: '',
      ID: 0,
      IsActive: false
    };
    this.submitType = 'Save';
  }

  editCountryMaster(countryId: number): void {
    this.selectedRow = countryId;
    this.apiService.selectedModel = new CountryMaster();
    const tempCountryMaster = Object.assign({}, this.data.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCountryMaster[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CountryName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllCountryMaster() {
    this.apiService
      .getService('CountryMasters')
      .subscribe((data: CountryMaster[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }
}
