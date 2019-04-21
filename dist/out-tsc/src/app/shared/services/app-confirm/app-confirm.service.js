import * as tslib_1 from "tslib";
/* import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material'; */
import { Injectable } from '@angular/core';
var AppConfirmService = /** @class */ (function () {
    function AppConfirmService( /* private dialog: MatDialog */) {
    }
    AppConfirmService.prototype.confirm = function (data) {
        if (data === void 0) { data = {}; }
        /*  data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef: MatDialogRef<AppComfirmComponent>;
        dialogRef = this.dialog.open(AppComfirmComponent, {
          width: '380px',
          disableClose: true,
          data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed(); */
    };
    AppConfirmService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppConfirmService);
    return AppConfirmService;
}());
export { AppConfirmService };
//# sourceMappingURL=app-confirm.service.js.map