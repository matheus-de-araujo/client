import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../services/material.service';
import { MaterialModel } from './materials.model';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  material: MaterialModel = new MaterialModel();
  materials: Array<any> = new Array();

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.listarMaterials();
  }

  listarMaterials(){
    this.materialService.listarMaterials().subscribe(data => {
      this.materials = data;
    }, err => {
      console.log('Erro ao listar os materiais', err);
    })
  }

  adicionarMaterials(){
    console.log(this.material);
    this.materialService.adicionarMaterials(this.material).subscribe(data => {
      this.material = new MaterialModel();
      document.getElementById('close')?.click();
      this.listarMaterials();
    }, err => {
      console.log('Erro ao cadastrar o material', err);
    })
  }

  deletarMaterials(id: number){
    this.materialService.deletarMaterials(id).subscribe(data => {
      this.listarMaterials();
    }, err => {
      console.log('Erro ao deletar o material', err);
    })
  }

  editarMaterials(){
    this.materialService.editarMaterials(this.material).subscribe(data => {
      this.listarMaterials();
    }, err => {
      console.log('Erro ao editar o material', err);
    })
  }

  getMaterial(id: number){
    this.material = this.materials.find(element => element.id === id)
  }

  clearModal(){
    this.material = new MaterialModel();
  }

}
