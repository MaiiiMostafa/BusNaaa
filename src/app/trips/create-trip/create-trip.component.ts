import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {

  trip: Trip = new Trip();
  submitted = false;

  constructor(private tripService: TripService) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.trip = new Trip();
  }

  save(trip:Trip) {
    this.tripService.createTrip(this.trip);
    this.trip = trip;
    
  }

  onSubmit(trip:Trip) {
    this.submitted = true;
    this.save(trip);
  }

}


