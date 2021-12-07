import { Time } from "@angular/common";

export class ReserveModel{
  id: string = '0';
  booking_date!: Date;
  booking_hour!: Time;
  user: string = '';
  equipment: string = '';
  material: string = '';
  room: string = '';
  option: string = '';
}
