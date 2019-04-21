import { Component } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../../shared/state/app.state';
import { selectUser } from '../../../shared/state/user/selectors/user.selectors';
import { deleteStudy, deleteLanguage } from '../../../shared/state/user/actions/user.actions';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent {
  user = this._store.pipe(select(selectUser));
  constructor(private _store: Store<IAppState>) {}

  deleteStudy(studyID: number) {
    
    this._store.dispatch(new deleteStudy(studyID));

  }
  
  deleteLanguage(languageID: any) {

    this._store.dispatch(new deleteLanguage(languageID));

  }
  
}
