"use strict";
var Geometrias;
(function (Geometrias) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometrias.Area || (Geometrias.Area = {}));
})(Geometrias || (Geometrias = {}));
