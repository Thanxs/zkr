import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from './action-types';
import { AuthState } from './reducers/index';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AuthState>
  ) { }

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  public submit(): void {
    const { email, password } = this.form.value;

    const user = { email, id: '777' };

    this.store.dispatch(AuthActions.login({ user }));
  }
}
