import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
  email: string = '***@***.com';

  constructor(private router: Router) { }

  resendCode() {
    console.log('resendCode');
  }

  goToEnterCode() {
    this.router.navigate(['/enterCode']);
  }

}
