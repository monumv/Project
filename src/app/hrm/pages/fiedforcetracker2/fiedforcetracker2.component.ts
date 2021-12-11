import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import {map, startWith} from 'rxjs/operators';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeWhile';


interface point {
  lat: number;
  lng: number;
}


@Component({
  selector: 'app-fiedforcetracker2',
  templateUrl: './fiedforcetracker2.component.html',
  styleUrls: ['./fiedforcetracker2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Fiedforcetracker2Component implements OnInit {

  // google maps zoom level
  zoom: number = 19;

  // initial center position for the map

  currentPos: point = {
    lat: 50.082730,
    lng: 14.431697
  };
  points: point[] = [];
  tmpPoints: point[] = [
    this.currentPos,
    {
      lat: 50.082911,
      lng: 14.431411
    },
    {
      lat: 50.083202,
      lng: 14.430994
    },
    {
      lat: 50.083352,
      lng: 14.430780
    },
    {
      lat: 50.083491,
      lng: 14.430569
    },
    {
      lat: 50.083644,
      lng: 14.430367
    }
  ]


  ngOnInit() {
    let i = 0;
    const obs = Observable.interval(2000)
      .takeWhile((v) =>  i < this.tmpPoints.length)
      .subscribe(() => {
        const pos = this.tmpPoints[i];
        this.points.push(pos);
        this.currentPos = pos;
        i++;
      })
  }


  constructor() {  }


 state: string = 'default';

    rotate() {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

}
