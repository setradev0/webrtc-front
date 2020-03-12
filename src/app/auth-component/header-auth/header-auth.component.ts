import { SessionService } from './../../shared/service/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.css']
})
export class HeaderAuthComponent implements OnInit {

  constructor(private sessionService: SessionService, private route: Router) { }

  ngOnInit() {
  }

  deconnexion() {
    this.sessionService.cleanSession();
    this.route.navigate(['/']);
  }

}
