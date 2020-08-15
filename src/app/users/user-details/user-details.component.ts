import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService,private router: Router) { 
    
  }

  ngOnInit() {
  }

  deleteUser() {
    this.userService
      .deleteUser(this.user.key)
      .catch(err => console.log(err));
  }

 
  editUser(){
    this.router.navigate(['users/edit/',""+this.user.phone]);
  }
  

}
