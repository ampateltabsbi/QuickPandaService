import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Company } from '../model/Company';

@Component({
  selector: 'app-companyapproved',
  templateUrl: './companyapproved.component.html',
  styleUrls: ['./companyapproved.component.scss']
})
export class CompanyapprovedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
