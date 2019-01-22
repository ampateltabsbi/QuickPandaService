import { Component, OnInit } from '@angular/core';
import { APIService } from '../../../shared/services/api.service';
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

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.category;
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
          this.showSuccess();
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
          this.showSuccess();
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
