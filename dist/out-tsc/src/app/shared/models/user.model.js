import * as tslib_1 from "tslib";
export function createNewUser(user) {
    return tslib_1.__assign({}, user, { name: '', surname: '', id: -1, email: '', roles: [''], 
        /*  avatar_hash: this.avatar_hash || null, */
        experiencies: [], studies: [], languages: [], offers: [] });
}
//# sourceMappingURL=user.model.js.map