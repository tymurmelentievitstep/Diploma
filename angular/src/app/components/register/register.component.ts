import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  public registerFormGroup: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  private sub: Subscription = new Subscription();
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router
  ) {}

  public register(): void {
    this.sub.add(
      this.httpService.regUser(this.registerFormGroup.value).subscribe((el) => {
        console.log(el);
        this.router.navigate(['/login']);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
