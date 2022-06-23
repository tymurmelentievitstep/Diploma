import { Router } from "@angular/router";
import { HttpService } from "./../../core/service/http.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnDestroy {
  public loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  private sub: Subscription = new Subscription();
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router
  ) {}

  public login(): void {
    this.sub.add(
      this.httpService
        .loginUser(this.loginFormGroup.value)
        .subscribe((el: any) => {
          console.log(el);
          localStorage.setItem("token", el.access);
          this.router.navigate([""]);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
