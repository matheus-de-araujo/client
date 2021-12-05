import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../services/reserve.service';
import { ReserveModel } from './reserves.model';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.css']
})
export class ReservesComponent implements OnInit {

  reserve: ReserveModel = new ReserveModel();
  reserves: Array<any> = new Array();

  constructor(private reserveService: ReserveService) { }

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
    console.log(this.reserve);
    this.reserveService.adicionarReserves(this.reserve).subscribe(data => {
      this.reserve = new ReserveModel();
      document.getElementById('close')?.click();
      this.listarReserves();
    }, err => {
      console.log('Erro ao cadastrar a reserva', err);
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

  clearModal(){
    this.reserve = new ReserveModel();
  }

}
