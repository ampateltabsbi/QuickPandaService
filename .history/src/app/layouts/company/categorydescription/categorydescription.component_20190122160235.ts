import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Morris: any;
import 'd3';
import * as c3 from 'c3';
import { APIService } from '../../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from '../model/category';
import { Categorydescription } from '../model/categorydescription';
import { Categorytype } from '../model/categorytype';

@Component({
  selector: 'app-categorydescription',
  templateUrl: './categorydescription.component.html',
  styleUrls: ['./categorydescription.component.scss']
})
export class CategorydescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
