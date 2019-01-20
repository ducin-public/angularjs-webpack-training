import angular from 'angular';

// import { EmployeeSvc } from './employee/services/employeeSvc'
// import { EmployeeCtrl, age, name as nazwa } from './employee/components/employeeCtrl';

import { EmployeeCtrl, EmployeeSvc } from './employee'
import * as Bomba from './employee'

import Answer from './employee/components/employeeCtrl';


import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/ducin-public/angularjs-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .controller('EmployeeCtrl', EmployeeCtrl)
  // DAO
  .service('EmployeeSvc', EmployeeSvc)

export default MODULE_NAME;