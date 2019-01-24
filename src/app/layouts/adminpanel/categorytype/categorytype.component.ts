import 'd3';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../model/category';
import { Categorytype } from './../model/categorytype';

@Component({
  selector: 'app-categorytype',
  templateUrl: './categorytype.component.html',
  styleUrls: ['./categorytype.component.scss']
})
export class CategorytypeComponent implements OnInit {
  categorytype: Categorytype[] = [];
  category: Category[] = [];
  tempFilter = [];
  submitType = 'Save';
  selectedRow: number;
  public searchString: string;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService: APIService, private router: Router, private notificationService: NotificationService) {
    this.apiService.selectedModel = Categorytype;
    this.bindAllCategorytype();
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

  onSubmit(categorytypeForm: NgForm) {
    if (categorytypeForm.value.ID === 0) {
      this.apiService.addService(categorytypeForm.value, 'CategoryTypes').subscribe(
        result => {
          this.bindAllCategorytype();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categorytypeForm.value, categorytypeForm.value.ID, 'CategoryTypes').subscribe(
        result => {
          this.bindAllCategorytype();
          this.showSuccess();
          this.resetForm();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categorytypeForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      CategoryID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCategorytype(categorytypeId: number): void {
    this.selectedRow = categorytypeId;
    this.apiService.selectedModel = new Categorytype();
    const tempCategoryType =  Object.assign({}, this.data.filter(t => t.ID === this.selectedRow));
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

  bindAllCategorytype() {
    this.apiService.getService('CategoryTypes').subscribe((data: Categorytype[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }

  bindActiveCategory() {
    this.apiService.getModelListbyActive('Categories', 'GetActiveCategories').subscribe((data: Category[]) => {
      const filterData = data;
      this.category = filterData;
    });
  }
}
