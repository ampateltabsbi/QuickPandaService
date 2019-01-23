import { Component, OnInit } from "@angular/core";
import "d3";
import { APIService } from "../../../shared/services/api.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CountryMaster } from "../model/countrymaster";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"]
})
export class CountryComponent implements OnInit {
  countrymaster: CountryMaster[] = [];
  submitType = "Save";
  selectedRow: number;
  tempFilter = [];

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = "";
  public sortBy = "";
  public sortOrder = "desc";

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.countrymaster;
    this.bindAllCategory();
  }

  ngOnInit() {
    this.resetForm();
  }

  showSuccess() {}

  onSubmit(countrymasterForm: NgForm) {
    if (countrymasterForm.value.ID === 0) {
      this.apiService.addService(countrymasterForm.value, "CountryMaster").subscribe(
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
      this.apiService
        .updateService(countrymasterForm.value, countrymasterForm.value.ID, "CountryMaster")
        .subscribe(
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

  resetForm(countrymasterForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: "",
      ID: 0,
      IsActive: false
    };
    this.submitType = "Save";
  }

  editCategory(categoryId: number): void {
    this.selectedRow = categoryId;
    this.apiService.selectedModel = new Category();
    const tempCategory = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempCategory[0]);
    this.submitType = "Update";
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllCategory() {
    this.apiService.getService("CountryMaster").subscribe((data: Category[]) => {
      this.tempFilter = [...data];
      this.data = data;
    });
  }
}
