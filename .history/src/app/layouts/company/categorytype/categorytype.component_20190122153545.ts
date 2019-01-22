
// declare var $: any;
// declare var Morris: any;
import 'd3';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
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
  submitType = 'Save';
  selectedRow: number;
  totalRec: number;
  page = 1;
  public searchString: string;
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = Categorytype;
    this.bindAllCategorytype();
    this.bindActiveCategory();
  }

  ngOnInit() {
     this.resetForm();
  }

  showSuccess() {
  }

  onSubmit(categorytypeForm: NgForm) {
    if (categorytypeForm.value.ID === 0) {
      this.apiService.addService(categorytypeForm.value, 'CategoryTypes').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorytype();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categorytypeForm.value, categorytypeForm.value.ID, 'CategoryTypes').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategorytype();
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categorytypeForm?: NgForm) {
    if (categorytypeForm != null) {
      categorytypeForm.reset();
      this.apiService.selectedModel = [];
    }
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
    const tempCategoryType =  Object.assign({}, this.categorytype.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = 'Update';
  }

  bindAllCategorytype() {
    this.apiService.getService('CategoryTypes').subscribe((data: Categorytype[]) => {
      this.categorytype = data;
      this.totalRec = this.categorytype.length;
      console.log(this.totalRec);
      console.log(this.page);
    });
  }

  bindActiveCategory() {
    this.apiService.getModelListbyActive('Categories', 'GetActiveCategories').subscribe((data: Category[]) => {
      const filterData = data; // .filter(x => x.IsActive === true);
      this.category = filterData;
    });
  }
}
