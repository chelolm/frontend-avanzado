import { routerReducer } from '@ngrx/router-store';
//import { configReducers } from './config.reducers';
import { userReducers } from './user.reducers';
export var appReducers = {
    router: routerReducer,
    user: userReducers
};
//# sourceMappingURL=app.reducers.js.map