import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { CreateTripComponent } from './trips/create-trip/create-trip.component';
import { EditTripComponent } from './trips/edit-trip/edit-trip.component';
import { TripsListComponent } from './trips/trips-list/trips-list.component';
import { TripDetailsComponent } from './trips/trip-details/trip-details.component';
import { CreateBusComponent } from './buses/create-bus/create-bus.component';
import { EditBusComponent } from './buses/edit-bus/edit-bus.component';
import { BusDetailsComponent } from './buses/bus-details/bus-details.component';
import { BusesListComponent } from './buses/buses-list/buses-list.component';
import { HomeComponent } from './home/home.component';
import { SchoolDataComponent } from './school-data/school-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    
    CreateUserComponent,
    UserDetailsComponent,
   
    UsersListComponent,
   
    EditUserComponent,
   
    CreateTripComponent,
   
    EditTripComponent,
   
    TripsListComponent,
   
    TripDetailsComponent,
   
    CreateBusComponent,
   
    EditBusComponent,
   
    BusDetailsComponent,
   
    BusesListComponent,
   
    HomeComponent,
   
    SchoolDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
