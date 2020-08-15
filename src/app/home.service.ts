import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { School } from './home/school';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private dbPath = '/schools/info';

  schoolsRef: AngularFireList<School> = null;

  constructor() { }
  getSchoolsDataList(): AngularFireList<School> {
    return this.schoolsRef;
  }
}
