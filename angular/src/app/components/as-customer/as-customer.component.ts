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
  selector: "app-as-customer",
  templateUrl: "./as-customer.component.html",
  styleUrls: ["./as-customer.component.scss"],
})
export class AsCustomerComponent implements OnInit, OnDestroy {
  public customerFormGroup: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    second_name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  public allCustomer: Observable<unknown> = of({});
  private sub: Subscription = new Subscription();
  constructor(
    private readonly httpService: HttpService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {
    this.allCustomer = this.httpService.getAllCustomer();
  }

  public addCustomer(): void {
    this.sub.add(
      this.httpService
        .createCustomer(this.customerFormGroup.value)
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
