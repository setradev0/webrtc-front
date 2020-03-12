import { SessionService } from './shared/service/session.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private sessionService: SessionService) {}

    getCurrentUser() {
      let bool = false;
      if(this.sessionService.getCurrentUser()) {
        bool = true;
      }
      return bool;
    }
}
