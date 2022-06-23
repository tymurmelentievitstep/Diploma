import { AddServiceComponent } from "./../add-service/add-service.component";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Observable, of, Subscription } from "rxjs";
import { HttpService } from "src/app/core/service/http.service";

import { MatDialog } from "@angular/material/dialog";

export interface PeriodicElement {
  name: string;
  desc: string;
  service_type: string;
  price: number;
}
@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"],
})
export class ServiceComponent implements OnInit {
  public serviceFormGroup: FormGroup = new FormGroup({
    service_type: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    desc: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
  });

  public auth: string | null = localStorage.getItem("token");

  public readonly displayedColumns: string[] = [
    "name",
    "desc",
    "price",
    "service_type",
  ];
  public dataSource: PeriodicElement[] = [
    {
      name: "test",
      desc: "test desc",
      price: 1,
      service_type: "1",
    },
  ];
  public allService: PeriodicElement[] = [
    {
      name: "test",
      desc: "test desc",
      price: 1,
      service_type: "1",
    },
  ];
  private sub: Subscription = new Subscription();
  constructor(
    private readonly httpService: HttpService,
    private readonly formBuilder: FormBuilder,
    public readonly dialog: MatDialog
  ) {}

  public openDialog() {
    const dialogRef = this.dialog.open(AddServiceComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  public getData(): void {
    this.sub.add(
      this.httpService.getAllServices().subscribe((el) => {
        this.allService = el;
        console.log(el);
      })
    );
  }

  public addService(): void {
    this.sub.add(
      this.httpService
        .createService(this.serviceFormGroup.value)
        .subscribe((el) => {
          console.log(el);
          alert(`created ${el}`);
        })
    );
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
