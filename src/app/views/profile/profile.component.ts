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

}
