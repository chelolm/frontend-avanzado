import { EUserActions } from './../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserFailure: {
      return {
        ...state,
        user: undefined
      };
    }
    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }
    case EUserActions.deleteStudy: {
      return {
        ...state,
        ...state.user.studies.splice(state.user.studies.findIndex(study => study.uid === action.payload), 1) 
      };
    }
    case EUserActions.deleteLanguage: {
      return {
        ...state,
        ...state.user.languages.splice(state.user.languages.findIndex(language => language.uid === action.payload), 1) 
      };
    }
    case EUserActions.updateUser: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};
