import { UserListComponent } from "./user-list/user-list.component";
import { AddOrderComponent } from "./add-order/add-order.component";
import { OrderComponent } from "./order/order.component";
import { AsExecutorComponent } from "./as-executor/as-executor.component";
import { ReviewComponent } from "./review/review.component";
import { ServiceComponent } from "./service/service.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "../core/guard/auth.guard";
import { AsCustomerComponent } from "./as-customer/as-customer.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "service",
    component: ServiceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "review",
    component: ReviewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: OrderComponent,
  },
  {
    path: "users",
    component: UserListComponent,
  },
  // {
  //   path: "customer",
  //   component: AsCustomerComponent,
  // },
  // {
  //   path: "executor",
  //   component: AsExecutorComponent,
  // },
  {
    path: "addOrder",
    component: AddOrderComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
