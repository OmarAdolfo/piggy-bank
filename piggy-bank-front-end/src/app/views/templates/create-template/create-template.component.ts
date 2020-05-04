import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss']
})
export class CreateTemplateComponent implements OnInit {

  isNewTemplate: boolean;
  types: any[];
  spendings: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { 
    this.types = [
      { name: 'Elige el tipo de recurso...', code: '' },
      { name: 'Ingresos', code: 'ingresos' },
      { name: 'Gastos primarios', code: 'gastos-primarios' },
      { name: 'Gastos secundarios', code: 'gastos-secundarios' }
    ];
    this.spendings = [
      { name: 'Elige el tipo de gasto...', code: '' },
      { name: 'Nómina', code: 'ingresos' },
      { name: 'Alquiler', code: 'gastos-primarios' },
      { name: 'Spotify', code: 'gastos-secundarios' }
    ];
  }

  ngOnInit(): void {
    this.isNewTemplate = this.activatedRoute.snapshot.params.id === 'new' ? true : false;
  }

  back() {
    this.location.back();
  }

  addSpending() {}

  delete() {}

  save() {}

  goExpenses() {
    this.router.navigate(['/home/expenses']);
  }

}
