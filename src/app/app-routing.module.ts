import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentsComponent } from './equipments/equipments.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"users",
    component: UsersComponent
  },
  {
    path:"equipments",
    component: EquipmentsComponent
  },
  {
    path:"rooms",
    component: RoomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
