import { Injectable } from '@angular/core';
import { Bus } from './bus';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private dbPath = '/schools/15/buses';

  busesRef: AngularFireList<Bus> = null;
  busesList: Array<Bus>
  bus:Bus
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.busesRef = db.list(this.dbPath);
  }
  createBus(bus: Bus): void {
  
    this.busesRef.set(""+bus.key+"",bus);
  }

  updateBus(key: string,bus:Bus): Promise<void> {

      console.log("----------------------")
      console.log(key);
      console.log(bus);
    return this.busesRef.update(key, bus);
  }

  deleteBus(key: string): Promise<void> {
    return this.busesRef.remove(key);
  }

  getbusesList(): AngularFireList<Bus> {
    console.log(this.busesRef);
    return this.busesRef;
  }

  deleteAll(): Promise<void> {
    return this.busesRef.remove();
  }
  
  

  getDataById(key:string) :Bus{
    

    
    // db: AngularFireDatabase
    this.items = this.db.list('schools/15/buses').valueChanges();
    
   
    this.items.subscribe(us => {
      this.busesList = us as Bus[];
    });
    console.log("mai mayoya 2 ==> "+this.busesList.length);
    console.log("mai mostafa key1  ==> "+key);
    this.busesList.forEach(element => {

      console.log("mai mostafa key2  ==> "+element.key);

      if(element.key === key){

        console.log("mai mayoya 3 ==> "+element.name);
        this.bus = element
        return element as  Bus
      }
    });
    return this.bus;
    
  }

  
}
