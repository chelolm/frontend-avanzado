import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
/* import { MatSnackBar } from '@angular/material'; */
var NotificationsService = /** @class */ (function () {
    function NotificationsService( /* private snackBar: MatSnackBar */) {
    }
    NotificationsService.prototype.showNotification = function (message, action) {
        /*     this.snackBar.open(message, action, {
          duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
        }); */
    };
    NotificationsService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());
export { NotificationsService };
//# sourceMappingURL=notifications.service.js.map