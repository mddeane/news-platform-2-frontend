import { RundownRow } from "../rundown-row/rundownRow.model";

export class Rundown {

    rundownId: number;
    rundownStartTime: Date;
    rundownEndTime: Date;
    rundownStatus: string;
    rundownTemplate: string;
    rundownTitle: string;
    rundownCreatedDate: Date;
    rundownCreatedBy: string;
    rundownModifiedDate: Date;
    rundownModifiedBy: string;
    rundownRows: RundownRow[];

    constructor(
        rundownId: number,
        rundownStartTime: Date,
        rundownEndTime: Date,
        rundownStatus: string,
        rundownTemplate: string,
        rundownTitle: string,
        rundownCreatedDate: Date,
        rundownCreatedBy: string,
        rundownModifiedDate: Date,
        rundownModifiedBy: string,
        rundownRows: RundownRow[]
    ) {
        this.rundownId = rundownId;
        this.rundownStartTime = rundownStartTime;
        this.rundownEndTime = rundownEndTime;
        this.rundownStatus = rundownStatus;
        this.rundownTemplate = rundownTemplate;
        this.rundownTitle = rundownTitle;
        this.rundownCreatedDate = rundownCreatedDate;
        this.rundownCreatedBy = rundownCreatedBy;
        this.rundownModifiedDate = rundownModifiedDate;
        this.rundownModifiedBy = rundownModifiedBy;
        this.rundownRows = rundownRows;
    }
}   