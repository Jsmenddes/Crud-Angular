import { DadosService } from './dados.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dados } from './user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  users: Dados[] = [];
  displayedColumns = ['name','age', 'action'];

  constructor(private router: Router, private dadosservice:DadosService) { }

  ngOnInit(): void {
this.dadosservice.read().subscribe(users => {
  this.users = users
  console.log(users)
})
  }
  navigateToNameCreate(): void {
    console.log('Navegando...')
  }

}

