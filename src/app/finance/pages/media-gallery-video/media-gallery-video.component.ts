import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-media-gallery-video',
  templateUrl: './media-gallery-video.component.html',
  styleUrls: ['./media-gallery-video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MediaGalleryVideoComponent implements OnInit {
 
  date: '18-03-2021'
  files: File[] = [];

	onSelect(event: any) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event: any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
  constructor() { }

  ngOnInit(): void {
  }
}
