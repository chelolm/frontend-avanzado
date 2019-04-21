import { createSelector } from '@ngrx/store';

import { IAppState } from '../../app.state';
import { IUserState } from '../user.state';

const selectUsers = (state: IAppState) => state.user;

export const selectUser = createSelector(
  selectUsers,
  (state: IUserState) => state.user
);

