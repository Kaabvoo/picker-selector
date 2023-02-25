import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'picker-selector';
  contenido;
  selectedData;
  constructor() {
    this.contenido = [
      { id: 1, dname: "A", valor: 2 },
      { id: 2, dname: "B", valor: 3 },
      { id: 3, dname: "C", valor: 4 },
      { id: 4, dname: "D", valor: 5 },
      { id: 5, dname: "E", valor: 6 },
      { id: 6, dname: "F", valor: 7 },
      { id: 7, dname: "G", valor: 8 },
      { id: 8, dname: "H", valor: 9 },
      { id: 9, dname: "I", valor: 10 }
    ];
    this.selectedData = [
      { id: 1, dname: "A", valor: 2 },
      { id: 6, dname: "F", valor: 7 },
      { id: 8, dname: "H", valor: 9 }
    ]
  }
}
