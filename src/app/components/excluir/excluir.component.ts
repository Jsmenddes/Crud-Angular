import { DadosService } from './../usuario/dados.service';
import { Component, OnInit } from '@angular/core';
import { Dados } from '../usuario/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  users!: Dados

  constructor(private dadosservice: DadosService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.dadosservice.readById(id!).subscribe((users) => {
    this.users = users;
    });

  }

  deleteName(): void {
this.dadosservice.delete(`${this.users.id}`).subscribe(() => {
  this.dadosservice.showMessage("Usuário excluido com sucesso!")
  this.router.navigate(["usuario"]);
});

}
  cancel(): void {
  this.router.navigate(['/usuario'])
}

}
