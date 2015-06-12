/// <reference path="../../typings/tsd.d.ts" />

import {View, Component, coreDirectives} from 'angular2/angular2';
import {AgeCalculator} from '../ageCalculator/ageCalculator';

@Component({
  selector: 'person-shower',
  properties: ['person'],
})
@View({
  template:`
    <p>
      <p>Name: {{person.name}}</p>
      <p>Age: {{age}}</p>
      <p [inner-html]="'Location ' + person.location.toString()"></p>
      <p *ng-if="person.nickname">Nick name: {{person.nickname}}</p>
      <input type="text" #name />
      <button (click)="changeName($event, name)">Change name</button>
    </p>
  `,
  directives: [coreDirectives]
})
export class PersonShower {
  person: any;
  age: number;

  constructor(public ageCalculator: AgeCalculator) {   
    
  }

  onChange(changes) {
    let person = changes.person.currentValue;
    this.age = this.ageCalculator.calculate(this.person);
  }

  changeName(event, name) {
    event.preventDefault();
    this.person.name = name.value;
  }
}