import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'processing-queue',
  templateUrl: './processing-queue.component.html',
  styleUrls: ['./processing-queue.component.css']
})
export class ProcessingQueueComponent implements OnInit {
  processingQueue = [
    {
     inputRecords: '1580',
     validrecords: '1580',
     action: 'Add Email',
     by: 'Mark Henry',
     list: 'Do Not Disturb',
     status: 'In-progress',
     date: '28-Apr-2020',
     name: 'Webinar suppression list',
    },
    {
      inputRecords: '1580',
      validrecords: '1580',
      action: 'Add Email',
      by: 'Chris Jerico',
      list: 'Do Not Disturb',
      status: 'In-progress',
      date: '28-Apr-2020',
      name: 'Webinar suppression list',
     },
     {
      inputRecords: '1580',
      validrecords: '1580',
      action: 'Add Email',
      by: 'Rey Mysterio',
      list: 'Do Not Disturb',
      status: 'In-progress',
      date: '28-Apr-2020',
      name: 'Webinar suppression list',
     },
     {
      inputRecords: '1580',
      validrecords: '1580',
      action: 'Add Email',
      by: 'Randy Orton',
      list: 'Do Not Disturb',
      status: 'In-progress',
      date: '28-Apr-2020',
      name: 'Webinar suppression list',
     },
  ]
  constructor() { }

  ngOnInit() {
  }

}
