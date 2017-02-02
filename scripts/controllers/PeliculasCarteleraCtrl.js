angular.module("misPelisSeriesApp").controller("PeliculasCarteleraCtrl", ["$scope", "PeliculasCartelera", "$location", function($scope, PeliculasCartelera, $location){

    $scope.peliculas = PeliculasCartelera.data.results;

    $scope.verDetalle = function(id) {
        $location.path("/peliculas/detalles").search({
            idPelicula: id
        });
    };

}]);
