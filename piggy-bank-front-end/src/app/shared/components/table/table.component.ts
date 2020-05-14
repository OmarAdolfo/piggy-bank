import { Component, OnInit, Input } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class TableComponent implements OnInit {

  cars: any[];
  cols: any[];
  newCar: boolean;
  car = {
    vin: '',
    year: '',
    brand: '',
    color: ''
  };
  selectedCar: any;
  displayDialog: boolean;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.cars = [
      {
        vin: 'dsad231ff',
        year: '2012',
        brand: 'VW',
        color: 'orange'
      },
      {
        vin: 'dsad231ff',
        year: '2012',
        brand: 'VW',
        color: 'orange'
      },
      {
        vin: 'dsad231ff',
        year: '2012',
        brand: 'VW',
        color: 'orange'
      },
      {
        vin: 'dsad231ff',
        year: '2012',
        brand: 'VW',
        color: 'orange'
      }
    ];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {
      vin: '',
      year: '',
      brand: '',
      color: ''
    };
    this.displayDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Se ha guardado correctamente' });
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: any) {
    let car = {
      vin: '',
      year: '',
      brand: '',
      color: ''
    };
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete();
      }
    });
  }

}
