//Any
let  notSure: any = 4;
notSure = "Nueva cadena de texto"; // Ahora pasará a ser un string
notSure = false; // Por último es de un tipo boolean
let  lista: any[] = [1, true, "Cadena"];
lista[1] = 100;
//Clases e Interfaz
interface Direccion {
    calle: string;
    num: number;
    poblacion: string;
}

class  Persona {
    private  nombre: string;
    private  edad: number;
    private  direccion: Direccion;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    public  saludar(): void {
        var container = document.getElementById("content");
        var newDiv = document.createElement("div");
        //var message = `Hola, mi nombre es ${  this.nombre  } y tengo ${ this.edad  } años.`;
        var message = 'Hola, mi nombre es' +  this.nombre + 'y tengo' + this.edad  + 'años.';
        newDiv.innerHTML = message;
        
        container.appendChild(newDiv);
        console.log(`Hola, mi nombre es ${  this.nombre  } y tengo ${ this.edad  } años.`);
    }
    public  definirDireccion(direccion: Direccion): void {
        this.direccion = direccion;
    }
}

let  persona = new  Persona("Jonatan Lucas", 32);
persona.saludar();
// Hola, mi nombre es Jonatan Lucas y tengo 32 años.

persona.definirDireccion({
    calle:  "Discordia",
    num:  3,
    poblacion:  "Atlantis"
});