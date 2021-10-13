import { DadosService } from './dados.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Dados } from './user.model';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from  '@angular/material/table' ;
import { MatTable } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ReadDataSource } from '../read/read-datasource';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, AfterViewInit {

  users: Dados[] = [];
  displayedColumns = ['name','age', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Dados>;
  dataSource: ReadDataSource;


  constructor(private router: Router, private dadosservice:DadosService,) {
    this.dataSource = new ReadDataSource();
  }

  ngOnInit(): void {
  this.dadosservice.read().subscribe(users => {
  this.users = users
  console.log(users)

})

  }
  navigateToNameCreate(): void {
    console.log('Navegando...')
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}

