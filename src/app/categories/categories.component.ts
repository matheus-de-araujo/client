import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from './categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: CategoryModel = new CategoryModel();
  categories: Array<any> = new Array();

  constructor(private roomService: CategoryService) { }

  ngOnInit(): void {
    this.listarCategories();
  }

  listarCategories(){
    this.roomService.listarCategories().subscribe(data => {
      this.categories = data;
    }, err => {
      console.log('Erro ao listar as categorias', err);
    })
  }

  adicionarCategories(){
    console.log(this.category);
    this.roomService.adicionarCategories(this.category).subscribe(data => {
      this.category = new CategoryModel();
      document.getElementById('close')?.click();
      this.listarCategories();
    }, err => {
      console.log('Erro ao cadastrar a categoria', err);
    })
  }

  deletarCategories(id: number){
    this.roomService.deletarCategories(id).subscribe(data => {
      this.listarCategories();
    }, err => {
      console.log('Erro ao deletar a categoria', err);
    })
  }

  editarCategories(){
    this.roomService.editarCategories(this.category).subscribe(data => {
      this.listarCategories();
    }, err => {
      console.log('Erro ao editar a categoria', err);
    })
  }

  getCategory(id: number){
    this.category = this.categories.find(element => element.id === id)
  }

  clearModal(){
    this.category = new CategoryModel();
  }

}
