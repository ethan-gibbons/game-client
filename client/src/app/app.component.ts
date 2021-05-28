import { Component } from '@angular/core';
import { BraincloudService, ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private brainCloudService : BraincloudService
  ) {
    this.translate.setDefaultLang('en');
    this.brainCloudService.initializeBrainCloud()

  }
}
