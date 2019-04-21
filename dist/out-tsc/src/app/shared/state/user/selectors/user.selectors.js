import { createSelector } from '@ngrx/store';
var selectUsers = function (state) { return state.user; };
export var selectUser = createSelector(selectUsers, function (state) { return state.user; });
//# sourceMappingURL=user.selectors.js.map