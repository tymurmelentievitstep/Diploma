import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AsCustomerComponent } from './as-customer/as-customer.component';
import { AsExecutorComponent } from './as-executor/as-executor.component';
import { OrderComponent } from './order/order.component';
import { ReviewComponent } from './review/review.component';
import { ServiceComponent } from './service/service.component';
import { MaterialModule } from '../core/module/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { AddOrderComponent } from './add-order/add-order.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AsCustomerComponent, AsExecutorComponent, OrderComponent, ReviewComponent, ServiceComponent, AddOrderComponent, AddServiceComponent, UserListComponent],
  imports: [CommonModule, ComponentsRoutingModule, ReactiveFormsModule, MaterialModule, MatInputModule, MatFormFieldModule, MatStepperModule],
})
export class ComponentsModule { }
