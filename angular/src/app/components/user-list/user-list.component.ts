import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { HttpService } from "src/app/core/service/http.service";

interface PeriodicElement {
  email: string;
  username: string;
}

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit, OnDestroy {
  public serviceFormGroup: FormGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    username: new FormControl("", Validators.required),
  });

  public auth: string | null = localStorage.getItem("token");

  public readonly displayedColumns: string[] = ["email", "username"];
  public dataSource: PeriodicElement[] = [
    {
      email: "test",
      username: "test username",
    },
  ];

  public allUsers: PeriodicElement[] = [
    {
      email: "test",
      username: "test username",
    },
  ];

  private sub: Subscription = new Subscription();

  constructor(
    private readonly httpService: HttpService,
    private readonly formBuilder: FormBuilder,
    public readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  public getData(): void {
    this.sub.add(
      this.httpService.getAllServices().subscribe((el) => {
        this.allUsers = el;
        console.log(el);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
