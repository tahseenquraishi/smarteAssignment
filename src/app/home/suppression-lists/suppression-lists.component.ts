import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suppression-lists',
  templateUrl: './suppression-lists.component.html',
  styleUrls: ['./suppression-lists.component.css']
})
export class SuppressionListsComponent implements OnInit {
  suppressionLists = [
    {
      srNo: '1',
      name: 'Already Contacted',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Chris Jerico',
      records: '0',
    },
    {
      srNo: '2',
      name: 'Marketo Leads',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Yuvraj Singh',
      records: '0',
    },
    {
      srNo: '3',
      name: 'Do Not Disturb',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Undertaker',
      records: '0',
    },
    {
      srNo: '4',
      name: 'Already Contacted',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Mat Hardy',
      records: '0',
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
