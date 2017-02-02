
angular
    .module("misPelisSeriesApp")
    .directive("mediaItem", ["APIService", function(APIService){

    return {
        restrict: "AE",
        replace: true,
        templateUrl: "views/MediaItem.html",
        scope: {
            datos:"=",
            alSeleccionar: "&"
        },
        link: function(scope){
            scope.rutaImg = function(ruta){
                return APIService.obtenerRutaImg(45, ruta);
            };

            scope.clickEnMedia = function(id){
                scope.alSeleccionar({mediaId: id});
            };

        }
    };

}]);