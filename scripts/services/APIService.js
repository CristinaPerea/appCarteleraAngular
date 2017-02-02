
angular.module("misPelisSeriesApp").service("APIService",["$http", "configuracion", function($http, configuracion){

    this.consultaApi = function(servicio){
        return $http.get("https://api.themoviedb.org/"+ configuracion.apiVersion +"/"+ servicio +"?api_key="+ configuracion.apiKey +"&language=es")

    };

    this.obtenerRutaImg = function(tamaño, ruta){
        return ruta == null ? null : configuracion.rutaImg + tamaño + ruta;
    };
}]);