import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Area } from '../model/Area';
import { CityMaster } from '../model/citymaster';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  area: Area[] = [];
  citymaster: CityMaster[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public searchString: string;

  constructor(private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.apiService.selectedModel = this.area;
    this.bindAllCityMaster();
    this.bindActiveStateMaster();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    if (this.submitType === 'Save') {
      this.notificationService.notify('Success', 'Record saved successfully.', 'success');
    } else {
      this.notificationService.notify('Success', 'Record updated successfully.', 'success');
    }
  }

  onSubmit(citymasterForm: NgForm) {
    if (citymasterForm.value.ID === 0) {
      this.apiService
        .addService(citymasterForm.value, 'Citymasters')
        .subscribe(
          result => {
            this.bindAllCityMaster();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    } else {
      this.apiService
        .updateService(
          citymasterForm.value,
          citymasterForm.value.ID,
          'Citymasters'
        )
        .subscribe(
          result => {
            this.bindAllCityMaster();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(citymasterForm?: NgForm) {
    this.apiService.selectedModel = {
      CityName: '',
      ID: 0,
      StateID: 0,
      IsActive: false,
      StateName: ''
    };
    this.submitType = 'Save';
  }

  editCityMaster(cityId: number): void {
    this.selectedRow = cityId;
    this.apiService.selectedModel = new CityMaster();
    const tempCityMaster = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempCityMaster[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CityName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllArea() {
    this.apiService
      .getService('Citymasters')
      .subscribe((data: CityMaster[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  bindActiveCityMaster() {
    this.apiService
      .getModelListbyActive('StateMasters', 'GetActiveState')
      .subscribe((data: StateMaster[]) => {
        this.statemaster = data;
      });
  }

}
