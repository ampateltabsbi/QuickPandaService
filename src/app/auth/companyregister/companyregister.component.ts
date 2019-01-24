import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-companyregister',
  templateUrl: './companyregister.component.html',
  styleUrls: ['./companyregister.component.scss']
})
export class CompanyregisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(ownerForm: NgForm) {
  }
}
