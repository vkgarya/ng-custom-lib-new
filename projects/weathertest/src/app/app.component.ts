import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'weathertest';
  output: number = 0;

  ngOnInit(): void {
    this.sum();
  }

  sum() {
    const a = 5;
    const b = 6;
    this.output = a + b;
  }
}
