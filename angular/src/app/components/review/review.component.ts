import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { HttpService } from 'src/app/core/service/http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit, OnDestroy {
  public reviewsFormGroup: FormGroup = new FormGroup({
    reating: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  });
  public allReviews: Observable<unknown> = of({});
  private sub: Subscription = new Subscription();
  constructor(private readonly httpService: HttpService) {}
  ngOnInit(): void {
    this.allReviews = this.httpService.getAllReview();
  }

  public addreviews(): void {
    this.sub.add(
      this.httpService
        .createReview(this.reviewsFormGroup.value)
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
