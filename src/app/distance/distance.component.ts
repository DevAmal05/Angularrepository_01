import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getDistance() : Observable<any>{
    return this.db.list('Distance').snapshotChanges();
    }

}
