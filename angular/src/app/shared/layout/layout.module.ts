import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/module/material.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [FooterComponent, HeaderComponent, MainComponent, LayoutComponent],
})
export class LayoutModule { }
