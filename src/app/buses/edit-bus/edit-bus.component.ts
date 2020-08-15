import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  bus: Bus = new Bus();
  submitted = false;
  key :string;
  constructor(private busService: BusService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('busId');
    this.bus = this.getBusById(this.key);
    console.log(this.key);
if(this.bus==null)
console.log("Maiiiiiiiiiiiiiiii nulllll");
    
    

  }
 

  onSubmit(bus:Bus) {
    this.submitted = true;
    this.editBus(bus);
  }

  newBus(): void {
    this.submitted = false;
    this.bus = new Bus();
  }
  editBus(bus:Bus) {
    console.log("Maiiii anaa hena "+ this.bus.key);
    this.bus.key=this.bus.key;
    console.log(this.bus);
    this.busService
      .updateBus(this.bus.key,this.bus)
      .catch(err => console.log(err));
  }

  getBusById(id:string) :Bus{
    console.log("ID:"+id );
    console.log(this.busService.getDataById(id));
   return this.busService.getDataById(id);
    
}

}
