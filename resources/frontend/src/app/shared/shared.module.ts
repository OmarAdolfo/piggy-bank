import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { NotificationService } from './services/notification.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { HomeComponent } from './components/home/home.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TwoDigitDecimaNumberDirective } from './directives/decimal.directive';
import { RadioButtonModule } from 'primeng/radiobutton';
import { LoaderComponent } from './components/loader/loader.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    AccordionModule,
    MessagesModule,
    MessageModule
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    TwoDigitDecimaNumberDirective,
    LoaderComponent,
    MenuComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    LoaderComponent,
    DropdownModule,
    CommonModule,
    ButtonModule,
    AccordionModule,
    CheckboxModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    TableModule,
    SelectButtonModule,
    InputSwitchModule,
    CalendarModule,
    TwoDigitDecimaNumberDirective,
    RadioButtonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NotificationService,
      ]
    };
  }
}