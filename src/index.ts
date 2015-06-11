/// <reference path="../typings/tsd.d.ts" />

import { bootstrap } from 'angular2/angular2';
import { ageCalculatorInjectables } from './ageCalculator/ageCalculator'

import { App } from './app/app';

bootstrap(
  App,
  [
    ageCalculatorInjectables
  ]
);
