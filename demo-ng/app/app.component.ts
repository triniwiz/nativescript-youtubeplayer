import { Component } from '@angular/core';
@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  src = 'L_jWHffIx5E';
  options = { rel: 1 };
  changeSource() {
    this.src = 'dQw4w9WgXcQ';
  }
  getDanceHall() {
    this.src = 'wH_0_pijbZY';
  }
  getHipHop() {
    this.src = 'lwk5OUII9Vc';
  }
  getSoca() {
    this.src = 'vEG4qNW33mA';
  }
}
