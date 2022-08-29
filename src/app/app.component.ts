import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @HostListener('window:scroll', ['$event']) 
  // scrollHandler(event: Event) {
  //   this.scrollOffeset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   console.log(this.scrollOffeset);
  //   // if(offset > 100) {
  //   //   document.getElementById("header").add
  //   // }
  // }

  title = 'ikd-web';

  constructor() { }
}
