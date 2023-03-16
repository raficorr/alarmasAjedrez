import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecordatorioComponent } from './recordatorio/recordatorio.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recordatorio', component: RecordatorioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
