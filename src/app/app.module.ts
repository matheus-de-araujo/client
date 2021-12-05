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
import { MaterialsComponent } from './materials/materials.component';
import { MaterialService } from './services/material.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './services/category.service';
import { ReservesComponent } from './reserves/reserves.component';
import { ReserveService } from './reserve.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    EquipmentsComponent,
    RoomsComponent,
    MaterialsComponent,
    CategoriesComponent,
    ReservesComponent
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
    MaterialService,
    CategoryService,
    ReserveService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
