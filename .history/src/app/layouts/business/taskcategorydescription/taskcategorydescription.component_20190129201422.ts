import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TaskCategory } from '../model/taskcategory';
import { TaskCategoryType } from '../model/Taskcategorytype';
import { TaskCategoryDescription } from '../model/Taskcategorydescription';
import { Company } from '../model/company';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-taskcategorydescription',
  templateUrl: './taskcategorydescription.component.html',
  styleUrls: ['./taskcategorydescription.component.scss']
})
export class TaskcategorydescriptionComponent implements OnInit {
  company: Company[] = [];
  taskcategory: TaskCategory[] = [];
  taskcategorytype: TaskCategoryType[] = [];
  taskcategorydescription: TaskCategoryDescription[] = [];
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

  constructor(
    private apiService: APIService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.apiService.setBaseUrl(true);
    this.apiService.selectedModel = this.taskcategorydescription;
    this.bindAllTaskCategoryDescription();
    this.bindActiveCompany();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {
    if (this.submitType === 'Save') {
      this.notificationService.notify(
        'Success',
        'Record saved successfully.',
        'success'
      );
    } else {
      this.notificationService.notify(
        'Success',
        'Record updated successfully.',
        'success'
      );
    }
  }

  onSubmit(taskcategorydescriptionForm: NgForm) {
    if (taskcategorydescriptionForm.value.ID === 0) {
      this.apiService
        .addService(
          taskcategorydescriptionForm.value,
          'TaskCategoryDescription'
        )
        .subscribe(
          result => {
            this.bindAllTaskCategoryDescription();
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
          taskcategorydescriptionForm.value,
          taskcategorydescriptionForm.value.ID,
          'TaskCategoryDescription'
        )
        .subscribe(
          result => {
            this.bindAllTaskCategoryDescription();
            this.showSuccess();
            this.resetForm();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(taskcategorydescriptionForm?: NgForm) {
    this.apiService.selectedModel = {
      CategoryDescriptionName: '',
      ID: 0,
      CompanyID: null,
      CategoryTypeID: null,
      IsActive: false,
      CategoryID: null
    };
    this.submitType = 'Save';
    this.taskcategory = null;
    this.taskcategorytype = null;
  }

  editTaskCategoryDescription(taskcategorydescriptionId: number): void {
    this.selectedRow = taskcategorydescriptionId;
    this.apiService.selectedModel = new TaskCategoryDescription();
    const tempTaskcategorydescription = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.bindActiveCompanyCategory(tempTaskcategorydescription[0].CompanyID);
    this.bindActiveCompanyCategoryType(
      tempTaskcategorydescription[0].CategoryID
    );
    this.apiService.selectedModel = Object.assign(
      {},
      tempTaskcategorydescription[0]
    );
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return (
        d.CategoryDescriptionName.toLowerCase().indexOf(val) !== -1 || !val
      );
    });
    this.data = temp;
  }

  bindAllTaskCategoryDescription() {
    this.apiService
      .getService('GetTaskCategoryDescription')
      .subscribe((data: TaskCategoryDescription[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  bindActiveCompany() {
    this.apiService
      .getModelListbyActive('Companies', 'GetActiveBusinessCompany')
      .subscribe((data: Company[]) => {
        const filterData = data;
        this.company = filterData;
      });
  }

  bindActiveCompanyCategory(companyId: number) {
    this.apiService
      .getModelListById('TaskCategory', companyId, 'GetTaskCategoryByCompanyId')
      .subscribe((categorydata: TaskCategory[]) => {
        const filterData = categorydata;
        this.taskcategory = filterData;
        // this.taskcategorytype = null;
      });
  }

  bindActiveCompanyCategoryType(categoryId: number) {
    if (categoryId === null) {
      this.taskcategorytype = null;
      this.apiService.selectedModel.CategoryTypeID = null;
      this.resetForm();
    } else {
      this.apiService
        .getModelListById('TaskCategoryType', categoryId, 'GetTaskCategoryTypeByCategoryId')
        .subscribe((categorytypedata: TaskCategoryType[]) => {
          const filterData = categorytypedata;
          this.taskcategorytype = filterData;
        });
    }
  }
}
