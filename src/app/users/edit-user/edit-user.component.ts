import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  phone :string;
  constructor(private userService: UserService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.phone = this.route.snapshot.paramMap.get('userPhone');
    this.user = this.getUserByPhone3(this.phone);
    console.log(this.phone);
if(this.user==null)
console.log("Maiiiiiiiiiiiiiiii nulllll");
    console.log(this.user.phone);
    console.log(this.user.name);
    console.log(this.user.address);
    console.log(this.user.type);
    

  }
 

  onSubmit(user:User) {
    this.submitted = true;
    this.editUser(user);
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
  editUser(user:User) {
    console.log("Maiiii anaa hena "+ this.user.phone);
    this.user.key=this.user.phone;
    console.log(this.user);
    this.userService
      .updateUser(this.user.phone,this.user)
      .catch(err => console.log(err));
  }

  getUserByPhone3(phone:string) :User{
    console.log("phone:"+phone );
    
   return this.userService
    .getDataByPhone2(phone)
    
}

}
