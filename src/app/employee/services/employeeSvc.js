export const EmployeeSvc = function ($http) {
  this.getEmployee = function (id) {
    return $http.get(`http://localhost:3000/employees/${id}`)
  }
  this.getEmployees = function () {
    return $http.get(`http://localhost:3000/employees`)
  }
}
