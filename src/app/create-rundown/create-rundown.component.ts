import { Session } from './../common/session';
import { Constants } from './../common/constants';
import { RundownService } from './../rundown/rundown.service';
import { Component, OnInit } from '@angular/core';
import { Rundown } from '../rundown/rundown.model';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-create-rundown',
  templateUrl: './create-rundown.component.html',
  styleUrls: ['./create-rundown.component.css']
})

export class CreateRundownComponent implements OnInit {

  constructor(public rundownServ: RundownService, private alertServ: AlertService) { }

  currentDate: Date = new Date();
  TEMP_RUNDOWN_TEMPLATES: string[] = Constants.RUNDOWN_TEMPLATES; // using temporarily to test

  rundownStartDate: string = "";
  rundownStartTime: string = "";
  rundownEndDate: string = "";
  rundownEndTime: string = "";

  username: string = Session.username;  // testing username

  ngOnInit(): void {
    this.rundownStartDate = this.currentDate.getFullYear() + "-" + this.addZero(this.currentDate.getMonth() + 1) + "-" + this.addZero(this.currentDate.getDate());

    this.rundownStartTime = this.addZero(this.currentDate.getHours()) + ":" + this.addZero(this.currentDate.getMinutes()) + ":" + this.addZero(this.currentDate.getSeconds());

    this.calculateEndDateAndTime(this.currentDate, this.currentDate, 30); // adds 30 minutes to the provided date and time

  }

  public rundown: Rundown = new Rundown(0, this.currentDate, this.currentDate, "", "", "", this.currentDate, this.username, this.currentDate, this.username, []);

  public submitRundown() {
    this.rundown.rundownStartTime = new Date(this.rundownStartDate + "T" + this.rundownStartTime);
    this.rundown.rundownEndTime = new Date(this.rundownEndDate + "T" + this.rundownEndTime);
    this.addRundown();
    this.alertServ.showAlert("Created rundown.")

  }

  public addRundown(): void {
    console.log(this.rundown);
    this.rundownServ.addRundown(this.rundown).subscribe(rundownData => console.log(rundownData));
  }

  public datePlus(origDate: Date, mins: number): Date {
    console.log("origDate.getTime() -> " + origDate.getTime());
    let returnMilli = origDate.getTime() + (mins * 60 * 1000);
    console.log("mins * 60 * 1000 -> " + mins * 60 * 1000);
    console.log(returnMilli);
    let returnDate = new Date(returnMilli);
    console.log(returnDate);
    return returnDate;
  }

  public addZero(num: number): string {
    let numString = "";
    if (num < 10) {
      numString = "0" + num;
    } else {
      numString = num.toString();
    }
    return numString;
  }

  /**
   * This takes the template name and adds the day of the week to create a prelimnary 
   * rundown title. The title can then be modified in the input field.
   * @param templateName 
   * @param dateString 
   * @returns 
   */
  public prepRundownTitle(templateName: string, dateString: string): string {
    let prepTitle: string = "";
    let date: Date = new Date(dateString);
    console.log(dateString);
    console.log(date.getUTCDay());
    let prepDay: string = Constants.DAYS_OF_WEEK[date.getUTCDay()];
    prepTitle = templateName + " " + prepDay + " " + dateString.replace(/-/g, "");
    return prepTitle;
  }

  calculateEndDateAndTime(startDate: Date, startTime: Date, mins: number): void {
    this.rundownEndDate = this.datePlus(startDate, mins).getFullYear() + "-" + this.addZero(this.datePlus(startDate, mins).getMonth() + 1) + "-" + this.addZero(this.datePlus(startDate, mins).getDate());

    this.rundownEndTime = this.addZero(this.datePlus(startTime, mins).getHours()) + ":" + this.addZero(this.datePlus(startTime, mins).getMinutes()) + ":" + this.addZero(this.datePlus(startTime, mins).getSeconds());
  }

  convertStringToDate(dateString: string, timeString: string): Date {
    console.log("dateString -> " + dateString);
    console.log("timeString -> " + timeString);
    let dateTimeString = dateString + "T" + timeString;
    console.log(dateTimeString);
    let date = new Date(dateTimeString);
    console.log("date -> " + date);
    return date;
  }

}
