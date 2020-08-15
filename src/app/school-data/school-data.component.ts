import { Component, OnInit, Input } from '@angular/core';
import { School } from '../home/school';

@Component({
  selector: 'app-school-data',
  templateUrl: './school-data.component.html',
  styleUrls: ['./school-data.component.css']
})
export class SchoolDataComponent implements OnInit {
  @Input() school: School;
  constructor() { }

  ngOnInit() {
  }

}
