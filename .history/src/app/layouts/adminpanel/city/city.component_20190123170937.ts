import { Component, OnInit } from "@angular/core";
import "d3";
import { APIService } from "../../../shared/services/api.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CityMaster } from "../model/citymaster";
import { StateMaster } from "../model/statemaster";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.scss"]
})
export class CityComponent implements OnInit {
  citymaster: CityMaster[] = [];
  statemaster: StateMaster[] = [];
  tempFilter = [];
  submitType = "Save";
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = "";
  public sortBy = "";
  public sortOrder = "desc";
  public searchString: string;

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.citymaster;
    this.bindAllCityMaster();
    this.bindActiveStateMaster();
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(citymasterForm: NgForm) {
    if (citymasterForm.value.ID === 0) {
      this.apiService
        .addService(citymasterForm.value, "CategoryDescriptions")
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllCityMaster();
          },
          err => {
            console.log(err);
          }
        );
    } else {
      this.apiService
        .updateService(
          citymasterForm.value,
          citymasterForm.value.ID,
          "CategoryDescriptions"
        )
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllCityMaster();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(citymasterForm?: NgForm) {
    this.apiService.selectedModel = {
      Name: "",
      ID: 0,
      CategoryTypeID: 0,
      IsActive: false
    };
    this.submitType = "Save";
  }

  editCategorydescription(categorydescriptionId: number): void {
    this.selectedRow = categorydescriptionId;
    this.apiService.selectedModel = new Categorydescription();
    const tempCategoryType = Object.assign(
      {},
      this.data.filter(t => t.ID === this.selectedRow)
    );
    this.apiService.selectedModel = Object.assign({}, tempCategoryType[0]);
    this.submitType = "Update";
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function(d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.data = temp;
  }

  bindAllCityMaster() {
    this.apiService
      .getService("CategoryDescriptions")
      .subscribe((data: Categorydescription[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  bindActiveStateMaster() {
    this.apiService
      .getModelListbyActive("CategoryType", "GetActiveCategoryTypes")
      .subscribe((data: Categorytype[]) => {
        this.categorytype = data;
      });
  }
}
