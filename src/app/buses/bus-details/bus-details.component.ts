import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../bus';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {

  @Input() bus: Bus;

  constructor(private busService: BusService,private router: Router) { 
    
  }

  ngOnInit() {
  }

  deleteBus() {
    this.busService
      .deleteBus(this.bus.key)
      .catch(err => console.log(err));
  }

 
  editBus(){
    this.router.navigate(['home/buses/edit/',""+this.bus.key]);
  }
  

}

