import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '..';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usermaster } from '../model/usermaster';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  category: Category[] = [];
  submitType = 'Save';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(ownerForm: NgForm) {
  }

}
