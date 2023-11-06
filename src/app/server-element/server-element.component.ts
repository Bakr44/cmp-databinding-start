import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input() element: { type: string, name: string, content: string }
  @ContentChild("contentParagrph", { static: true }) paragraph: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log("onInit Called!");
    console.log("content text paragrph:" + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentInit(): void {
    console.log("content text paragrph:" + this.paragraph.nativeElement.textContent);
  }

}
