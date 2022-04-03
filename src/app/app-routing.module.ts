import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KingdomDashboardComponent } from './game/kingdom-dashboard/kingdom-dashboard.component';

const routes: Routes = [
  {
    path: "kingdom/dashboard",
    component: KingdomDashboardComponent
  },
  {
    path: "",
    redirectTo: "/kingdom/dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
