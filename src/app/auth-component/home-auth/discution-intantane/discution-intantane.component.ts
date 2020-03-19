import { SessionService } from '../../../shared/service/session.service';
import { UserService } from '../../../shared/service/user/user.service';
import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BoitDialogComponent} from '../../boit-dialog/boit-dialog.component';

@Component({
  selector: 'app-discution-intantane',
  templateUrl: './discution-intantane.component.html',
  styleUrls: ['./discution-intantane.component.css'],
  providers: [MatBottomSheet]
})
export class DiscutionIntantaneComponent implements OnInit {
  private allUser;
  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private bottomSheet: MatBottomSheet) { }

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
  openDiscution() {
    this.bottomSheet.open(BoitDialogComponent);
  }
}
