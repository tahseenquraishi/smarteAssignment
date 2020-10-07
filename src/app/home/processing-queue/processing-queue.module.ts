import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProcessingQueueComponent } from './processing-queue.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [ProcessingQueueComponent],
  exports: [ProcessingQueueComponent],
})
export class ProcessingQueueModule { }
