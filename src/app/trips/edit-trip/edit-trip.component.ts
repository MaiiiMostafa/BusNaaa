import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  trip: Trip = new Trip();
  submitted = false;
  id :string;
  constructor(private tripService: TripService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('tripId');
    this.trip = this.getTripById(this.id);
    console.log(this.id);
if(this.trip==null)
console.log("Maiiiiiiiiiiiiiiii nulllll");
    
    

  }
 

  onSubmit(trip:Trip) {
    this.submitted = true;
    this.editTrip(trip);
  }

  newTrip(): void {
    this.submitted = false;
    this.trip = new Trip();
  }
  editTrip(trip:Trip) {
    console.log("Maiiii anaa hena "+ this.trip.id);
    this.trip.key=this.trip.id;
    console.log(this.trip);
    this.tripService
      .updateTrip(this.trip.id,this.trip)
      .catch(err => console.log(err));
  }

  getTripById(id:string) :Trip{
    console.log("ID:"+id );
    
   return this.tripService.getDataById(id);
    
}

}

