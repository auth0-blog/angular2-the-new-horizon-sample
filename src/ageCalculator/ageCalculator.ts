import {bind, Inject} from 'angular2/di';

export class AgeCalculator {
  constructor() {

  }

  calculate(person) {
    return new Date().getFullYear() - person.yearBorn;
  }
}

export let ageCalculatorInjectables = [
  bind(AgeCalculator).toClass(AgeCalculator)
];