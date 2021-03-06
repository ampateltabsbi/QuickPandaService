import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Morris: any;
import 'd3';
import * as c3 from 'c3';
import { APIService } from '../../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../model/category';
import { Categorydescription } from '../model/categorydescription';
import { Categorytype } from '../model/categorytype';

@Component({
  selector: 'app-categorydescription',
  templateUrl: './categorydescription.component.html',
  styleUrls: ['./categorydescription.component.scss']
})
export class CategorydescriptionComponent implements OnInit {

  category: Category[] = [];
  submitType = 'Save';
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  public searchString: string;

  constructor(private apiService: APIService, private router: Router) {
     this.apiService.selectedModel = this.category;

    this.bindAllCategory();
   }

   ngOnInit() {
    this.resetForm();
  }

  onSubmit(categoryForm: NgForm) {
    if (categoryForm.value.ID === 0) {
      this.apiService.addService(categoryForm.value, 'Categories').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategory();
          //this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.apiService.updateService(categoryForm.value, categoryForm.value.ID, 'Categories').subscribe(
        result => {
          this.resetForm();
          this.bindAllCategory();
          //this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  resetForm(categoryForm?: NgForm) {
    if (categoryForm != null) {
      categoryForm.reset();
      this.apiService.selectedModel = [];
    }
    this.apiService.selectedModel = {
      Name: '',
      ID: 0,
      IsActive: false,
    };
    this.submitType = 'Save';
  }

  editCategory(categoryId: number): void {
    this.selectedRow = categoryId;
    this.apiService.selectedModel = new Category();
    const tempCategory =  Object.assign({}, this.category.filter(t => t.ID === this.selectedRow));
    this.apiService.selectedModel = Object.assign({}, tempCategory[0]);
    this.submitType = 'Update';
  }

  bindAllCategory() {
    this.apiService.getService('Categories').subscribe((data: Category[]) => {
      this.category = data;
      // this.totalRec = this.category.length;
      // console.log(this.totalRec);
      // console.log(this.page);
    });
  }

}
