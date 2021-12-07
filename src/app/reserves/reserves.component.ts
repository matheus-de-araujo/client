import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../services/reserve.service';
import { ReserveModel } from './reserves.model';
import { EquipmentService } from '../services/equipment.service';
import { TimeModel } from './time.model';
import { UserService } from '../services/user.service';
import { MaterialService } from '../services/material.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent implements OnInit {

  reserve: ReserveModel = new ReserveModel();
  time: TimeModel = new TimeModel();
  reserves: Array<any> = new Array();


  equipments: Array<any> = new Array();
  materials: Array<any> = new Array();
  rooms: Array<any> = new Array();
  users: Array<any> = new Array();

  constructor(
    private reserveService: ReserveService,
    private equipmentService: EquipmentService,
    private userService: UserService,
    private materialService: MaterialService,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {
    this.listarReserves();
  }

  listarReserves(){
    this.reserveService.listarReserves().subscribe(data => {
      this.reserves = data;
    }, err => {
      console.log('Erro ao listar as reservas', err);
    })
  }

  adicionarReserves(){
    this.reserveService.adicionarReservesToEquipment(this.reserve, this.time).subscribe(data => {
      this.reserve = new ReserveModel();
      document.getElementById('close')?.click();
      this.listarReserves();
    }, err => {
      debugger
      console.log('Erro ao cadastrar a reserva', err);
      alert(err.error);
      document.getElementById('close')?.click();
    })
  }

  deletarReserves(id: number){
    this.reserveService.deletarReserves(id).subscribe(data => {
      this.listarReserves();
    }, err => {
      console.log('Erro ao deletar a reserva', err);
    })
  }

  editarReserves(){
    this.reserveService.editarReserves(this.reserve).subscribe(data => {
      this.listarReserves();
    }, err => {
      console.log('Erro ao editar a reserva', err);
    })
  }

  getReserve(id: number){
    this.reserve = this.reserves.find(element => element.id === id)
  }

  prepareModal(){
    this.reserve = new ReserveModel();
    this.ListEquipment();
    this.ListUsers()
    this.listarRooms()
    this.listarMaterials()
  }

  ListEquipment(){
    this.equipmentService.listarEquipments().subscribe(data => {
      this.equipments = data;
    }, err => {
      console.log('Erro ao listar os equipamentos', err);
    })
  }

  ListUsers(){
    this.userService.listarUsers().subscribe(data => {
      this.users =  data;
    }, err => {
      console.log('Erro ao listar os usuários', err);
    })
  }

  listarRooms(){
    this.roomService.listarRooms().subscribe(data => {
      this.rooms = data;
    }, err => {
      console.log('Erro ao listar as salas', err);
    })
  }

  listarMaterials(){
    this.materialService.listarMaterials().subscribe(data => {
      this.materials = data;
    }, err => {
      console.log('Erro ao listar os materiais', err);
    })
  }

}
