import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskCategory } from '../model/taskcategory';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-taskcategory',
  templateUrl: './taskcategory.component.html',
  styleUrls: ['./taskcategory.component.scss']
})
export class TaskcategoryComponent implements OnInit {
  taskcategory: TaskCategory[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;
  public searchString: string;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  SelectedCompanyID: number;

  constructor(private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.SelectedCompanyID = Number(localStorage.getItem('SelectedCompanyID'));
    this.apiService.setBaseUrl(true);
    this.apiService.selectedModel = this.taskcategory;
    this.bindAllTaskcategory();
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

  onSubmit(taskcategoryForm: NgForm) {
    priorityForm.value.CompanyID = this.SelectedCompanyID;
    if (taskcategoryForm.value.ID === 0) {
      this.apiService.addService(taskcategoryForm.value, 'TaskCategory').subscribe(
        result => {
          this.bindAllTaskcategory();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService
        .updateService(taskcategoryForm.value, taskcategoryForm.value.ID, 'TaskCategory')
        .subscribe(
          result => {
            this.bindAllTaskcategory();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(taskcategoryForm?: NgForm) {
    this.apiService.selectedModel = {
      CategoryName: '',
      ID: 0,
      CompanyID: 0,
      IsActive: false
    };
    this.submitType = 'Save';
  }

  editTaskCategory(taskcategoryId: number): void {
    this.selectedRow = taskcategoryId;
    this.apiService.selectedModel = new TaskCategory();
    const tempTaskcategory = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempTaskcategory[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CategoryName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllTaskcategory() {
    this.apiService.getService('GetTaskCategory').subscribe((data: TaskCategory[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }

  bindActiveCompany() {
    this.apiService.getModelListbyActive('BusinessCompanies', 'GetActiveBusinessCompany').subscribe((data: Company[]) => {
      const filterData = data;
      this.company = filterData;
    });
  }
}
