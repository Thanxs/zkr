import { NgModule } from "@angular/core";
import { AuthComponent } from './auth.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { AuthRouterModule } from './auth-router.module';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { authReducer } from './reducers/index';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StoreModule.forFeature('auth', authReducer)
  ],
  exports: [AuthComponent]
})
export class AuthModule {

}
