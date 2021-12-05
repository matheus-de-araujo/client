import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: UserModel = new UserModel();
  users: Array<any> = new Array();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.listarUsers();
  }

  listarUsers(){
    this.userService.listarUsers().subscribe(data => {
      this.users = data._embedded.users;
    }, err => {
      console.log('Erro ao listar os usuários', err);
    })
  }

  adicionarUsers(){
    console.log(this.user);
    this.userService.adicionarUsers(this.user).subscribe(data => {
      this.user = new UserModel();
      document.getElementById('close')?.click();
      this.listarUsers();
    }, err => {
      console.log('Erro ao cadastrar o usuário', err);
    })
  }

  deletarUsers(id: number){
    this.userService.deletarUsers(id).subscribe(data => {
      this.listarUsers();
    }, err => {
      console.log('Erro ao deletar o usuário', err);
    })
  }

  editarUsers(){
    this.userService.editarUsers(this.user).subscribe(data => {
      this.listarUsers();
    }, err => {
      console.log('Erro ao editar o usuário', err);
    })
  }

  getUser(id: number){
    this.user = this.users.find(element => element.id === id)
  }

  clearModal(){
    this.user = new UserModel();
  }

}
