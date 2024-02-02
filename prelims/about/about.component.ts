import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
  
})
export class AboutComponent {
  public bind = "";
  name="PATRICK VILLANUEVA";

  clickCount=0
  clickMe() {
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount=0;
  }
  
}
