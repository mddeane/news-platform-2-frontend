import { Component, OnInit } from '@angular/core';
import { RundownRowService } from './rundown-row.service';

@Component({
  selector: 'app-rundown-row',
  templateUrl: './rundown-row.component.html',
  styleUrls: ['./rundown-row.component.css']
})
export class RundownRowComponent implements OnInit {

  constructor(private rowServ: RundownRowService) { }

  ngOnInit(): void {
  }

  getRowById(rowId: number): void {
    console.log("Getting rundown row with ID -> " + rowId);
    this.rowServ.getRowById(rowId).subscribe(rowData => {
      let rowId = rowData.rowId;
      // this.loadRundown(rundownId, rdData);
    });
  }

}
