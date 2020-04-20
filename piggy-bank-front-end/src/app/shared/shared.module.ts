import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './services/notification.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    AccordionModule,
    HttpClientModule,
    MessagesModule,
    MessageModule
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
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NotificationService
      ]
    };
  }
}