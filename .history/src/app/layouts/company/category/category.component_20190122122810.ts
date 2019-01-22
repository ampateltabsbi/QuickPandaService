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
  
  constructor() { }

  ngOnInit() {
  }

}
