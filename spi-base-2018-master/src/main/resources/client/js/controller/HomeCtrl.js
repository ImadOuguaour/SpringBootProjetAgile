myApp.controller("HomeCtrl", function ($scope, $http){
    
    $http.get("http://localhost:8090/formations")
    .then((response) => {
        $scope.formations = response.data;
    });
});