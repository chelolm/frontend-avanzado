import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../shared/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

users: any;

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [Validators.required]);

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder, private profileService: ProfileService, private router: Router) { }

	login() {
		console.log(this.loginForm.value);
		this.getAllUsers();
		// Comprobar usuario y password
		// Lo normal sería crear una función de validación en el backend a la que se le pasara usuario y contraseña en lugar de recuperar todos los usuarios, pero se comprueba que el fake backend funciona

		this.router.navigate(['/admin/dashboard/']);
	}

	forgot() {
		this.router.navigate(['/forgot-password/']);
	}

	ngOnInit() {

	} //ngOnInit

	getAllUsers() {
		this.profileService.getUsers().subscribe(data => {
		this.users = data;
		});
	}


}
