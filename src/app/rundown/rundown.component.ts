import { RundownService } from './rundown.service';
import { Component, OnInit } from '@angular/core';
import { Rundown } from './rundown.model';

@Component({
  selector: 'app-rundown',
  templateUrl: './rundown.component.html',
  styleUrls: ['./rundown.component.css']
})
export class RundownComponent implements OnInit {

  constructor(public rundownServ: RundownService) { }

  ngOnInit(): void {
  }

  public rundown: Rundown = new Rundown(0, new Date(), new Date(), "", "", "", new Date(), "", new Date(), "", []);

  public addRundown(): void {
    console.log(this.rundown);
    this.rundownServ.addRundown(this.rundown).subscribe(rundownData => console.log(rundownData));
  }

}
