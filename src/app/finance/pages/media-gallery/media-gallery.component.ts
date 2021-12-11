import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-media-gallery',
  templateUrl: './media-gallery.component.html',
  styleUrls: ['./media-gallery.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MediaGalleryComponent implements OnInit {
  
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
 


constructor(public dialog: MatDialog) {}

 openDialog(type: string) {
    var width = "";

    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: ['gallery-box'],
      width: width,
      data: {
        dialogObj: {
          dialogType: type
        }
      }
    });}



  ngOnInit() {}



}

