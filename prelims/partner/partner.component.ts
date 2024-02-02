import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {
  name = "PATRICK VILLANUEVA";
  statement="directives was used in this code"
  originalBackgroundColor: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.originalBackgroundColor = window.getComputedStyle(document.body).backgroundColor;
  }

  changeBackgroundColor() {
    this.renderer.setStyle(document.body, 'background-color', 'yellow');
  }

  revertBackgroundColor() {
    this.renderer.setStyle(document.body, 'background-color', this.originalBackgroundColor);
  }
}


