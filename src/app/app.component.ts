import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jest';
  emailButtonText: string = 'Send E-Mail';
  isEmailButtonEnabled: boolean = true;

  onEmailButtonClick() {
    this.emailButtonText = 'E-Mail sent!'
    this.isEmailButtonEnabled = false;
  }
}
