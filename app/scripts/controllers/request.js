'use strict';

/**
 * @ngdoc function
 * @name demApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demApp
 */
angular.module('demApp')
    .controller('ResquestCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
$scope.employeeData = [{
    Sno: "1",
    Name: 'ravi',
    Designation: 'Developer',
    Experience: "5"
}, {
    Sno: "2",
    Name: 'teja',
    Designation: 'Developer',
    Experience: "5"
}, {
    Sno: "3",
    Name: 'kumar',
    Designation: 'Developer',
    Experience: "5"
}, {
    Sno: "4",
    Name: 'pradeep',
    Designation: 'Developer',
    Experience: "5"
}, {
    Sno: "5",
    Name: 'ravi',
    Designation: 'Developer',
    Experience: "5"
}];
console.log($scope.employeeData);
    });


