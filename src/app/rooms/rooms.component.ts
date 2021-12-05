import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { RoomModel } from './rooms.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  room: RoomModel = new RoomModel();
  rooms: Array<any> = new Array();

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.listarRooms();
  }

  listarRooms(){
    this.roomService.listarRooms().subscribe(data => {
      this.rooms = data;
    }, err => {
      console.log('Erro ao listar as salas', err);
    })
  }

  adicionarRooms(){
    console.log(this.room);
    this.roomService.adicionarRooms(this.room).subscribe(data => {
      this.room = new RoomModel();
      document.getElementById('close')?.click();
      this.listarRooms();
    }, err => {
      console.log('Erro ao cadastrar a sala', err);
    })
  }

  deletarRooms(id: number){
    this.roomService.deletarRooms(id).subscribe(data => {
      this.listarRooms();
    }, err => {
      console.log('Erro ao deletar a sala', err);
    })
  }

  editarRooms(){
    this.roomService.editarRooms(this.room).subscribe(data => {
      this.listarRooms();
    }, err => {
      console.log('Erro ao editar a sala', err);
    })
  }

  getRoom(id: number){
    this.room = this.rooms.find(element => element.id === id)
  }

  clearModal(){
    this.room = new RoomModel();
  }

}
