import { InscriptionComponent } from './../inscription/inscription.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare let $: any;

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
    if($(window).width() > 992) {
      if($(window).scrollTop() > 40) {
        $('#nav-top').addClass("fixed-top");
      }
    } else {
      $('#navbar_top').removeClass("fixed-top");
    }
  }

}
