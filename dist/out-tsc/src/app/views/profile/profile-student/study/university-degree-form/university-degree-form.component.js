import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CollegeStudy } from 'src/app/shared/models/study.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
var UniversityDegreeComponent = /** @class */ (function () {
    function UniversityDegreeComponent() {
        this.onSave = new EventEmitter();
        this.study = {};
    }
    UniversityDegreeComponent.prototype.ngOnInit = function () {
        this.loadSelectProperties();
        this.loadFormInstance();
    };
    UniversityDegreeComponent.prototype.loadSelectProperties = function () { };
    UniversityDegreeComponent.prototype.loadFormInstance = function () {
        this.rForm = new FormGroup({
            institution: new FormControl(this.study.institution, [
                Validators.required
            ]),
            title: new FormControl(this.study.title, [Validators.required]),
            date: new FormControl(this.study.date, [
                Validators.required,
                dateValidator()
            ]),
            bilingue: new FormControl(this.study.bilingue, [])
        });
    };
    UniversityDegreeComponent.prototype.submit = function () {
        this.onSave.emit(tslib_1.__assign({}, this.study, this.rForm.value));
    };
    UniversityDegreeComponent.prototype.save = function () {
        var study = tslib_1.__assign({ certificate: false }, this.rForm.value);
        this.onSave.emit(study);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], UniversityDegreeComponent.prototype, "onSave", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", CollegeStudy)
    ], UniversityDegreeComponent.prototype, "study", void 0);
    UniversityDegreeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-university-degree-form',
            templateUrl: './university-degree-form.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UniversityDegreeComponent);
    return UniversityDegreeComponent;
}());
export { UniversityDegreeComponent };
//# sourceMappingURL=university-degree-form.component.js.map