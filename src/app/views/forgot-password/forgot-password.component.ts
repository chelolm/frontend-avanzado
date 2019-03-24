import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  username = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  loginForm: FormGroup = this.builder.group({
    username: this.username
  });

  constructor(private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

	forgot() {
		// llamada al backend para recuperar contraseña
		this.router.navigate(['/signin']);
	}

}
