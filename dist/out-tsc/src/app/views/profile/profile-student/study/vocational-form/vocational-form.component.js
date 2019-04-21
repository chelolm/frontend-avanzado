import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VocationalStudy } from 'src/app/shared/models/study.model';
import { MockData } from 'src/app/shared/mock-data';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
var VocationalFormComponent = /** @class */ (function () {
    function VocationalFormComponent() {
        this.onSave = new EventEmitter();
        this.study = {};
    }
    VocationalFormComponent.prototype.ngOnInit = function () {
        this.loadSelectProperties();
        this.loadFormInstance();
    };
    VocationalFormComponent.prototype.loadSelectProperties = function () {
        this.institutions = MockData.VOCATIONAL_INSTITUTION;
        this.categories = MockData.VOCATIONAL_CATEGORY;
        this.titles = MockData.VOCATIONAL_TITLE;
        this.grades = MockData.VOCATIONAL_GRADES;
    };
    VocationalFormComponent.prototype.loadFormInstance = function () {
        this.rForm = new FormGroup({
            institution: new FormControl(this.study.institution, [
                Validators.required
            ]),
            category: new FormControl(this.study.category, [Validators.required]),
            grade: new FormControl(this.study.grade, [Validators.required]),
            title: new FormControl(this.study.title, [Validators.required]),
            date: new FormControl(this.study.date, [
                Validators.required,
                dateValidator()
            ]),
            dual: new FormControl(this.study.dual, []),
            bilingue: new FormControl(this.study.bilingue, [])
        });
    };
    VocationalFormComponent.prototype.submit = function () {
        this.onSave.emit(tslib_1.__assign({}, this.study, this.rForm.value));
    };
    VocationalFormComponent.prototype.compareInstitution = function (institution1, institution2) {
        return institution1.uid === (institution2 && institution2.uid);
    };
    VocationalFormComponent.prototype.compareCategory = function (category1, category2) {
        return category1.uid === (category2 && category2.uid);
    };
    VocationalFormComponent.prototype.compareTitle = function (title1, title2) {
        return title1.uid === (title2 && title2.uid);
    };
    VocationalFormComponent.prototype.compareGrade = function (grade1, grade2) {
        return grade1.uid === (grade2 && grade2.uid);
    };
    VocationalFormComponent.prototype.save = function () {
        var study = tslib_1.__assign({ certificate: false }, this.rForm.value);
        this.onSave.emit(study);
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], VocationalFormComponent.prototype, "onSave", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", VocationalStudy)
    ], VocationalFormComponent.prototype, "study", void 0);
    VocationalFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-vocational-form',
            templateUrl: './vocational-form.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], VocationalFormComponent);
    return VocationalFormComponent;
}());
export { VocationalFormComponent };
//# sourceMappingURL=vocational-form.component.js.map