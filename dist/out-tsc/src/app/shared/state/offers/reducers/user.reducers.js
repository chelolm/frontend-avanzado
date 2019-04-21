import * as tslib_1 from "tslib";
import { EUserActions } from './../actions/user.actions';
import { initialUserState } from '../user.state';
export var userReducers = function (state, action) {
    if (state === void 0) { state = initialUserState; }
    switch (action.type) {
        case EUserActions.GetUserFailure: {
            return tslib_1.__assign({}, state, { user: undefined });
        }
        case EUserActions.GetUserSuccess: {
            return tslib_1.__assign({}, state, { user: action.payload });
        }
        case EUserActions.deleteStudy: {
            return tslib_1.__assign({}, state, state.user.studies.splice(state.user.studies.findIndex(function (study) { return study.uid === action.payload; }), 1));
        }
        case EUserActions.deleteLanguage: {
            return tslib_1.__assign({}, state, state.user.languages.splice(state.user.languages.findIndex(function (language) { return language.uid === action.payload; }), 1));
        }
        case EUserActions.updateUser: {
            return tslib_1.__assign({}, state, { user: action.payload });
        }
        default:
            return state;
    }
};
//# sourceMappingURL=user.reducers.js.map