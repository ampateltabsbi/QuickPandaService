import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/Company';

@Component({
  selector: 'app-companypending',
  templateUrl: './companypending.component.html',
  styleUrls: ['./companypending.component.scss']
})
export class CompanypendingComponent implements OnInit {

  company: Company[] = [];
  tempFilter = [];
  selectedRow: number;

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public searchString: string;

  constructor(private apiService: APIService, private router: Router) {
    this.apiService.selectedModel = this.company;
    this.bindPendingCompany();
  }

  ngOnInit() {
  }

  bindPendingCompany() {
    this.apiService
      .getModelListbyActive('Company', 'GetActiveCompany')
      .subscribe((data: Company[]) => {
        this.tempFilter = [...data];
        this.data = data;
      });
  }

}
