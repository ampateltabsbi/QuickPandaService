import { Component, OnInit } from "@angular/core";
import "d3";
import { APIService } from "../../../shared/services/api.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { StateMaster } from "../model/statemaster";
import { CountryMaster } from "../model/countrymaster";

@Component({
  selector: "app-state",
  templateUrl: "./state.component.html",
  styleUrls: ["./state.component.scss"]
})
export class StateComponent implements OnInit {
  statemaster: StateMaster[] = [];
  countrymaster: CountryMaster[] = [];
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
    this.apiService.selectedModel = this.statemaster;
    this.bindAllStateMaster();
    this.bindActiveCountryMaster();
  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(statemasterForm: NgForm) {
    if (statemasterForm.value.ID === 0) {
      this.apiService
        .addService(statemasterForm.value, "StateMasters")
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllStateMaster();
          },
          err => {
            console.log(err);
          }
        );
    } else {
      this.apiService
        .updateService(
          statemasterForm.value,
          statemasterForm.value.ID,
          "StateMasters"
        )
        .subscribe(
          result => {
            this.resetForm();
            this.bindAllStateMaster();
          },
          err => {
            console.log(err);
          }
        );
    }
  }

  resetForm(statemasterForm?: NgForm) {
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

  bindAllStateMaster() {
    this.apiService
      .getService("StateMasters")
      .subscribe((data: Categorydescription[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

  bindActiveCountryMaster() {
    this.apiService
      .getModelListbyActive("CategoryType", "GetActiveCategoryTypes")
      .subscribe((data: Categorytype[]) => {
        this.categorytype = data;
      });
  }
}
