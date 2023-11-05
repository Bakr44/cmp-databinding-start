import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'A Test Server heloo' }];

  onAddedServer(serverData: { severName: string, contentServer: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.severName,
      content: serverData.contentServer
    });
  }

  onAddedBlueprint(bluePrintData: { severName: string, contentServer: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.severName,
      content: bluePrintData.contentServer
    });
  }
}
