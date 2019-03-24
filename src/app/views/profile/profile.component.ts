import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../shared/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
/*
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  telefono = new FormControl('', [Validators.required]);

  profileForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });
*/
/*
studentPersonalDataForm = this.fb.group({
personalData: this.fb.group({
name: ['', Validators.required, Validators.minLength(3)],
......
})
})
*/

  //loginForm: FormGroup = this.builder.group({ });

  profile: any = {
	    uid: '',
	    name: '',
	    surname: '',
	    nacimiento: '',
	    telefono: '',
	    dni: '',
	    conducir: '',
		acercade: '',
		competencias: '',
	    email: '',
	    roles: [],
	    avatar_hash: '',
	    parents: [],
	    childrens: [],
	    hasFailed: false,
	    studies: {
	      action: 'SHOW',
	      entities: []
	    },
	    experiences: {
	      action: 'SHOW',
	      entities: []
	    },

	    languages: {
	      action: 'SHOW',
	      entities: []
	    },

	    offers: {
	      entities: []
	    }
	  };



  constructor(private builder: FormBuilder, private profileService: ProfileService, private router: Router) { }


	ngOnInit() {
		
		this.profileService.loadProfile().subscribe(data => { 
			this.profile = data;
			console.log(data);
			//this.updateProfile(this.profile);
		});
	
	}
	/*
	updateProfile(profile: any) {
		this.profileForm.patchValue({
		personalData: {
		name: user.name
		
		}
		});
	}
*/


}
