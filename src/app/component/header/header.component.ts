import { LoginComponent } from './../login/login.component';
import { InscriptionComponent } from './../inscription/inscription.component';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare let $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit() {
    if($(window).width() > 992) {
      if($(window).scrollTop() > 40) {
        $('#nav-top').addClass("fixed-top");
      }
    } else {
      $('#navbar_top').removeClass("fixed-top");
    }
  }

  inscription() {
    const modalRef = this.modalService.open(InscriptionComponent);
  }

  login() {
    const modalRefLogin = this.modalService.open(LoginComponent, {size: 'sm'});
  }
}
