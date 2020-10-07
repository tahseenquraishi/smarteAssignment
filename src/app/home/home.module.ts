import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home.component';
import { SuppressionModule } from './suppression-lists/suppression-lists.module';
import { ProcessingQueueModule } from './processing-queue/processing-queue.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuppressionModule,
    ProcessingQueueModule
  ],
  declarations: [HomeComponent,],
  exports: [HomeComponent],
})
export class HomeModule { }
