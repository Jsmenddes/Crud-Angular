import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Dados } from '../usuario/user.model';
import { ReadDataSource } from './read-datasource';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements AfterViewInit {

  users: Dados[] = [];
  displayedColumns = ['name','age'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Dados>;
  dataSource: ReadDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  constructor() {
    this.dataSource = new ReadDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
