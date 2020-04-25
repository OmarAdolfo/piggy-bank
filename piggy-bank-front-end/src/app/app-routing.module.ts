import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginGuard } from './shared/guards/login.guard';
import { Role } from './shared/models/role';

const routes: Routes = [
  {
    path: "",
    canActivate: [LoginGuard],
    loadChildren: () =>
      import("./views/welcome/welcome.module").then(m => m.WelcomeComponentModule)
  },
  {
    path: "signin",
    canActivate: [LoginGuard],
    loadChildren: () =>
      import("./views/signin/signin.module").then(m => m.SigninModule)
  },
  {
    path: "login",
    canActivate: [LoginGuard],
    loadChildren: () =>
      import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "forgot-password",
    canActivate: [LoginGuard],
    loadChildren: () =>
      import("./views/forgot-password/forgot-password.module").then(m => m.ForgotPasswordModule)
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: "profile",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/profile/profile.module").then(
            m => m.ProfileModule
          )
      },
      {
        path: "type-expense",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/type-expense/type-expense.module").then(
            m => m.TypeExpenseModule
          ),
        data: {
          rol: Role.Admin.toString()
        }
      },
      {
        path: "users",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          ),
        data: {
          rol: Role.Admin.toString()
        }
      },
      {
        path: "dashboard",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then(
            m => m.DashboardModule
          ),
        data: {
          rol: Role.User.toString()
        }
      },
      {
        path: "stats",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/stats/stats.module").then(
            m => m.StatsModule
          )
      },
      {
        path: "savings-management",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/savings-management/savings-management.module").then(
            m => m.SavingManagementModule
          )
      },
      {
        path: "add-savings",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/add-savings/add-savings.module").then(
            m => m.AddSavingsModule
          )
      },
      {
        path: "templates",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/templates/templates.module").then(
            m => m.TemplatesModule
          )
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
