import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private router: Router
  schools: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getSchoolsDataList();
  }

  getSchoolsDataList() {
    this.homeService.getSchoolsDataList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(schools => {
      this.schools = schools;
    });
  }

}
