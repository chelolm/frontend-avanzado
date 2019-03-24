import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  declarations: [ProfileComponent, EducationComponent, LanguagesComponent, PersonalComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
	ReactiveFormsModule,
	FormsModule 
  ]
})
export class ProfileModule { }
