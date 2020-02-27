"use strict";
var Geometrias;
(function (Geometrias) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometrias.Area || (Geometrias.Area = {}));
})(Geometrias || (Geometrias = {}));
