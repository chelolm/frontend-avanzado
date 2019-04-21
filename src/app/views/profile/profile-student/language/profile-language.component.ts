import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../shared/services/profile.service';
import { MockData } from 'src/app/shared/mock-data';
import {
  User
} from 'src/app/shared/models/user.model';
import {
  Language,
  LanguageLevel,
  LanguageName
} from 'src/app/shared/models/language.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../../shared/state/app.state';
import { selectUser } from '../../../../shared/state/user/selectors/user.selectors';
import { updateUser } from '../../../../shared/state/user/actions/user.actions';

@Component({
  selector: 'app-profile-language',
  templateUrl: './profile-language.component.html',
  styleUrls: ['./profile-language.component.scss']
})
export class ProfileLanguageComponent implements OnInit {
  rForm: FormGroup;
  language: Language = {} as Language;
  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>
  ) {
    this.route.params.subscribe(params => {
      const user$ = this._store.pipe(select(selectUser));
      user$.subscribe(usuario => {
        const user = usuario;
        const uid = +params.uid;
        this.user = user;
        this.language = (user.languages.find(language => language.uid === uid) ||
          {}) as Language;
      });
    });
  }
  ngOnInit() {
    this.loadSelectProperties();
    this.loadFormInstance();
  }
  public loadSelectProperties(): void {
    this.languageLevels = MockData.LANGUAGES_LEVEL;
    this.languageNames = MockData.LANGUAGES_NAME;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      level: new FormControl(this.language.level, [Validators.required]),
      name: new FormControl(this.language.name, [Validators.required]),
      date: new FormControl(this.language.date, [
        Validators.required,
        dateValidator()
      ])
    });
  }
  public submit() {
    this.saveOrUpdate({ ...this.language, ...this.rForm.value });
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(language: Language) {
    const user = this.user;
    const languages = user.languages;
    const foundIndex = languages.findIndex(
      _language => _language.uid === language.uid
    );
    languages[foundIndex] = language;
    user.languages = languages; // añadido al código original
    this._store.dispatch(new updateUser(user));
    this.router.navigate(['/admin/profile']);
  }
  private save(language: Language) {
    const user = this.user;
    const _language = MockData.fakeIncreaseID<Language>(
      user.languages,
      language
    );
    user.languages = [...user.languages, _language];
    this._store.dispatch(new updateUser(user));
    this.router.navigate(['/admin/profile']);
  }

  saveOrUpdate(language: Language) {
    this.isNew() ? this.save(language) : this.update(language);
  }
  public isNew(): boolean {
    return !!!this.language.uid;
  }
}
