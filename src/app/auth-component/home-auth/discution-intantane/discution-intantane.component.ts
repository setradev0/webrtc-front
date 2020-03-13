import { SessionService } from './../../../shared/service/session.service';
import { UserService } from './../../../shared/service/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discution-intantane',
  templateUrl: './discution-intantane.component.html',
  styleUrls: ['./discution-intantane.component.css']
})
export class DiscutionIntantaneComponent implements OnInit {
  private allUser;
  constructor(private userService: UserService, private sessionService: SessionService) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe(res => {
      this.allUser = res;
    });
  }

  getAllUsers() {
    return this.allUser;
  }

  addFriend(id) {
    let data = {
        user_id: this.sessionService.getCurrentUser()._id,
        friend_id: id
    }
    this.userService.addFriend(data).subscribe(res => {
      console.log(res);
    });
  }
}
