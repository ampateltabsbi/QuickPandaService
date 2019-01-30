import { Component, OnInit } from '@angular/core';
import 'd3';
import { APIService } from '../../shared/services/api.service';
import { NotificationService } from '../../shared/services/notification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usermaster } from '../model/usermaster';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  verificicationtype: string;

  constructor(private apiService: APIService,
    private router: Router,
    private notificationService: NotificationService) {
    debugger;
    this.verificicationtype = localStorage.getItem('verificicationtype');

  }

  ngOnInit() {
  }

}
