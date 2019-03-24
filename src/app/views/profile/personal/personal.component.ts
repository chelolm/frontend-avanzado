import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../../shared/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(55),
    Validators.pattern("[A-Za-záéíóúÁÉÍÓÚñÑÇçàèòÀÈ Ò]{2,64}")
  ]);
  apellidos = new FormControl('', [
  	Validators.required,
    Validators.minLength(3),
    Validators.maxLength(55),
    Validators.pattern("[A-Za-záéíóúÁÉÍÓÚñÑÇçàèòÀÈ Ò]{2,64}")
  ]);
  nacimiento = new FormControl('', []);
  telefono1 = new FormControl('', [
    Validators.pattern("[0-9]*")
  ]);
  telefono2 = new FormControl('', [
    Validators.pattern("[0-9]*")
  ]);
  dninif = new FormControl('', []);
  dni = new FormControl('', []);
  direccion = new FormControl('', []);
  provincia = new FormControl('', []);
  municipio = new FormControl('', []);
  conducir = new FormControl('', []);
  acercade = new FormControl('', []);
  competencias = new FormControl('', []);

  personalForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    apellidos: this.apellidos,
    nacimiento: this.nacimiento,
    telefono1: this.telefono1,
    telefono2: this.telefono2,
    dninif: this.dninif,
    dni: this.dni,
    direccion: this.direccion,
    provincia: this.provincia,
    municipio: this.municipio,
    conducir: this.conducir,
    acercade: this.acercade,
    competencias: this.competencias
  });

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
			this.updateProfile(this.profile);
		});
	
	}
	
	updateProfile(profile: any) {
		this.personalForm.patchValue({
			nombre: profile.name,
			apellidos: profile.surname,
			nacimiento: profile.nacimiento,
		    telefono1: profile.telefono,
		    dni: profile.dni,
		    conducir: profile.conducir,
			acercade: profile.acercade,
			competencias: profile.competencias
		});
	}

}
