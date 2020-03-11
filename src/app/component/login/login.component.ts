import { LoginService } from './../../shared/service/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if(this.form.invalid) {
      console.log('invalide');
      return;
    } else {
      this.loginService.signin(this.form.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}
