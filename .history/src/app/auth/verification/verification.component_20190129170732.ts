import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  verificicationtype: string;

  constructor() {
    this.verificicationtypeverificicationType = localStorage.getItem('verificicationtype');
  }

  ngOnInit() {
  }

}
