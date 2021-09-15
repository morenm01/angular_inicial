//Any
var notSure = 4;
notSure = "Nueva cadena de texto"; // Ahora pasará a ser un string
notSure = false; // Por último es de un tipo boolean
var lista = [1, true, "Cadena"];
lista[1] = 100;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
       
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " a\u00F1os.");
    };
    Persona.prototype.definirDireccion = function (direccion) {
        this.direccion = direccion;
    };
    return Persona;
}());
var persona = new Persona("Jonatan Lucas", 32);
persona.saludar();
// Hola, mi nombre es Jonatan Lucas y tengo 32 años.
persona.definirDireccion({
    calle: "Discordia",
    num: 3,
    poblacion: "Atlantis"
});
