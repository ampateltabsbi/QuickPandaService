import { Component, OnInit } from '@angular/core';
// import { APIService } from '../../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../model/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category[] = [];
  submitType = 'Save';
  selectedRow: number;

  public searchString: string;

  constructor(private router: Router) {
    debugger;
    this.apiService.selectedModel = this.category;

    this.bindAllCategory();
   }

   ngOnInit() {
    debugger;
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
