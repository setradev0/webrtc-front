import { SocketService } from './../../shared/service/socket/socket.service';
import { UserService } from './../../shared/service/user/user.service';
import { SessionService } from './../../shared/service/session.service';
import { ConversationService } from './../../shared/service/conversation/conversation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

declare let $: any;
@Component({
  selector: 'app-boit-dialog',
  templateUrl: './boit-dialog.component.html',
  styleUrls: ['./boit-dialog.component.css']
})

export class BoitDialogComponent implements OnInit {
  @Input() id;
  formSearch: FormGroup;
  private discution: any [];
  constructor(
    private fb: FormBuilder,
    private conversationService: ConversationService,
    private sessionService: SessionService,
    private socketService: SocketService,
    private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      message: ['', Validators.required]
    });
    this.getConversation();
    this.socketService.connect(this.sessionService.getToken());
    this.listenMessageSocket();
    $(document).ready(() => {
      $('#boit-scroll').animate({ scrollTop: $(document).height() }, 'slow');
    });
  }

  sendMessage() {
    let data = {
      to_id: this.id,
      from_id: this.sessionService.getCurrentUser()._id,
      message: this.formSearch.value.message,
    }
    this.formSearch.reset();
    this.conversationService.send(data).subscribe(res => {
      this.socketService.emit('message', res);
    });
  }

  getConversation() {
    // tslint:disable-next-line:max-line-length
    this.conversationService.getConversation({to_id: this.id, from_id: this.sessionService.getCurrentUser()._id}).subscribe(res => {
      this.discution = res;
    });
  }

  get getDiscution() {
    return this.discution;
  }

  get getUserId() {
    return this.sessionService.getCurrentUser()._id;
  }

  get getToSend() {
    return this.id;
  }


  listenMessageSocket() {
    this.socketService.listen('message').subscribe(res => {
      this.discution.push(res);
      $('#boit-scroll').animate({ scrollTop: $(document).height() }, 'slow');
    });
  }
}
