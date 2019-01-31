import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categorydescription } from '../model/categorydescription';
import { Categorytype } from '../model/categorytype';
import { Category } from '../model/category';

@Component({
  selector: 'app-categorydescription',
  templateUrl: './categorydescription.component.html',
  styleUrls: ['./categorydescription.component.scss']
})
export class CategorydescriptionComponent implements OnInit {

  categorydescription: Categorydescription[] = [];
  categorytype: Categorytype[] = [];
  category: Category[] = [];
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
     this.apiService.selectedModel = Categorydescription;
     this.bindAllCategorydescription();
     //this.bindActiveCategoryType();
     this.bindActiveCategory();
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

  onSubmit(categorydescriptionForm: NgForm) {
    if (categorydescriptionForm.value.ID === 0) {
      this.apiService.addService(categorydescriptionForm.value, 'CategoryDescriptions').subscribe(
        result => {
          this.bindAllCategorydescription();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categorydescriptionForm.value, categorydescriptionForm.value.ID, 'CategoryDescriptions').subscribe(
        result => {
          this.bindAllCategorydescription();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categorydescriptionForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      CategoryTypeID: null,
      IsActive: false,
      CategoryID: null
    };
    this.submitType = 'Save';
    this.categorytype = null;
  }

  editCategorydescription(categorydescriptionId: number): void {
    this.selectedRow = categorydescriptionId;
    this.apiService.selectedModel = new Categorydescription();
    const tempCategoryType  =  Object.assign({}, this.data.filter(t => t.ID === this.selectedRow));
    //this.bindActiveCategoryType(tempCategoryType[0].CategoryID);
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = 'Update';
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllCategorydescription() {
    this.apiService.getService('CategoryDescriptions').subscribe((data: Categorydescription[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }

  bindActiveCategoryType(categoryId: number) {
    this.apiService.selectedModel.CategoryTypeID = null;
    if (categoryId === null) {
      this.categorytype = null;
    } else {
      this.apiService
      .getModelListById('CategoryType', categoryId, 'GetCategoryTypeByCategoryId')
      .subscribe((categorytypedata: Categorytype[]) => {
        const filterData = categorytypedata;
        this.categorytype = filterData;
      });
  }
  }

  bindActiveCategory() {
    this.apiService.getModelListbyActive('Categories', 'GetActiveCategories').subscribe((data: Category[]) => {
      this.category = data;
    });
  }
}
