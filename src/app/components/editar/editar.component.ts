import { Dados } from './../usuario/user.model';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../usuario/dados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  users!: Dados;

  constructor(
    private dadosservice: DadosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.dadosservice.readById(id!).subscribe(users => {
      this.users = users
    });
  }



  updateName(): void {
    this.dadosservice.update(this.users).subscribe(() => {
    this.dadosservice.showMessage('Usuário editado com sucesso!')
    this.router.navigate(["usuario"]);
  });
}
  cancel(): void {
    this.router.navigate(['/usuario'])
  }
}
