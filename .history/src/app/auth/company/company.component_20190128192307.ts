import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
const ownerId:0;
  constructor() {
    localStorage.getItem("OwnerId");
    //localStorage.clear();
    //localStorage.removeItem(key);
   }

  ngOnInit() {
  }
  onSubmit(ownerForm: NgForm) {
  }
}
