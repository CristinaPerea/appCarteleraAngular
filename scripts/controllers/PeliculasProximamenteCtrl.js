angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl",
    ["$scope", "$filter", "PeliculasProximamente", "$location", function($scope, $filter, PeliculasProximamente, $location){

    $scope.peliculas = $filter("orderBy")(PeliculasProximamente.data.results, "release_date");

    $scope.verDetalle = function(id) {
        $location.path("/peliculas/detalles").search({
            idPelicula: id
        });
    };
}]);