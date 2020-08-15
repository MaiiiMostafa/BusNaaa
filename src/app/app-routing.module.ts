import { CreateUserComponent } from './users/create-user/create-user.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from './users/user';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { BusesListComponent } from './buses/buses-list/buses-list.component';
import { CreateBusComponent } from './buses/create-bus/create-bus.component';
import { CreateTripComponent } from './trips/create-trip/create-trip.component';
import { EditBusComponent } from './buses/edit-bus/edit-bus.component';
import { EditTripComponent } from './trips/edit-trip/edit-trip.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: 'users', component: UsersListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: CreateUserComponent } ,
  { path: 'users/edit/:userPhone', component: EditUserComponent },
  { path: 'buses', component: BusesListComponent },
  { path: 'addBus', component: CreateBusComponent } ,
  { path: 'buses/edit/:busId', component: EditBusComponent },
  { path: 'trips', component: TripsListComponent },
  { path: 'addTrip', component: CreateTripComponent } ,
  { path: 'users/edit/:tripId', component: EditTripComponent },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


// { path: 'home', component: HomeComponent, children: [
//   {
//     path: 'users',
//     component: UsersListComponent
// },
// {
//   path: 'add',
//   component: CreateUserComponent,
// },
// ] },


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
