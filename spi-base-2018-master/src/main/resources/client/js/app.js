var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('home', {
        views: {
            "index": {
                templateUrl: "views/home.html",
                controller: "HomeCtrl"
            }
        }
    });
    $stateProvider.state('dashboard', {
        url: "/",
        parent: "home",
        views: {
            "home": {
                templateUrl: "views/dashboard.html",
                controller: "dashboardCtrl"
            }
        }
    });
    $stateProvider.state('formations', {
        parent: "home",
        url: '/formations',
        views: {
            "home": {
                templateUrl: "views/formations.html",
                controller: "FormationCtrl"
            }
        }
    });
    $stateProvider.state('detailFormation', {
        parent: "formations",
        url: '/:id',
        views: {
            "formation": {
                templateUrl: "views/detailFormation.html",
                controller: "detailFormationCtrl"
            }
        }
    });
    $stateProvider.state('ajoutFormation', {
        parent: "formations",
        url: '/newFormation',
        views: {
            "formation": {
                templateUrl: "views/ajoutFormation.html",
                controller: "ajoutFormationCtrl"
            }
        }
    });
    $stateProvider.state('modifierFormation', {
        parent: "formations",
        url: '/:id',
        views: {
            "formation": {
                templateUrl: "views/modifierFormation.html",
                controller: "modifierFormationCtrl"
            }
        }
    });
    $urlRouterProvider.otherwise('/');
});
