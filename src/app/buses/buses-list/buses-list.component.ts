import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent implements OnInit {

  private router: Router
  buses: any;

  constructor(private busService: BusService) { }

  ngOnInit() {
    this.getbusesList();
    console.log(this.buses);
  }

  getbusesList() {
    this.busService.getbusesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(buses => {
      this.buses = buses;
      console.log(buses);
    });
  }

 

  deletebuses() {
    this.busService.deleteAll().catch(err => console.log(err));
  }

}
