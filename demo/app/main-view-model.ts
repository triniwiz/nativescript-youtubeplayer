import { Observable } from 'tns-core-modules/data/observable';
export class HelloWorldModel extends Observable {
  src = 'lwk5OUII9Vc';
  constructor() {
    super();
    setTimeout(() => {
      this.set('src', 'vEG4qNW33mA');
    }, 10000);
  }
}