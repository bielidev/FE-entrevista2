import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  username: string;
  password: string;
  error: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
   if (this.username && this.password) {
     this.authService.setUserlogedIn(true)
     this.router.navigate([''])
    this.error = false;
   } else {
     this.error = true;
   }
  }

}
