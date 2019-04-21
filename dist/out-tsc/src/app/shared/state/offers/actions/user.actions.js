export var EUserActions;
(function (EUserActions) {
    EUserActions["UserLogin"] = "[User] Login";
    EUserActions["GetUserSuccess"] = "[User] Get User Success";
    EUserActions["GetUserFailure"] = "[User] Get User Failure";
    EUserActions["updateUser"] = "[User] Update Account";
    EUserActions["deleteStudy"] = "[User] Delete Study";
    EUserActions["deleteLanguage"] = "[User] Delete Language";
})(EUserActions || (EUserActions = {}));
var UserLogin = /** @class */ (function () {
    function UserLogin(payload) {
        this.payload = payload;
        this.type = EUserActions.UserLogin;
    }
    return UserLogin;
}());
export { UserLogin };
var GetUserFailure = /** @class */ (function () {
    function GetUserFailure() {
        this.type = EUserActions.GetUserFailure;
    }
    return GetUserFailure;
}());
export { GetUserFailure };
var GetUserSuccess = /** @class */ (function () {
    function GetUserSuccess(payload) {
        this.payload = payload;
        this.type = EUserActions.GetUserSuccess;
    }
    return GetUserSuccess;
}());
export { GetUserSuccess };
var updateUser = /** @class */ (function () {
    function updateUser(payload) {
        this.payload = payload;
        this.type = EUserActions.updateUser;
    }
    return updateUser;
}());
export { updateUser };
var deleteStudy = /** @class */ (function () {
    function deleteStudy(payload) {
        this.payload = payload;
        this.type = EUserActions.deleteStudy;
    }
    return deleteStudy;
}());
export { deleteStudy };
var deleteLanguage = /** @class */ (function () {
    function deleteLanguage(payload) {
        this.payload = payload;
        this.type = EUserActions.deleteLanguage;
    }
    return deleteLanguage;
}());
export { deleteLanguage };
//# sourceMappingURL=user.actions.js.map