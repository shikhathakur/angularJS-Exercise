'use strict';

/**
 * @ngdoc overview
 * @name demApp
 * @description
 * # demApp
 *
 * Main module of the application.
 */
angular
    .module('demApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/myrequest', {
                templateUrl: 'views/request.html',
                controller: 'ResquestCtrl',
                controllerAs: 'myrequest'
            })
            .when('/about', {
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl',
              controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

$(document).ready(function() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    var opic = $.ajax({
        url: 'data/data.json',
        type: 'GET',
        dataType: 'JSON'

    });
    opic.success(function(data) {
        var odata = data;

        for (var i = 0; i < odata.Item.length; i++) {
            $('.description').eq(i).html(odata.Item[i].description);
            $('.title').eq(i).html(odata.Item[i].title);
        }
    });
});
