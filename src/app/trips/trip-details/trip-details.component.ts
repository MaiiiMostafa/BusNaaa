import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  @Input() trip: Trip;

  constructor(private tripService: TripService,private router: Router) { 
    
  }

  ngOnInit() {
  }

  deleteTrip() {
    this.tripService
      .deleteTrip(this.trip.key)
      .catch(err => console.log(err));
  }

 
  editUser(){
    this.router.navigate(['home/buses/edit/',""+this.trip.id]);
  }
  

}


