import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDocsComponent } from './pages/api-docs/api-docs.component';
import { AllDocsComponent } from './pages/all-docs/all-docs.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'api-docs', component: ApiDocsComponent },
  { path: 'all-docs', component: AllDocsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
