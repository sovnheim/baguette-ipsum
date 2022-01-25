import { Component } from '@angular/core';
import { LoremGeneratorService } from './services/lorem-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Baguette Ipsum';

  ipsums: Array<string>;

  constructor(private lorem: LoremGeneratorService) {
    this.ipsums = [];
  }

  ngOnInit() {
    this.getBaguette();
  }

  getBaguette(paragraphs: number = 5): void {
    this.ipsums = Array(paragraphs).map(() => {
      return this.lorem.getParagraph();
    });
  }
}

export default AppComponent;
