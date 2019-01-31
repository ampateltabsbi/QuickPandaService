import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskCategoryType } from '../model/Taskcategorytype';
import { TaskCategory } from '../model/taskcategory';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-taskcategorytype',
  templateUrl: './taskcategorytype.component.html',
  styleUrls: ['./taskcategorytype.component.scss']
})
export class TaskcategorytypeComponent implements OnInit {
  taskcategory: TaskCategory[] = [];
  taskcategorytype: TaskCategoryType[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;
  public searchString: string;
  public data: any;
  public categorydata: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  SelectedCompanyID: number;

  constructor(
    private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.SelectedCompanyID = Number(localStorage.getItem('SelectedCompanyID'));
    this.apiService.setBaseUrl(true);
    this.apiService.selectedModel = this.taskcategorytype;
    this.bindAllTaskCategoryType();
    this.bindActiveCompanyCategory();
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

  onSubmit(taskcategorytypeForm: NgForm) {
    taskcategorytypeForm.value.CompanyID = this.SelectedCompanyID;
    if (taskcategorytypeForm.value.ID === 0) {
      this.apiService
        .addService(taskcategorytypeForm.value, 'TaskCategoryType')
        .subscribe(
          result => {
            this.bindAllTaskCategoryType();
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
          taskcategorytypeForm.value,
          taskcategorytypeForm.value.ID,
          'TaskCategoryType'
        )
        .subscribe(
          result => {
            this.bindAllTaskCategoryType();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(taskcategorytypeForm?: NgForm) {
    this.apiService.selectedModel = {
      CategoryTypeName: '',
      ID: 0,
      CompanyID: 0,
      CategoryID: null,
      IsActive: false
    };
    this.submitType = 'Save';
    this.taskcategory = null;
  }

  editTaskCategoryType(taskcategorytypeId: number): void {
    this.selectedRow = taskcategorytypeId;
    this.apiService.selectedModel = new TaskCategoryType();
    const tempTaskcategorytype = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempTaskcategorytype[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.CategoryTypeName.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllTaskCategoryType() {
    this.apiService.getModelListById('TaskCategoryTypes', this.SelectedCompanyID, 'GetTaskCategoryTypeByCompanyId').
    subscribe((data: TaskCategoryType[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  bindActiveCompanyCategory() {
    this.apiService.getModelListById('TaskCategories', this.SelectedCompanyID, 'GetActiveTaskCategoryByCompanyId')
        .subscribe((categorydata: TaskCategory[]) => {
          const filterData = categorydata;
          this.taskcategory = filterData;
        });
  }
}
