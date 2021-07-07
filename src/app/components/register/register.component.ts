import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success: boolean = false;
  error: boolean = false;
  username: string = ''
  email: string = ''
  password: string = ''
  password2: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(): void {
    if (this.isFormValid()) {
      this.success = true;
      this.error = false;
    } else {
      this.success = false;
      this.error = true;
    }
  }

  isFormValid(): boolean {
    return this.username && this.email && this.password && this.password2 && (this.password === this.password2)
  }

}
