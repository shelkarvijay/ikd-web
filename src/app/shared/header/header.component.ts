import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  scrollOffeset: any;
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event: Event) {
    this.scrollOffeset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    // console.log(this.scrollOffeset);
    // if(offset > 100) {
    //   document.getElementById("header").add
    // }
  }
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
  }

}
