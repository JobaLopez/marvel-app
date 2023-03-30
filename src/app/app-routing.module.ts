import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { HeroGridComponent } from './components/hero-grid/hero-grid.component';

const routes: Routes = [
  { path: '', component: HeroGridComponent },
  { path: 'details/:id', component: HeroDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
