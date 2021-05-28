import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent} from './logout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    LogoutComponent
  ]
})
export class LogoutModule { }
