import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    TableModule, 
    DialogModule, 
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    AccordionModule
  ],
  declarations: [
    NavbarComponent,
    AdminComponent,
    SidebarComponent,
    TableComponent
  ],
  exports: [
    NavbarComponent,
    AdminComponent,
    TableComponent,
    DropdownModule,
    CommonModule,
    ButtonModule,
    AccordionModule,
    CheckboxModule,
    TooltipModule
  ]
})
export class SharedModule {}