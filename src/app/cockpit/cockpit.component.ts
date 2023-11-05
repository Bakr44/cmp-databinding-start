import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createdServer = new EventEmitter<{ severName: string, contentServer: string }>();
  @Output('bpCreated') createdBlueprint = new EventEmitter<{ severName: string, contentServer: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(nameInput: HTMLInputElement) {
    this.createdServer.emit({
      severName: nameInput.value,
      contentServer: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.createdBlueprint.emit({
      severName: nameInput.value,
      contentServer: this.serverContentInput.nativeElement.value
    });
  }

}
