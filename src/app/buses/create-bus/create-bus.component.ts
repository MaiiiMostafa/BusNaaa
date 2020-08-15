import { Component, OnInit } from '@angular/core';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})
export class CreateBusComponent implements OnInit {

  bus: Bus = new Bus();
  submitted = false;

  constructor(private busService: BusService) { }

  ngOnInit() {
  }

  newUser(): void {
    this.submitted = false;
    this.bus = new Bus();
  }

  save(bus:Bus) {
    this.busService.createBus(this.bus);
    this.bus = bus;
    
  }

  onSubmit(bus:Bus) {
    this.submitted = true;
    this.save(bus);
  }

}

