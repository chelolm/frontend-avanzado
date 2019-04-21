import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../../../../shared/state/user/selectors/user.selectors';
import { updateUser } from '../../../../shared/state/user/actions/user.actions';
var ProfileStudyComponent = /** @class */ (function () {
    function ProfileStudyComponent(route, router, _store) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._store = _store;
        this.options = MockData.TYPE_STUDIES;
        this.study = {};
        this.route.params.subscribe(function (params) {
            var user$ = _this._store.pipe(select(selectUser));
            user$.subscribe(function (usuario) {
                var user = usuario;
                var uid = +params.uid;
                _this.user = user;
                _this.study = (user.studies.find(function (study) { return study.uid === uid; }) || {});
            });
        });
        this.studiesForm = new FormGroup({
            option: new FormControl(this.study.level, [Validators.required])
        });
    }
    ProfileStudyComponent.prototype.compareOption = function (option1, option2) {
        return option1.uid === (option2 && option2.uid);
    };
    ProfileStudyComponent.prototype.update = function (study) {
        var user = this.user;
        var studies = user.studies;
        var foundIndex = studies.findIndex(function (_study) { return _study.uid === study.uid; });
        studies[foundIndex] = study;
        user.studies = studies; // añadido al código original
        this._store.dispatch(new updateUser(user));
        this.router.navigate(['/admin/profile']);
    };
    ProfileStudyComponent.prototype.save = function (study) {
        var user = this.user;
        var _study = MockData.fakeIncreaseID(user.studies, study);
        user.studies = user.studies.concat([_study]);
        this._store.dispatch(new updateUser(user));
        this.router.navigate(['/admin/profile']);
    };
    ProfileStudyComponent.prototype.saveOrUpdate = function (study) {
        study.level = this.studiesForm.get('option').value;
        this.isNew() ? this.save(study) : this.update(study);
    };
    ProfileStudyComponent.prototype.isNew = function () {
        return !!!this.study.uid;
    };
    ProfileStudyComponent.prototype.isSelectVocational = function () {
        var value = this.studiesForm.get('option').value;
        return value && value.uid === MockData.TYPE_STUDIES[0].uid;
    };
    ProfileStudyComponent.prototype.isSelectUniversity = function () {
        var value = this.studiesForm.get('option').value;
        return value && value.uid === MockData.TYPE_STUDIES[1].uid;
    };
    ProfileStudyComponent.prototype.backProfile = function () {
        this.router.navigate(['/admin/profile']);
    };
    ProfileStudyComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-study',
            templateUrl: './profile-study.component.html',
            styleUrls: ['./profile-study.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            Store])
    ], ProfileStudyComponent);
    return ProfileStudyComponent;
}());
export { ProfileStudyComponent };
//# sourceMappingURL=profile-study.component.js.map