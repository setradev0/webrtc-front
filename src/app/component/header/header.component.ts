import { InscriptionComponent } from './../inscription/inscription.component';
import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  inscription() {
    const modalRef = this.modalService.open(InscriptionComponent);
  }

}
