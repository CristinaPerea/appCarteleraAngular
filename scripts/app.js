angular.module("misPelisSeriesApp", ["ngRoute", "route-segment", "view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider){

    $routeSegmentProvider.when("/peliculas", "peliculas");
    $routeSegmentProvider.when("/peliculas/proximamente", "peliculas.proximamente");
    $routeSegmentProvider.when("/peliculas/cartelera", "peliculas.cartelera");
    $routeSegmentProvider.when("/peliculas/detalles", "peliculas.detalles");
    $routeSegmentProvider.when("/series", "series");
    $routeProvider.otherwise({
        redirectTo: "peliculas/proximamente"
    });
    $routeSegmentProvider.segment("peliculas", {
        controller: "PeliculasCtrl",
        templateUrl: "views/Peliculas.html"
    });

    $routeSegmentProvider.within("peliculas").segment("proximamente", {
        controller:"PeliculasProximamenteCtrl",
        templateUrl:"views/PeliculasProximamente.html",
        resolve: {
            PeliculasProximamente: ["APIService", function(APIService){
                return APIService.consultaApi("movie/upcoming");
            }]
        },
        resolveFailed:[
            //Se puede navegar a cualquier sitio o dar un alert
        ]
    });

    $routeSegmentProvider.within("peliculas").segment("cartelera", {
        controller:"PeliculasCarteleraCtrl",
        templateUrl:"views/PeliculasCartelera.html",
        resolve: {
            PeliculasCartelera: ["APIService", function (APIService) {
                return APIService.consultaApi("movie/now_playing");
            }]
        }
    });

    $routeSegmentProvider.within("peliculas").segment("detalles", {
        controller:"PeliculasDetallesCtrl",
        templateUrl:"views/PeliculasDetalles.html",
        resolve: {
            Pelicula: ["APIService", "$routeParams", function(APIService, $routeParams){
                return APIService.consultaApi("movie/" + $routeParams.idPelicula);
            }]
        }
    });


    $routeSegmentProvider.segment("series", {
        controller: "SeriesCtrl",
        templateUrl: "views/Series.html"
    });
}]);
