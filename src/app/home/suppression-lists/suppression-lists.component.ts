import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'suppression-lists',
  templateUrl: './suppression-lists.component.html',
  styleUrls: ['./suppression-lists.component.css']
})
export class SuppressionListsComponent implements OnInit {
  @ViewChild("insideElement") insideElement;
  startIndex = 0;
  lastIndex = 4;
  currentPage = 1;
  showDropdown = false;
  suppressionLists = [
    {
      srNo: '1',
      name: 'Marketo Leads',
      lastModifiedOn: '12-Apr-2020 12:39 PM',
      lastModifiedBy: 'Chris Jerico',
      records: '8',
    },
    {
      srNo: '2',
      name: 'Marketo Leads',
      lastModifiedOn: '13-Apr-2020 12:39 PM',
      lastModifiedBy: 'Yuvraj Singh',
      records: '0',
    },
    {
      srNo: '3',
      name: 'Do Not Disturb',
      lastModifiedOn: '14-Apr-2020 12:39 PM',
      lastModifiedBy: 'Undertaker',
      records: '1',
    },
    {
      srNo: '4',
      name: 'Already Contacted',
      lastModifiedOn: '15-Apr-2020 12:39 PM',
      lastModifiedBy: 'Mat Hardy',
      records: '4',
    },
    {
      srNo: '5',
      name: 'Marketo Leads',
      lastModifiedOn: '16-Apr-2020 12:39 PM',
      lastModifiedBy: 'Virat Kohli',
      records: '7',
    },
    {
      srNo: '6',
      name: 'Marketo Leads',
      lastModifiedOn: '17-Apr-2020 12:39 PM',
      lastModifiedBy: 'KL Rahul',
      records: '5',
    },
    {
      srNo: '7',
      name: 'Do Not Disturb',
      lastModifiedOn: '18-Apr-2020 12:39 PM',
      lastModifiedBy: 'Eon Morgan',
      records: '2',
    },
    {
      srNo: '8',
      name: 'Already Contacted',
      lastModifiedOn: '19-Apr-2020 12:39 PM',
      lastModifiedBy: 'Chris Gayle',
      records: '5',
    },
    {
      srNo: '9',
      name: 'Do Not Disturb',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Brett Lee',
      records: '2',
    },
    {
      srNo: '10',
      name: 'Already Contacted',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Brad Hogg',
      records: '0',
    },
    {
      srNo: '11',
      name: 'Do Not Disturb',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Pat Cummins',
      records: '9',
    },
    {
      srNo: '12',
      name: 'Marketo Leads',
      lastModifiedOn: '28-Apr-2020 12:39 PM',
      lastModifiedBy: 'Sanju Samsun',
      records: '3',
    },

  ]
  constructor() { }

  ngOnInit() {
    this.onDocumentClick = this.onDocumentClick.bind(this);
    document.addEventListener('click', this.onDocumentClick);
  }


  onDocumentClick(event: MouseEvent) {
   if (this.insideElement) {
    if (this.insideElement.nativeElement.contains(event.target)) {
      return;
    }
    this.showDropdown = false;
   }
  }

  pagination(pageNumber) {
    if(pageNumber === 1) {
      this.setIndexValue(0,4);
    } else if (pageNumber === 2) {
      this.setIndexValue(4,8);
    }
    else if (pageNumber === 3) {
      this.setIndexValue(8,12);
    }
    this.currentPage = pageNumber;
  }

  setIndexValue(startIndex: number, lastIndex: number) {
      this.startIndex = startIndex;
      this.lastIndex = lastIndex;
  }

  previous() {
    if (this.currentPage !== 1) {
       if (this.currentPage === 2) {
        this.setIndexValue(0,4);
        this.currentPage = 1;
       } else if (this.currentPage === 3) {
        this.setIndexValue(4,8);
        this.currentPage = 2;
       }
    }
  }

  next() {
    if (this.currentPage !== 3) {
       if (this.currentPage === 1) {
        this.setIndexValue(4,8);
        this.currentPage = 2;
       } else if (this.currentPage === 2) {
        this.setIndexValue(8,12);
        this.currentPage = 3;
       }
    }
  }


  showDropdownList() {
    this.showDropdown = true;
  }

  hideDropdownList() {
    this.showDropdown = false;
  }
}
