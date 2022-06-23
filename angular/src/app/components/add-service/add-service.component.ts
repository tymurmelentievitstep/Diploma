import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { HttpService } from "src/app/core/service/http.service";

@Component({
  selector: "app-add-service",
  templateUrl: "./add-service.component.html",
  styleUrls: ["./add-service.component.scss"],
})
export class AddServiceComponent implements OnInit {
  public serviceFormGroup: FormGroup = new FormGroup({
    service_type: new FormControl("", Validators.required),
    name: new FormControl("", Validators.required),
    desc: new FormControl("", Validators.required),
    price: new FormControl(0, Validators.required),
  });
  public service: any;
  private sub: Subscription = new Subscription();
  constructor(private readonly httpService: HttpService) {}

  ngOnInit(): void {}

  public addService(): void {
    this.sub.add(
      this.httpService
        .createService(this.serviceFormGroup.value)
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
