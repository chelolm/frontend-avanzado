import { ValidatorFn, FormGroup } from '@angular/forms';
import { AppSettings } from '../app.settings';
import { MockData } from '../mock-data';

const COMMAND = {
  [MockData.DOCUMENTS_TYPE[0].uid]: isValidNIF,
  [MockData.DOCUMENTS_TYPE[1].uid]: isValidPassport,
  [MockData.DOCUMENTS_TYPE[2].uid]: isValidOther,
  execute: function(documentType, params) {
    const type = documentType.uid;
    return !this[type](params);
  }
};

function isValidNIF(nif: string): boolean {
  let isValid = false;
  let fixedNIF = nif.toUpperCase();

  let correctDigit = '';
  let writtenDigit = '';

  if (!/^[A-Z]+$/i.test(fixedNIF.substr(1, 1))) {
    fixedNIF = '000000000' + nif;
    fixedNIF = fixedNIF.substr(-9);
  }

  writtenDigit = nif.substr(-1, 1);

  let isValidStep1 = false;

  let fixedString = fixedNIF.toUpperCase();
  const firstChar = parseInt(fixedString.substr(0, 1), 10);

  if (firstChar % 1 === 0) {
    fixedString = '000000000' + fixedString;
    fixedString = fixedString.substr(-9);
  }
  let pattern = new RegExp("/^[KLM0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z0-9]/");

  if (pattern.test(fixedString)) {
    isValidStep1 = true;
  }

  if (isValidStep1) {
    const keyString = 'TRWAGMYFPDXBNJZSQVHLCKE';

    let fixedDocNumber = fixedNIF.toUpperCase();

    let position = 0;
    let writtenLetter = '';
    let correctLetter = '';

    if (!/^[A-Z]+$/i.test(fixedDocNumber.substr(1, 1))) {
      fixedDocNumber = '000000000' + fixedDocNumber;
      fixedDocNumber = fixedDocNumber.substr(-9);
    } else {
      fixedDocNumber = fixedNIF.toUpperCase();
    }

    let isValidStep2 = false;
    let fixedString = fixedDocNumber.toUpperCase();
    const firstChar = parseInt(fixedString.substr(0, 1), 10);
  
    if (firstChar % 1 === 0) {
      fixedString = '000000000' + fixedString;
      fixedString = fixedString.substr(-9);
    }
    let pattern = new RegExp("/^[KLM0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][A-Z0-9]/");
  
    if (pattern.test(fixedString)) {
      isValidStep2 = true;
    }

    if (isValidStep2) {
      writtenLetter = fixedDocNumber.substr(-1);

      fixedDocNumber = fixedDocNumber.replace('K', '0');
      fixedDocNumber = fixedDocNumber.replace('L', '0');
      fixedDocNumber = fixedDocNumber.replace('M', '0');

      position = parseInt(fixedDocNumber.substr(0, 8)) % 23;
      correctLetter = keyString.substr(position, 1);
    }

    if (writtenDigit == correctLetter) {
      isValid = true;
    }
  }
  return isValid;
}

function isValidPassport(passport: string): boolean {
  //TODO: This code is not develop yet.
  return true;
}
function isValidOther(other: string): boolean {
  return true;
}
export function documentNumberValidator(): ValidatorFn {
  return (form: FormGroup): { [key: string]: any } | null => {
    const documentType = form.controls['documentType'].value;
    const documentNumber = form.controls['documentNumber'].value;
    const forbidden = COMMAND.execute(documentType, documentNumber);
    return forbidden
      ? { documentNumberForbbiden: { value: documentNumber } }
      : null;
  };
}
