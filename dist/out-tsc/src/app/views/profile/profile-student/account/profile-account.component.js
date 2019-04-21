import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { documentNumberValidator } from 'src/app/shared/directives/document-number-validator.directive';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../../../../shared/state/user/selectors/user.selectors';
import { updateUser } from '../../../../shared/state/user/actions/user.actions';
var ProfileAccountComponent = /** @class */ (function () {
    function ProfileAccountComponent(router, _store) {
        this.router = router;
        this._store = _store;
    }
    ProfileAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user$ = this._store.pipe(select(selectUser));
        user$.subscribe(function (user) {
            _this.user = user;
            _this.loadSelectProperties();
            _this.loadFormInstance();
        });
    };
    ProfileAccountComponent.prototype.loadSelectProperties = function () {
        this.documentsType = MockData.DOCUMENTS_TYPE;
        this.municipes = MockData.MUNICIPES;
        this.provinces = MockData.PROVINCES;
    };
    ProfileAccountComponent.prototype.loadFormInstance = function () {
        this.rForm = new FormGroup({
            name: new FormControl(this.user.name, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(55),
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            surname: new FormControl(this.user.surname, [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(55),
                Validators.pattern(/^[a-zA-Z]+$/)
            ]),
            phone: new FormControl(this.user.phone, [
                Validators.pattern(/^[0-9]{6,}$/),
                Validators.required
            ]),
            phone2: new FormControl(this.user.phone2, [
                Validators.pattern(/^[0-9]{6,}$/),
                Validators.required
            ]),
            birthdate: new FormControl(this.user.birthdate, [
                Validators.required,
                dateValidator()
            ]),
            documentType: new FormControl(this.user.documentType, [
                Validators.required
            ]),
            documentNumber: new FormControl(this.user.documentNumber, [
                Validators.required
            ]),
            street: new FormControl(this.user.address.street, [
                Validators.required
            ]),
            municipe: new FormControl(this.user.address.municipe, [
                Validators.required
            ]),
            province: new FormControl(this.user.address.province, [
                Validators.required
            ]),
            aboutMe: new FormControl(this.user.aboutMe),
            otherCompetences: new FormControl(this.user.aboutMe),
            license: new FormControl(this.user.license)
        }, documentNumberValidator());
    };
    ProfileAccountComponent.prototype.save = function () {
        var user = tslib_1.__assign({}, this.user, this.rForm.value);
        this._store.dispatch(new updateUser(user));
        this.router.navigate(['/admin/profile']);
    };
    ProfileAccountComponent.prototype.compareByUID = function (option1, option2) {
        return option1.uid === (option2 && option2.uid);
    };
    ProfileAccountComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-account',
            templateUrl: './profile-account.component.html',
            styleUrls: ['./profile-account.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, Store])
    ], ProfileAccountComponent);
    return ProfileAccountComponent;
}());
export { ProfileAccountComponent };
//# sourceMappingURL=profile-account.component.js.map