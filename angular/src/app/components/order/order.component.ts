import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Observable, of, Subscription } from "rxjs";
import { HttpService } from "src/app/core/service/http.service";
import { AddOrderComponent } from "../add-order/add-order.component";

export interface PeriodicElement {
  name: string;
  desc: string;
  order_type: string;
  price: number;
}

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit, OnDestroy {
  public orderFormGroup: FormGroup = new FormGroup({
    order_type: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    desc: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
  });
  public auth: string | null = localStorage.getItem("token");
  public allOrder: any;
  private sub: Subscription = new Subscription();
  constructor(
    private readonly httpService: HttpService,
    private readonly formBuilder: FormBuilder,
    public readonly dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddOrderComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  public readonly displayedColumns: string[] = [
    "name",
    "desc",
    "price",
    "order_type",
  ];
  public dataSource: PeriodicElement[] = [
    {
      name: "test",
      desc: "test desc",
      price: 1,
      order_type: "1",
    },
  ];
  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    this.sub.add(
      this.httpService.getAllOrders().subscribe((el) => {
        this.dataSource = el;
        console.log(el);
      })
    );
  }

  public addOrder(): void {
    this.sub.add(
      this.httpService
        .createOrder(this.orderFormGroup.value)
        .subscribe((el) => {
          console.log(el);
          alert(`created ${el}`);
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
