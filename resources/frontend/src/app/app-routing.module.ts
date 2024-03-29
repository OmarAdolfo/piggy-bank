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
        path: "type-profit",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/type-profit/type-profit.module").then(
            m => m.TypeProfitModule
          ),
        data: {
          rol: Role.Admin.toString()
        }
      },
      {
        path: "users",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/user/user.module").then(
            m => m.UserModule
          ),
        data: {
          rol: Role.Admin.toString()
        }
      },
      {
        path: "good-practices",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/good-practice/good-practice.module").then(
            m => m.GoodPracticeModule
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
        path: "expenses",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/expense/expense.module").then(
            m => m.ExpenseModule
          ),
        data: {
          rol: Role.User.toString()
        }
      },
      {
        path: "objectives",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/meta-saving/meta-saving.module").then(
            m => m.MetaSavingModule
          ),
        data: {
          rol: Role.User.toString()
        }
      },
      {
        path: "profits",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/profit/profit.module").then(
            m => m.ProfitModule
          ),
        data: {
          rol: Role.User.toString()
        }
      },
      {
        path: "templates",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/templates/templates.module").then(
            m => m.TemplatesModule
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
          ),
        data: {
          rol: Role.User.toString()
        },
      },
      {
        path: "help",
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import("./views/help/help.module").then(
            m => m.HelpModule
          ),
        data: {
          rol: Role.All.toString()
        }
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
