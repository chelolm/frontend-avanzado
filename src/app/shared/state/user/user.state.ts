import { User } from '../../models/user.model';

export interface IUserState {
  user: User;
}

export const initialUserState: IUserState = {
  user: null
};
