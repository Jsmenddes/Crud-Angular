import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../usuario/dados.service';
import { Dados } from '../usuario/user.model';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  users: Dados = {
    name:'',
    age: null as any

  }
  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit(): void {

  }
  createName(): void {
    this.dadosService.create(this.users).subscribe(() => {
    this.dadosService.showMessage('Usuário cadastrado com sucesso!')
      this.router.navigate(['/usuario'])
    })
  }
  cancel(): void {
    this.router.navigate(['/usuario'])

  }

}
