angular.module("misPelisSeriesApp").controller("PeliculasDetallesCtrl",["$scope", "Pelicula", "APIService", function($scope, Pelicula, APIService){

    $scope.pelicula = Pelicula.data;

    $scope.rutaImg = function(ruta){
        return APIService.obtenerRutaImg(150, ruta);
    };
}]);