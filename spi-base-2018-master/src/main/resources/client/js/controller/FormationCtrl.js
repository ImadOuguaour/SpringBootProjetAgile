myApp.controller("FormationCtrl", function ($scope, $rootScope, $http) {
    console.log("Hello world");
    $http.get("http://localhost:8090/formations")
        .then((response) => {
            $rootScope.formations = response.data;
            $(document).ready(function () {
                $('#example').DataTable();
            });
        });
});
myApp.controller("dashboardCtrl", function ($scope, $http) {

});
myApp.controller("detailFormationCtrl", function ($scope, $http, $stateParams) {
    console.log($stateParams);
    $scope.formation = {};
    $http.get("http://localhost:8090/formations/" + $stateParams.id + "/")
        .then((response) => {
            $scope.formation = response.data;
        })
});
myApp.controller("ajoutFormationCtrl", function ($scope, $http, $state, $rootScope) {
    $scope.formation = {};
    $scope.ajouter = () => {
        console.log("sfsdfsd");
        $http.post("http://localhost:8090/formations/", $scope.formation)
            .then(function (formation) {
                $http.get("http://localhost:8090/formations/")
                    .then((res) => {
                        $rootScope.formations = res.data;
                        console.log($rootScope.formations);
                    });

                setTimeout(() => {
                    $state.go("formations");
                    console.log($rootScope.formations);
                    $(document).ready(function () {
                        $('#example').DataTable();
                    });
                }, 20);

            });
    }
});
myApp.controller("modifierFormationCtrl", function ($scope, $http, $state, $rootScope, $stateParams) {
    $scope.formation={};
    $http.get("http://localhost:8090/formations/" + $stateParams.id + "/")
        .then((response) => {
            $scope.formation = response.data;
            console.log("hani");
        });
    $scope.modifier = () => {
        console.log("modifier");
        $http.post("http://localhost:8090/formations/", $scope.formation)
            .then(function (formation) {
                $http.get("http://localhost:8090/formations/")
                    .then((res) => {
                        $rootScope.formations = res.data;
                        console.log($rootScope.formations);
                    });

                $state.go("formations");

            });
    }
})