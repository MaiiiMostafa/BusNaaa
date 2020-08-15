import { Injectable } from '@angular/core';
import { Trip } from './trip';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private dbPath = '/schools/15/Trips';

  tripsRef: AngularFireList<Trip> = null;
 tripsList: Array<Trip>
  trip:Trip
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.tripsRef = db.list(this.dbPath);
  }
  createTrip(trip: Trip): void {
   // this.usersRef.push(user);
    this.tripsRef.set(""+trip.id+"",trip);
  }

  updateTrip(key: string,trip:Trip): Promise<void> {

      console.log("----------------------")
      console.log(key);
      console.log(trip);
    return this.tripsRef.update(key, trip);
  }

  deleteTrip(key: string): Promise<void> {
    return this.tripsRef.remove(key);
  }

  getTripsList(): AngularFireList<Trip> {
    return this.tripsRef;
  }

  deleteAll(): Promise<void> {
    return this.tripsRef.remove();
  }
  
  

  getDataById(key:string) :Trip{
    

    
    // db: AngularFireDatabase
    this.items = this.db.list('schools/15/Trips').valueChanges();
    
  
    this.items.subscribe(us => {
      this.tripsList = us as Trip[]
    });
    console.log("mai mayoya 2 ==> "+this.tripsList.length);
    console.log("mai mostafa key1  ==> "+key);
    this.tripsList.forEach(element => {

      console.log("mai mostafa key2  ==> "+element.key);

      if(element.key === key){

        console.log("mai mayoya 3 ==> "+element.name);
        this.trip = element
        return element as  Trip
      }
    });
    return this.trip;
    //return this.db.list('users/'+ key);
  }

  
}