import * as tslib_1 from "tslib";
/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */
import { Component } from '@angular/core';
var AppComfirmComponent = /** @class */ (function () {
    function AppComfirmComponent() {
    }
    AppComfirmComponent = tslib_1.__decorate([
        Component({
            selector: 'app-confirm',
            template: "\n    <h1 matDialogTitle>{{ data.title }}</h1>\n    <div mat-dialog-content>{{ data.message }}</div>\n    <div mat-dialog-actions>\n      <button\n        type=\"button\"\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"dialogRef.close(true)\"\n      >\n        OK\n      </button>\n      &nbsp;\n      <span fxFlex></span>\n      <button\n        type=\"button\"\n        color=\"accent\"\n        mat-raised-button\n        (click)=\"dialogRef.close(false)\"\n      >\n        Cancel\n      </button>\n    </div>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppComfirmComponent);
    return AppComfirmComponent;
}());
export { AppComfirmComponent };
//# sourceMappingURL=app-confirm.component.js.map