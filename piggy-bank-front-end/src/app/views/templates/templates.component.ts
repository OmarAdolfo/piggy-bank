import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from './template.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Template } from 'src/app/shared/models/template';
import { MessageService, ConfirmationService } from 'primeng/api';

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
  form: FormGroup;
  annoRegex = /^(\d{4})$/;
  selectedYear: any;

  constructor(
    private router: Router,
    private templateService: TemplateService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.months = [
      { name: 'Enero', value: 1 },
      { name: 'Febrero', value: 2 },
      { name: 'Marzo', value: 3 },
      { name: 'Abril', value: 4 },
      { name: 'Mayo', value: 5 },
      { name: 'Junio', value: 6 },
      { name: 'Julio', value: 7 },
      { name: 'Agosto', value: 8 },
      { name: 'Septiembre', value: 9 },
      { name: 'Octubre', value: 10 },
      { name: 'Noviembre', value: 11 },
      { name: 'Diciembre', value: 12 },
    ];
  }

  ngOnInit(): void {
    this.getTemplates();
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      anno: new FormControl('', [Validators.required, Validators.pattern(this.annoRegex)]),
      mes: new FormControl('', Validators.required)
    });
  }

  getTemplates() {
    this.templateService.get().subscribe(
      (response: any) => {
        this.templatesTotal = response.data;
        this.years = response.years;
      }
    );
  }

  getMonth(monthValue: number) {
    return this.months.find(month => month.value === monthValue).name;
  }

  selectYear(eve: any) {
    this.calculateTemplates();
  }

  editTemplate() {
    this.router.navigate(['/admin/templates/1']);
  }

  addTemplate() {
    const template: Template = new Template();
    template.anno = this.form.get('anno').value;
    template.mes = this.form.get('mes').value.value;
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
        console.log(response);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: response.error.message });
      }
    );
  }

  calculateTemplates() {
    console.log(this.selectedYear);
    if (this.selectedYear) {
      this.templates = this.templatesTotal
      .filter(template => template.anno === this.selectedYear.anno)
      .sort((a: Template, b: Template) => a.mes > b.mes ? 1 : -1);
    }
  }

  confirm(id: number) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de que deseas borrar?',
      header: 'Confirmation',
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
