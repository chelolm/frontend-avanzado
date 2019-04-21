var _a;
import { MockData } from '../mock-data';
var COMMAND = (_a = {},
    _a[MockData.DOCUMENTS_TYPE[0].uid] = isValidNIF,
    _a[MockData.DOCUMENTS_TYPE[1].uid] = isValidPassport,
    _a[MockData.DOCUMENTS_TYPE[2].uid] = isValidOther,
    _a.execute = function (documentType, params) {
        var type = documentType.uid;
        return !this[type](params);
    },
    _a);
function isValidNIF(nif) {
    var isValid = false;
    var fixedNIF = nif.toUpperCase();
    var correctDigit = '';
    var writtenDigit = '';
    if (!/^[A-Z]+$/i.test(fixedNIF.substr(1, 1))) {
        fixedNIF = '000000000' + nif;
        fixedNIF = fixedNIF.substr(-9);
    }
    writtenDigit = nif.substr(-1, 1);
    if (isValidNIFFormat(fixedNIF)) {
        correctDigit = getNIFCheckDigit(fixedNIF);
        if (writtenDigit == correctDigit) {
            isValid = true;
        }
    }
    return isValid;
}
function isValidNIFFormat(docNumber) {
    return respectsDocPattern(docNumber, /^[KLM0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z0-9]/);
}
function respectsDocPattern(givenString, pattern) {
    var isValid = false;
    var fixedString = givenString.toUpperCase();
    var firstChar = parseInt(fixedString.substr(0, 1), 10);
    if (firstChar % 1 === 0) {
        fixedString = '000000000' + fixedString;
        fixedString = fixedString.substr(-9);
    }
    if (pattern.test(fixedString)) {
        isValid = true;
    }
    return isValid;
}
function getNIFCheckDigit(docNumber) {
    var keyString = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var fixedDocNumber = docNumber.toUpperCase();
    var position = 0;
    var writtenLetter = '';
    var correctLetter = '';
    if (!/^[A-Z]+$/i.test(fixedDocNumber.substr(1, 1))) {
        fixedDocNumber = '000000000' + fixedDocNumber;
        fixedDocNumber = fixedDocNumber.substr(-9);
    }
    else {
        fixedDocNumber = docNumber.toUpperCase();
    }
    if (isValidNIFFormat(fixedDocNumber)) {
        writtenLetter = fixedDocNumber.substr(-1);
        fixedDocNumber = fixedDocNumber.replace('K', '0');
        fixedDocNumber = fixedDocNumber.replace('L', '0');
        fixedDocNumber = fixedDocNumber.replace('M', '0');
        position = fixedDocNumber.substr(0, 8) % 23;
        correctLetter = keyString.substr(position, 1);
    }
    return correctLetter;
}
function isValidPassport(passport) {
    //TODO: This code is not develop yet.
    return true;
}
function isValidOther(other) {
    return true;
}
export function documentNumberValidator() {
    return function (form) {
        var documentType = form.controls['documentType'].value;
        var documentNumber = form.controls['documentNumber'].value;
        var forbidden = COMMAND.execute(documentType, documentNumber);
        return forbidden
            ? { documentNumberForbbiden: { value: documentNumber } }
            : null;
    };
}
//# sourceMappingURL=document-number-validator.directive.js.map