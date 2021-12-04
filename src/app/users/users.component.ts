import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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

}
