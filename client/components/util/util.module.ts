'use strict';
const angular = require('angular');
import {UtilService} from './util.service';

export default angular.module('tempApp.util', [])
  .factory('Util', UtilService)
  .name;
