import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SuppressionListsComponent } from './suppression-lists.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [SuppressionListsComponent],
  exports: [SuppressionListsComponent],
})
export class SuppressionModule { }
