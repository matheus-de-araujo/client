import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { EquipmentsComponent } from './equipments/equipments.component';
import { UserService } from './services/user.service';
import { EquipmentService } from './services/equipment.service';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomService } from './services/room.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EquipmentsComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    EquipmentService,
    RoomService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
