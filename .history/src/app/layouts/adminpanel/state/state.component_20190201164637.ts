import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { StateMaster } from '../model/statemaster';
import { CountryMaster } from '../model/countrymaster';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  statemaster: StateMaster[] = [];
  countrymaster: CountryMaster[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public searchString: string;

  constructor(public apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.apiService.selectedModel = this.statemaster;
    this.bindAllStateMaster();
    this.bindActiveCountryMaster();
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

  onSubmit(statemasterForm: NgForm) {
    if (statemasterForm.value.ID === 0) {
      this.apiService
        .addService(statemasterForm.value, 'StateMasters')
        .subscribe(
          result => {
            this.bindAllStateMaster();
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
          statemasterForm.value,
          statemasterForm.value.ID,
          'StateMasters'
        )
        .subscribe(
          result => {
            this.bindAllStateMaster();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(statemasterForm?: NgForm) {
    this.apiService.selectedModel = {
      StateName: '',
      ID: 0,
      CountryID: null,
      IsActive: false,
      CountryName: ''
    };
    this.submitType = 'Save';
  }

  editStateMaster(stateId: number): void {
    this.selectedRow = stateId;
    this.apiService.selectedModel = new StateMaster();
    const tempStateMaster = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempStateMaster[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.StateName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllStateMaster() {
    this.apiService
      .getService('StateMasters')
      .subscribe((data: StateMaster[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  bindActiveCountryMaster() {
    this.apiService
      .getModelListbyActive('CountryMasters', 'GetActiveCountry')
      .subscribe((data: CountryMaster[]) => {
        this.countrymaster = data;
      });
  }
}
