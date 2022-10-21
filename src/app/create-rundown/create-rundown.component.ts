import { Constants } from './../common/constants';
import { RundownService } from './../rundown/rundown.service';
import { Component, OnInit } from '@angular/core';
import { Rundown } from '../rundown/rundown.model';

@Component({
  selector: 'app-create-rundown',
  templateUrl: './create-rundown.component.html',
  styleUrls: ['./create-rundown.component.css']
})
export class CreateRundownComponent implements OnInit {

  constructor(public rundownServ: RundownService) { }

  currentDate: Date = new Date();

  // rundownStartDate: string = this.currentDate.toISOString().slice(0, 10);
  // rundownStartTime: string = this.currentDate.getHours() + ":" + this.addZero(this.currentDate.getMinutes()) + ":" + this.addZero(this.currentDate.getSeconds());
  // rundownEndDate: string = this.currentDate.toISOString().slice(0, 10);
  // rundownEndTime: string = this.datePlus(this.currentDate, 30).getHours() + ":" + this.addZero(this.datePlus(this.currentDate, 30).getMinutes()) + ":" + this.addZero(this.datePlus(this.currentDate, 30).getHours());

  rundownStartDate: string = "";
  rundownStartTime: string = "";
  rundownEndDate: string = "";
  rundownEndTime: string = "";

  ngOnInit(): void {
    this.rundownStartDate = this.currentDate.getFullYear() + "-" + this.addZero(this.currentDate.getMonth() + 1) + "-" + this.addZero(this.currentDate.getDate());

    this.rundownStartTime = this.addZero(this.currentDate.getHours()) + ":" + this.addZero(this.currentDate.getMinutes()) + ":" + this.addZero(this.currentDate.getSeconds());

    this.rundownEndDate = this.datePlus(this.currentDate, 30).getFullYear() + "-" + this.addZero(this.datePlus(this.currentDate, 30).getMonth() + 1) + "-" + this.addZero(this.datePlus(this.currentDate, 30).getDate());

    this.rundownEndTime = this.addZero(this.datePlus(this.currentDate, 30).getHours()) + ":" + this.addZero(this.datePlus(this.currentDate, 30).getMinutes()) + ":" + this.addZero(this.datePlus(this.currentDate, 30).getSeconds());

    console.log("rundownStartDate -> " + this.rundownStartDate);
    console.log("rundownStartTime -> " + this.rundownStartTime);
    console.log("rundownEndDate -> " + this.rundownEndDate);
    console.log("rundownEndTime -> " + this.rundownEndTime);
  }

  public rundown: Rundown = new Rundown(0, this.currentDate, this.currentDate, "", "", "", this.currentDate, "", this.currentDate, "", []);

  public submitRundown() {
    this.rundown.rundownStartTime = new Date(this.rundownStartDate + "T" + this.rundownStartTime);
    this.rundown.rundownEndTime = new Date(this.rundownEndDate + "T" + this.rundownEndTime);
    this.addRundown();

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
}
