import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../../../shared/state/user/selectors/user.selectors';
import { deleteStudy, deleteLanguage } from '../../../shared/state/user/actions/user.actions';
var ProfileStudentComponent = /** @class */ (function () {
    function ProfileStudentComponent(_store) {
        this._store = _store;
        this.user = this._store.pipe(select(selectUser));
    }
    ProfileStudentComponent.prototype.deleteStudy = function (studyID) {
        this._store.dispatch(new deleteStudy(studyID));
    };
    ProfileStudentComponent.prototype.deleteLanguage = function (languageID) {
        this._store.dispatch(new deleteLanguage(languageID));
    };
    ProfileStudentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-student',
            templateUrl: './profile-student.component.html',
            styleUrls: ['./profile-student.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Store])
    ], ProfileStudentComponent);
    return ProfileStudentComponent;
}());
export { ProfileStudentComponent };
//# sourceMappingURL=profile-student.component.js.map