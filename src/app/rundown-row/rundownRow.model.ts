export class RundownRow {
    rowId: number;
    rowPageNumber: string;
    rowStoryId: number;
    rowType: string;
    rowCreatedDate: Date;
    rowCreatedBy: string;
    rowModifiedDate: Date;
    rowModifiedBy: string;
    rowApprovedDate: Date;
    rowApprovedBy: string;
    rowApprovalStatus: string;
    rowSegment: string;
    rowReader: string;
    rowCamera: string;
    rowGraphic: string;
    rowSource: string;
    rowNotes: string;
    rowVideo: string;
    rowEstDuration: string;
    rowActDuration: string;
    rowFrontTime: Date;
    rowBackTime: Date;
    rowIsFloated: boolean;

    constructor(
        rowId: number,
        rowPageNumber: string,
        rowStoryId: number,
        rowType: string,
        rowCreatedDate: Date,
        rowCreatedBy: string,
        rowModifiedDate: Date,
        rowModifiedBy: string,
        rowApprovedDate: Date,
        rowApprovedBy: string,
        rowApprovalStatus: string,
        rowSegment: string,
        rowReader: string,
        rowCamera: string,
        rowGraphic: string,
        rowSource: string,
        rowNotes: string,
        rowVideo: string,
        rowEstDuration: string,
        rowActDuration: string,
        rowFrontTime: Date,
        rowBackTime: Date,
        rowIsFloated: boolean
    ) {
        this.rowId = rowId;
        this.rowPageNumber = rowPageNumber;
        this.rowStoryId = rowStoryId;
        this.rowType = rowType;
        this.rowCreatedDate = rowCreatedDate;
        this.rowCreatedBy = rowCreatedBy;
        this.rowModifiedDate = rowModifiedDate;
        this.rowModifiedBy = rowModifiedBy;
        this.rowApprovedDate = rowApprovedDate;
        this.rowApprovedBy = rowApprovedBy;
        this.rowApprovalStatus = rowApprovalStatus;
        this.rowSegment = rowSegment;
        this.rowReader = rowReader;
        this.rowCamera = rowCamera;
        this.rowGraphic = rowGraphic;
        this.rowSource = rowSource;
        this.rowNotes = rowNotes;
        this.rowVideo = rowVideo;
        this.rowEstDuration = rowEstDuration;
        this.rowActDuration = rowActDuration;
        this.rowFrontTime = rowFrontTime;
        this.rowBackTime = rowBackTime;
        this.rowIsFloated = rowIsFloated;
    }
}