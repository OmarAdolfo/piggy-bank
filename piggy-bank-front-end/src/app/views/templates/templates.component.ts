import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from './template.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Template } from 'src/app/shared/models/template';
import { MessageService, ConfirmationService } from 'primeng/api';
import { MonthService } from 'src/app/shared/services/month-service.service';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class TemplatesComponent implements OnInit {

  years: any[];
  templatesTotal: Template[];
  templates: Template[];
  months: any[];
  addForm: FormGroup;
  cloneForm: FormGroup;
  annoRegex = /^(\d{4})$/;
  selectedYear: any;
  optionCreation: string = 'Añadir plantilla';

  constructor(
    private router: Router,
    private templateService: TemplateService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private monthService: MonthService
  ) {
    this.months = this.monthService.getMonths();
  }

  ngOnInit(): void {
    this.getTemplates();
    this.buildForm();
  }

  buildForm() {
    this.addForm = this.formBuilder.group({
      anno: new FormControl('', [Validators.required, Validators.pattern(this.annoRegex)]),
      mes: new FormControl('', Validators.required)
    });

    this.cloneForm = this.formBuilder.group({
      anno: new FormControl('', [Validators.required, Validators.pattern(this.annoRegex)]),
      mes: new FormControl('', Validators.required),
      newAnno: new FormControl('', [Validators.required, Validators.pattern(this.annoRegex)]),
      newMes: new FormControl('', Validators.required)
    });
  }

  getTemplates() {
    this.templateService.get().subscribe(
      (response: any) => {
        this.templatesTotal = response.data;
        this.years = response.years;
        if (this.years && this.years.length > 0) {
          this.calculateTemplates(this.years[0]);
        }
      }
    );
  }

  getMonth(monthValue: number) {
    return this.monthService.getMonths().find(month => month.value === monthValue).name;
  }

  selectYear(eve: any) {
    this.calculateTemplates();
  }

  editTemplate(id: number) {
    this.router.navigate(['/home/templates/' + id]);
  }

  addTemplate() {
    const template: Template = new Template();
    template.anno = this.addForm.get('anno').value;
    template.mes = this.addForm.get('mes').value.value;
    this.templateService.add(template).subscribe(
      (response: any) => {
        let templatesTotal: Template[] = [...this.templatesTotal];
        templatesTotal.push(response.data);
        this.templatesTotal = templatesTotal;
        this.years = response.years;
        this.calculateTemplates();
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
      }
    );
  }

  clone() {
    const template = {
      anno: this.cloneForm.get('anno').value,
      mes: this.cloneForm.get('mes').value.value,
      newAnno: this.cloneForm.get('newAnno').value,
      newMes: this.cloneForm.get('newMes').value.value,
    }
    this.templateService.clone(template).subscribe(
      (response: any) => {
        let templatesTotal: Template[] = [...this.templatesTotal];
        templatesTotal.push(response.data);
        this.templatesTotal = templatesTotal;
        this.years = response.years;
        this.calculateTemplates();
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
      },
      response => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
      }
    );
  }

  calculateTemplates(yearSelected?: number) {
    this.selectedYear = yearSelected ? yearSelected : this.selectedYear;
    this.templates = this.templatesTotal
      .filter(template => template.anno === this.selectedYear.anno)
      .sort((a: Template, b: Template) => a.mes > b.mes ? 1 : -1);
  }

  confirm(id: number) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas borrar?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(id);
      }
    });
  }

  delete(id: number) {
    this.templateService.delete(id).subscribe(
      (response: any) => {
        this.templatesTotal = this.templatesTotal.filter(templateTotal => templateTotal.id !== id);
        this.templates = this.templates.filter(template => template.id !== id);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message });
      }
    );
  }

}
