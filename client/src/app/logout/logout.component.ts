import { Component, OnInit } from '@angular/core';
import { BraincloudService } from '../core/services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private brainCloudService : BraincloudService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.brainCloudService.wrapper.resetStoredProfileId()
    location.reload()
  }
}
