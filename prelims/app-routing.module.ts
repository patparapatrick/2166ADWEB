import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PartnerComponent } from './partner/partner.component';
import { AboutComponent } from './about/about.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join', component: JoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
