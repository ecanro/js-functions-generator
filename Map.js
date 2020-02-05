//Map y no map, diccionario de diccionarios!!!
//https://wiki.developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map

var miMapa = new Map();

var claveObj = {},
    claveFunc = function () {},
    claveCadena = "una cadena";

// asignando valores
miMapa.set(claveCadena, "valor asociado con 'una cadena'");
miMapa.set(claveObj, "valor asociado con claveObj");
miMapa.set(claveFunc, "valor asociado with claveFunc");

miMapa.size; // 3

// obteniendo los valores
miMapa.get(claveCadena);    // "valor asociado con 'una cadena'"
miMapa.get(claveObj);       // "valor asociado con claveObj"
miMapa.get(claveFunc);      // "valor asociado con claveFunc"

miMapa.get("una cadena");   // ""valor asociado con 'una cadena'"
                         // porque claveCadena === 'una cadena'
miMapa.get({});           // undefined, porque claveObj !== {}
miMapa.get(function() {}) // undefined, porque claveFunc !== function () {}