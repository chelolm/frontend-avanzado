import * as tslib_1 from "tslib";
import { Directive, ElementRef, Attribute } from '@angular/core';
var FontSizeDirective = /** @class */ (function () {
    function FontSizeDirective(fontSize, el) {
        this.fontSize = fontSize;
        this.el = el;
    }
    FontSizeDirective.prototype.ngOnInit = function () {
        this.el.nativeElement.fontSize = this.fontSize;
    };
    FontSizeDirective = tslib_1.__decorate([
        Directive({ selector: '[fontSize]' }),
        tslib_1.__param(0, Attribute('fontSize')),
        tslib_1.__metadata("design:paramtypes", [String, ElementRef])
    ], FontSizeDirective);
    return FontSizeDirective;
}());
export { FontSizeDirective };
//# sourceMappingURL=fontsize.directive.js.map