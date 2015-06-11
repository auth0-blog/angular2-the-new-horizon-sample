/// <reference path="../../typings/tsd.d.ts" />

import {View, Component, coreDirectives} from 'angular2/angular2';
import {AgeCalculator} from '../ageCalculator/ageCalculator';

@Component({
  selector: 'person-shower',
  // properties: ['person'],
  directives: [coreDirectives]
})
@View({
  // template:`
  //   <p>
  //     <span>Name: {{person.name}}</span>
  //     <span>Age: {{age}}</span>
  //     <span [innerHTML]="'Location ' + person.location.toString()"></span>
  //     <span *ng-if="person.nickname">Nick name: {{person.nickname}}</span>
  //     <input type="text" #name />
  //     <button (click)="changeName(event, name)">Change name</button>
  //   </p>
  // `
  template: '<h1>Hola</h1>'
})
export class PersonShower {
  person: any;
  age: number;

  // constructor(public ageCalculator: AgeCalculator) {   
  constructor() {   
    // this.age = this.ageCalculator.calculate(this.person);
  }

  changeName(event, name) {
    event.preventDefault();
    this.person.name = name.value;
  }
}