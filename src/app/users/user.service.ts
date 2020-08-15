import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {User} from './user';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/users';

  usersRef: AngularFireList<User> = null;
  usersList: Array<User>
  user:User
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath);
  }
  createUser(user: User): void {
   // this.usersRef.push(user);
    this.usersRef.set(""+user.phone+"",user);
  }

  updateUser(key: string,user:User): Promise<void> {

      console.log("----------------------")
      console.log(key);
      console.log(user);
    return this.usersRef.update(key, user);
  }

  deleteUser(key: string): Promise<void> {
    return this.usersRef.remove(key);
  }

  getUsersList(): AngularFireList<User> {
    return this.usersRef;
  }

  deleteAll(): Promise<void> {
    return this.usersRef.remove();
  }
  
  

  getDataByPhone2(key:string) :User{
    

    
    // db: AngularFireDatabase
    this.items = this.db.list('users').valueChanges();
    
  
    this.items.subscribe(us => {
      this.usersList = us as User[]
    });
    console.log("mai mayoya 2 ==> "+this.usersList.length);
    console.log("mai mostafa key1  ==> "+key);
    this.usersList.forEach(element => {

      console.log("mai mostafa key2  ==> "+element.phone);

      if(element.phone === key){

        console.log("mai mayoya 3 ==> "+element.name);
        this.user = element
        return element as  User
      }
    });
    return this.user;
    //return this.db.list('users/'+ key);
  }

  
}