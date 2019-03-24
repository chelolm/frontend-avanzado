import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loginForm: FormGroup = this.builder.group({ });

  constructor(private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  	profile() {
		this.router.navigate(['/profile']);
	}
  	personal() {
		this.router.navigate(['/profile/personal']);
	}
	education() {
		this.router.navigate(['/profile/education']);
	}
	languages() {
		this.router.navigate(['/profile/languages']);
	}
	offers() {
		this.router.navigate(['/profile']);
	}
	offerDetail() {
		this.router.navigate(['/profile']);
	}

}
