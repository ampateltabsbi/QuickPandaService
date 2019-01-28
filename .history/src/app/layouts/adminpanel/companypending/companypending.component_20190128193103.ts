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

  constructor() { }

  ngOnInit() {
  }

}
