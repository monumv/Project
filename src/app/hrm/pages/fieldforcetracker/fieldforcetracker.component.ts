import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Pipe, PipeTransform  } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  active: string;
  status: string;
  kms: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Manish Gupta (55)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Priya Rajpoot (658)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Sameer Singh (865)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Raj Verma (806)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Prateek Sharma (224)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Preeti Rajpoot (743)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Prem Singh (854)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Jaya Sharma (421)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Seema Babbar (554)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Janhvi mishra (254)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Aarti Singh (361)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
  {name: 'Meetu Singh (842)', status:'40 Logs', active:'02 Visits', kms:'28.80 Kms Travelled', address:'1690/A Jawahar Colony, 30 Feet Rd, New Industrial Town, Faridabad, Haryana 121005'},
];


// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
@Component({
  selector: 'app-fieldforcetracker',
  templateUrl: './fieldforcetracker.component.html',
  styleUrls: ['./fieldforcetracker.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
          // Each unique animation requires its own trigger. The first argument of the trigger function is the name
          trigger('rotatedState', [
            state('default', style({ transform: 'rotate(0)' })),
            state('rotated', style({ transform: 'rotate(-180deg)' })),
            transition('rotated => default', animate('500ms ease-out')),
            transition('default => rotated', animate('500ms ease-in'))
        ])
    ]
})
export class FieldforcetrackerComponent implements OnInit {
 
  clickedRows = new Set<PeriodicElement>();

 showFiller = true;
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 28.535517;
  lng: number = 77.391029;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 28.535517,
		  lng: 77.391029,
		  label: 'Manish Kumar',
		  draggable: true
	  },

	    {
		  lat: 28.4089,
		  lng: 77.3178,
		  label: 'Priya Rajpoot',
		  draggable: true
	  },

	    {
		  lat: 28.6692,
		  lng: 77.4538,
		  label: 'Jaya Sharma',
		  draggable: true
	  },

	    {
		  lat: 28.4595,
		  lng: 77.0266,
		  label: 'Meetu Singh',
		  draggable: true
	  },

	    {
		  lat: 28.7041,
		  lng: 77.1025,
		  label: 'Seema Babbar',
		  draggable: true
	  },
	
  ]

    displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
 selection = new SelectionModel<PeriodicElement>(false, []);
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

 state: string = 'default';

    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }
}
