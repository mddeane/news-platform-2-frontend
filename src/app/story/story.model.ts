export class Story {
    storyId: number;
    storyTitle: string;
    storyScript: string;
    storyWriter: string;
    storyCreatedDate: Date;
    storyCreatedBy: string;
    storyModifiedDate: Date;
    storyModifiedBy: string;

    constructor(
        storyId: number,
        storyTitle: string,
        storyScript: string,
        storyWriter: string,
        storyCreatedDate: Date,
        storyCreatedBy: string,
        storyModifiedDate: Date,
        storyModifiedBy: string
    ) {
        this.storyId = storyId;
        this.storyTitle = storyTitle;
        this.storyScript = storyScript;
        this.storyWriter = storyWriter;
        this.storyCreatedDate = storyCreatedDate;
        this.storyCreatedBy = storyCreatedBy;
        this.storyModifiedDate = storyModifiedDate;
        this.storyModifiedBy = storyModifiedBy;

    }

}