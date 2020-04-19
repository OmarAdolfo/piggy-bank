import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './shared/components/admin/admin.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: () =>
      import("./views/home/home.module").then(m => m.HomeModule),
    data: { title: "Página bienvenida" }
  },
  {
    path: "login",
    loadChildren: () =>
      import("./views/login/login.module").then(m => m.LoginModule),
    data: { title: "Iniciar sesión" }
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./views/signin/signin.module").then(m => m.SigninModule),
    data: { title: "Registrarse" }
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./views/forgot-password/forgot-password.module").then(m => m.ForgotPasswordModule),
    data: { title: "Olvidaste contraseña" }
  },
  {
    path: "admin",
    component: AdminComponent,
    /* canActivate: [AuthGuard], */
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          ),
        data: { title: "Dashboard" }
      },
      {
        path: "stats",
        loadChildren: () =>
          import("./views/stats/stats.module").then(
            m => m.StatsModule
          ),
        data: { title: "Estadísticas" }
      },
      {
        path: "savings-management",
        loadChildren: () =>
          import("./views/savings-management/savings-management.module").then(
            m => m.SavingManagementModule
          ),
        data: { title: "Gestión de ahorros" }
      },
      {
        path: "add-savings",
        loadChildren: () =>
          import("./views/add-savings/add-savings.module").then(
            m => m.AddSavingsModule
          ),
        data: { title: "Añadir ahorros" }
      },
      {
        path: "templates",
        loadChildren: () =>
          import("./views/templates/templates.module").then(
            m => m.TemplatesModule
          ),
        data: { title: "Plantillas" }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
