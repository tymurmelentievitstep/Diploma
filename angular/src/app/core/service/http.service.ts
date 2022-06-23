import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterUser } from "src/app/shared/interface/register-user.interface";
import { Observable } from "rxjs";
import { UserLogin } from "src/app/shared/interface/login-user.interface";
@Injectable({
  providedIn: "root",
})
export class HttpService {
  private readonly url = "http://127.0.0.1:8000";
  constructor(private readonly httpClient: HttpClient) {}

  public regUser(data: RegisterUser): Observable<unknown> {
    return this.httpClient.post(this.url + "/api/auth/users/", data);
  }

  public loginUser(data: UserLogin): Observable<unknown> {
    return this.httpClient.post(this.url + "/api/token/", data);
  }

  public getExecutor(data: string): Observable<unknown> {
    return this.httpClient.get(this.url + `/api/executors/${data}`);
  }

  public getAllExecutor(): Observable<unknown> {
    return this.httpClient.get(this.url + "/api/executors/all");
  }

  public createExecutor(data: Object): Observable<unknown> {
    return this.httpClient.post(this.url + "/api/executors/new", data);
  }

  public getAllOrders(): Observable<any> {
    return this.httpClient.get(this.url + "/api/orders/all");
  }

  public getOrder(data: string): Observable<unknown> {
    return this.httpClient.get(this.url + `/api/orders/${data}`);
  }

  public createOrder(data: Object): Observable<unknown> {
    return this.httpClient.post(this.url + "/api/orders/new", data);
  }

  public getCustomer(data: string): Observable<unknown> {
    return this.httpClient.get(this.url + `/api/customers/${data}`);
  }

  public getAllCustomer(): Observable<unknown> {
    return this.httpClient.get(this.url + `/api/customers/all`);
  }

  public createCustomer(data: string): Observable<unknown> {
    return this.httpClient.post(this.url + `/api/customers/new`, data);
  }

  public createReview(data: object): Observable<unknown> {
    return this.httpClient.post(this.url + `/api/reviews/new`, data);
  }

  public getReview(data: string): Observable<unknown> {
    return this.httpClient.get(this.url + `/api/reviews/${data}`);
  }

  public getAllReview(): Observable<unknown> {
    return this.httpClient.get(this.url + `/api/reviews/all`);
  }

  public createService(data: Object): Observable<any> {
    return this.httpClient.post(this.url + `/api/services/new`, data);
  }

  public getService(data: string): Observable<any> {
    return this.httpClient.get(this.url + `/api/services/${data}`);
  }

  public getAllServices(): Observable<any> {
    return this.httpClient.get(this.url + `/api/services/all`);
  }
}
