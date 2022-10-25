import { AlertService } from './../alert/alert.service';
import { RundownService } from './rundown.service';
import { Component, OnInit } from '@angular/core';
import { Rundown } from './rundown.model';
import { RundownRow } from '../rundown-row/rundownRow.model';
import { RundownRowService } from '../rundown-row/rundown-row.service';
import { Session } from '../common/session';

@Component({
  selector: 'app-rundown',
  templateUrl: './rundown.component.html',
  styleUrls: ['./rundown.component.css']
})
export class RundownComponent implements OnInit {
  constructor(public rundownServ: RundownService, private alertServ: AlertService) { }

  rundownRows: RundownRow[] = [];
  username: string = Session.username;

  ngOnInit(): void {
  }

  public rundown: Rundown = new Rundown(0, new Date(), new Date(), "", "", "", new Date(), this.username, new Date(), this.username, []);

  loadedRundowns: Rundown[] = [];
  loadedRundownIds: number[] = [];
  displayedRundown: number = 0;
  allRundowns: Rundown[] = [];

  rundownToLoadId: number = 0;


  public addRundown(): void {
    console.log(this.rundown);
    this.rundownServ.addRundown(this.rundown).subscribe(rundownData => console.log(rundownData));
  }

  getRundownById(rundownId: number): void {
    console.log("Getting rundown with ID -> " + rundownId);
    this.rundownServ.getRundownById(rundownId).subscribe(rdData => {
      this.rundownRows = rdData.rundownRows;
      let rundownId = rdData.rundownId;
      this.loadRundown(rundownId, rdData);
    });
  }


  /**
   * This checks the rundown being retieved to see if it is already loaded
   * and returns informational messages.
   * Used by getRundownById().
   * @param rundownId 
   * @param rundown 
   */
  loadRundown(rundownId: number, rundown: Rundown): void {
    if (!this.loadedRundownIds.includes(rundownId)) {
      this.loadedRundowns.push(rundown);
      this.loadedRundownIds.push(rundownId);
      console.log(rundown);
      console.log("Row ID -> " + rundown.rundownRows[0].rowId);
      this.displayedRundown == 0 ? this.displayedRundown = rundownId : '';
      console.log("Displaying rundown ID -> " + this.displayedRundown);
    } else {
      console.log("Rundown with ID " + rundown.rundownId + " is already loaded.");
    }
  }

  unloadRundown(loadedIndex: number): void {
    console.log("loadedIndex -> " + loadedIndex);
    console.log("this.loadedRundowns[loadedIndex] -> " + this.loadedRundowns[loadedIndex].rundownTitle);
    console.log(this.displayedRundown);
    let currentDisplayRundownId = this.loadedRundowns[loadedIndex].rundownId;
    this.loadedRundowns.splice(loadedIndex, 1);
    this.loadedRundownIds.splice(loadedIndex, 1);
    if (this.displayedRundown == currentDisplayRundownId) {
      this.displayedRundown = this.loadedRundowns[0].rundownId;
    }
    if (this.loadedRundownIds.length < 1) {
      this.displayedRundown = 0;
    }
  }

  unloadAllRundowns(): void {
    this.allRundowns = [];
    if (this.loadedRundownIds.length < 1) {
      this.displayedRundown = 0;
    }
  }

  getAllRundowns(): void {
    console.log("Getting all rundowns");
    this.rundownServ.getAllRundowns().subscribe(rdData => {
      this.allRundowns = rdData;
      console.log(rdData);
    });
  }


  setDisplayRundown(rundownId: number): void {
    if (this.displayedRundown != rundownId) {
      if (this.loadedRundownIds.includes(rundownId)) {
        this.displayedRundown = rundownId;
        console.log("Displaying rundown with ID -> " + rundownId);
      } else {
        console.log("The rundown with ID " + rundownId + " is not loaded.");
      }
    } else {
      console.log("The rundown with ID " + rundownId + " is already displayed.");
    }
  }

  test(): void {
    this.alertServ.showAlert("You double-clicked.")
  }


}
