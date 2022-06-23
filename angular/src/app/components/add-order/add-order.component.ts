import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { HttpService } from "src/app/core/service/http.service";

@Component({
  selector: "app-add-order",
  templateUrl: "./add-order.component.html",
  styleUrls: ["./add-order.component.scss"],
})
export class AddOrderComponent implements OnInit, OnDestroy {
  public orderFormGroup: FormGroup = new FormGroup({
    order_type: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    desc: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
  });
  public allOrder: any;
  private sub: Subscription = new Subscription();
  constructor(private readonly httpService: HttpService) {}

  ngOnInit(): void {}

  public addOrder(): void {
    this.sub.add(
      this.httpService
        .createOrder(this.orderFormGroup.value)
        .subscribe((el: any) => {
          console.log(el);
          alert(`created ${el.name}`);
        })
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
