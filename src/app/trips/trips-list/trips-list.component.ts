import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../trip.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {

  private router: Router
  trips: any;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.gettripsList();
    console.log(this.trips);
  }

  gettripsList() {
    this.tripService.getTripsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(trips => {
      this.trips = trips;
      console.log(trips);
    });
  }
  deletetrips() {
    this.tripService.deleteAll().catch(err => console.log(err));
  }

}
