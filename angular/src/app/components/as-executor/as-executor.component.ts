import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Observable, of, Subscription } from "rxjs";
import { HttpService } from "src/app/core/service/http.service";

@Component({
  selector: "app-as-executor",
  templateUrl: "./as-executor.component.html",
  styleUrls: ["./as-executor.component.scss"],
})
export class AsExecutorComponent implements OnInit, OnDestroy {
  public executorFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    second_name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  public allExecutor: Observable<unknown> = of({});
  private sub: Subscription = new Subscription();
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.allExecutor = this.httpService.getAllExecutor();
  }

  public addExecutor(): void {
    this.sub.add(
      this.httpService
        .createExecutor(this.executorFormGroup.value)
        .subscribe((el) => {
          console.log(el);
          this.router.navigate(["/login"]);
          alert(`created ${el}`);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
