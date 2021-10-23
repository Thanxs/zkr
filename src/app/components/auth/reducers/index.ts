import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../user';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: {
    id: '',
    email: ''
  }
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action): AuthState => {
    return {
      user: action.user
    }
  })
);
