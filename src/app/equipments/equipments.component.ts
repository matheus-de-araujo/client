import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../services/equipment.service';
import { EquipmentModel } from './equipments.model';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  equipment: EquipmentModel = new EquipmentModel();
  equipments: Array<any> = new Array();

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.listarEquipments();
  }

  listarEquipments(){
    this.equipmentService.listarEquipments().subscribe(data => {
      this.equipments = data;
    }, err => {
      console.log('Erro ao listar os usuários', err);
    })
  }

  adicionarEquipments(){
    console.log(this.equipment);
    this.equipmentService.adicionarEquipments(this.equipment).subscribe(data => {
      this.equipment = new EquipmentModel();
      document.getElementById('close')?.click();
      this.listarEquipments();
    }, err => {
      console.log('Erro ao cadastrar o usuário', err);
    })
  }

  deletarEquipments(id: number){
    this.equipmentService.deletarEquipments(id).subscribe(data => {
      this.listarEquipments();
    }, err => {
      console.log('Erro ao deletar o usuário', err);
    })
  }

  editarEquipments(){
    this.equipmentService.editarEquipments(this.equipment).subscribe(data => {
      this.listarEquipments();
    }, err => {
      console.log('Erro ao editar o usuário', err);
    })
  }

  getEquipment(id: number){
    this.equipment = this.equipments.find(element => element.id === id)
  }

  clearModal(){
    this.equipment = new EquipmentModel();
  }

}
