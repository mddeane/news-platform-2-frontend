import { StoryService } from './story.service';
import { Component, OnInit } from '@angular/core';
import { Story } from './story.model';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public story: Story = new Story(0, "", "", "", new Date(), "", new Date(), "");

  constructor(public storyServ: StoryService) { }

  ngOnInit(): void {
  }

  logStory() {
    console.log(this.story);
  }

  public addStory(): void {
    console.log(this.story);
    this.storyServ.addStory(this.story).subscribe(storyData => console.log(storyData));
  }
}
