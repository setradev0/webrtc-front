import { InscriptionService } from './../../shared/service/inscription/inscription.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form: FormGroup;

  constructor(public activeModal: NgbActiveModal, private inscriptionService: InscriptionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        civilite: ['', Validators.required],
        date_naissance: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirm_password: ['', Validators.required],
        cin: ['', Validators.required],
        telephone: ['', Validators.required]
      });
  }

  inscription() {
    if(this.form.invalid) {
      console.log('champ invalide');
      return;
    } else {
      this.inscriptionService.signup(this.form.value).subscribe(res => {
        console.log(res);
        return ;
      });
    }
  }

}
