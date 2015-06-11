/// <reference path="../../typings/tsd.d.ts" />

import {View, Component} from 'angular2/angular2';
import {PersonShower} from '../personShower/personShower';

let template = require('./app.html');

@Component({
  selector: 'app',
  directives: [PersonShower]
})
@View({
  template:`${template}`
})
export class App {
  person: any;

  constructor() {
    this.person = {
      name: 'Martin Gonto',
      location: 'SF',
      nickname: '@mgonto',
      yearBorn: 1989
    };
  }

}
