import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  years: any[];
  months: any[];

  constructor(
    private router: Router,
  ) {
    this.years = [
      { name: '2019', code: '2019' },
      { name: '2018', code: '2018' },
      { name: '2017', code: '2017' }
    ];
    this.months = [
      { name: 'Enero', code: '1' },
      { name: 'Febrero', code: '2' },
      { name: 'Marzo', code: '3' },
      { name: 'Abril', code: '4' },
      { name: 'Mayo', code: '5' },
      { name: 'Junio', code: '6' },
      { name: 'Julio', code: '7' },
      { name: 'Agosto', code: '8' },
      { name: 'Septiembre', code: '9' },
      { name: 'Octubre', code: '10' },
      { name: 'Noviembre', code: '11' },
      { name: 'Diciembre', code: '12' },
    ];
  }

  ngOnInit(): void {
  }

  editTemplate() {
    this.router.navigate(['/admin/templates/1']);
  }

  addTemplate() {
    this.router.navigate(['/admin/templates/new']);
  }

}
