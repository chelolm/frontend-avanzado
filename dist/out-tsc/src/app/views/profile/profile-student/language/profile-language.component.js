import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { Store, select } from '@ngrx/store';
import { selectUser } from '../../../../shared/state/user/selectors/user.selectors';
import { updateUser } from '../../../../shared/state/user/actions/user.actions';
var ProfileLanguageComponent = /** @class */ (function () {
    function ProfileLanguageComponent(route, router, _store) {
        var _this = this;
        this.route = route;
        this.router = router;
        this._store = _store;
        this.language = {};
        this.route.params.subscribe(function (params) {
            var user$ = _this._store.pipe(select(selectUser));
            user$.subscribe(function (usuario) {
                var user = usuario;
                var uid = +params.uid;
                _this.user = user;
                _this.language = (user.languages.find(function (language) { return language.uid === uid; }) ||
                    {});
            });
        });
    }
    ProfileLanguageComponent.prototype.ngOnInit = function () {
        this.loadSelectProperties();
        this.loadFormInstance();
    };
    ProfileLanguageComponent.prototype.loadSelectProperties = function () {
        this.languageLevels = MockData.LANGUAGES_LEVEL;
        this.languageNames = MockData.LANGUAGES_NAME;
    };
    ProfileLanguageComponent.prototype.loadFormInstance = function () {
        this.rForm = new FormGroup({
            level: new FormControl(this.language.level, [Validators.required]),
            name: new FormControl(this.language.name, [Validators.required]),
            date: new FormControl(this.language.date, [
                Validators.required,
                dateValidator()
            ])
        });
    };
    ProfileLanguageComponent.prototype.submit = function () {
        this.saveOrUpdate(tslib_1.__assign({}, this.language, this.rForm.value));
    };
    ProfileLanguageComponent.prototype.compareLevel = function (option1, option2) {
        return option1.uid === (option2 && option2.uid);
    };
    ProfileLanguageComponent.prototype.compareName = function (option1, option2) {
        return option1.uid === (option2 && option2.uid);
    };
    ProfileLanguageComponent.prototype.update = function (language) {
        var user = this.user;
        var languages = user.languages;
        var foundIndex = languages.findIndex(function (_language) { return _language.uid === language.uid; });
        languages[foundIndex] = language;
        user.languages = languages; // añadido al código original
        this._store.dispatch(new updateUser(user));
        this.router.navigate(['/admin/profile']);
    };
    ProfileLanguageComponent.prototype.save = function (language) {
        var user = this.user;
        var _language = MockData.fakeIncreaseID(user.languages, language);
        user.languages = user.languages.concat([_language]);
        this._store.dispatch(new updateUser(user));
        this.router.navigate(['/admin/profile']);
    };
    ProfileLanguageComponent.prototype.saveOrUpdate = function (language) {
        this.isNew() ? this.save(language) : this.update(language);
    };
    ProfileLanguageComponent.prototype.isNew = function () {
        return !!!this.language.uid;
    };
    ProfileLanguageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile-language',
            templateUrl: './profile-language.component.html',
            styleUrls: ['./profile-language.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            Store])
    ], ProfileLanguageComponent);
    return ProfileLanguageComponent;
}());
export { ProfileLanguageComponent };
//# sourceMappingURL=profile-language.component.js.map