import { AlertService } from './alert.service';
import { Component, OnInit } from '@angular/core';
import { Alert } from './alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(public alertServ: AlertService) { }

  ngOnInit(): void {
    // this.alertServ.showAlert("You are using the PLATFORM", "secondary", 30000);
  }

}
