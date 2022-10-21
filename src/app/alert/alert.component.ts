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

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.showAlert("You are using the PLATFORM", "success", 30000);
  }

}
