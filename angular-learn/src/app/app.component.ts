import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(private element: ElementRef) {
    
  }
 
  ngAfterViewInit(): void {
     
  }

}
