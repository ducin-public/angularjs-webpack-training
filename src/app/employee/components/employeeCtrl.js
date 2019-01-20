export const EmployeeCtrl = function ($scope, $interval, EmployeeSvc) {
  $scope.firstName = "John";
  var prefix = "Mr";
  $scope.lastName = `${prefix} Lennon`;
  $scope.age = 40;
  // $scope.collection = undefined // []

  EmployeeSvc.getEmployees()
    .then(result => {
      $scope.collection = result.data
    })

  $interval(() => {
    $scope.age++
  }, 1000)

  $scope.clearInputs = function(){
    $scope.firstName = ''
    $scope.lastName = ''
    $scope.age = 0
  }
}

// ponizej śmietnik

export var name = 'john'
export let age = 40

export const cache = {}

const odpowiedzNaPytanieLudzkosci = 42

export default odpowiedzNaPytanieLudzkosci

// User -> Employee
