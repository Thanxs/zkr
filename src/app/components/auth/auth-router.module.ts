import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
  { path: 'login', component: AuthComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRouterModule {}
