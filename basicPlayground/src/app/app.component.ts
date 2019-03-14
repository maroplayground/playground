import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator App';
    num1: number;
    num2: number;
    result: number;

    pastResults: Array<number> = [];

    add() {
        this.result = this.num1 + this.num2;

        this.addToPastResults();
    }
    substract() {
        this.result = this.num1 - this.num2;

        this.addToPastResults();
    }
    multiply() {
        this.result = this.num1 * this.num2;

        this.addToPastResults();
    }
    divide() {
        this.result = this.num1 % this.num2;

        this.addToPastResults();
    }
    checkIfValidEntry() {
      return (this.num1 && this.num2 && this.result);
    }
    onKey(event: KeyboardEvent) {
      this.result = null;
    }
    addToPastResults() {
      if (this.result || this.result === 0) {
          this.pastResults.push(this.result);
      }
    }
}
