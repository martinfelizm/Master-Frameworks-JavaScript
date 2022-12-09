class Carro{
    constructor(modelo,velocidad,antiguedad,color){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
        this.color = color;
    }

    aumentarVelocidad(){
        this.velocidad +=1; 
    }
    disminuirVelocidad(){
        this.velocidad -=1; 
    }
}

var carro1 = new Carro('Honda',300,2005,"Rojo");
var carro2 = new Carro('Honda',250,2002,"Blanco");
var carro3 = new Carro('BMW',300,2001,"Negro");


document.write("<h1>"+carro1.velocidad);
carro1.aumentarVelocidad();
carro1.aumentarVelocidad();
carro1.aumentarVelocidad();

document.write("<h1>"+carro1.velocidad);

console.log(carro1);
console.log(carro2);

///Herencia en clases

class Autobus extends Carro{
    constructor(modelo,velocidad,antiguedad,color, CantPasajeros){
       super(modelo,velocidad,antiguedad,color);
       this.CantPasajeros = CantPasajeros;
    }
  
    mostrarCantPasajeros(){
        return "La Cantidad de Pasajeros es de: "+this.CantPasajeros;
    }

}

var autobus1 = new Autobus('Renault',250,2015,"Verde",16);
console.log(autobus1);
