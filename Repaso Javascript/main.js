//alert('Here!!');

var nombre  = 'Maximo';
var alto = 190;

//document.write(nombre);//Imprime en pantalla lo que este en la variable

var dt  = document.getElementById("datos");
//template string de javascript
dt.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>mi nombre es : ${nombre +' - '+alto}</h2>
`;
////     IF
if(alto>=100){
    dt.innerHTML+=`<h1>Eres alto!!`;
}
else{
    dt.innerHTML+=`<h1>Eres bajito!!`;
}

var array = ['Jose Robles', 'Antonio Maxwell','Bernardo Brand'];
////    FOR
for(var i=2015;i<=2020;i++){
    dt.innerHTML+=`<h1>Estamos en el año : `+i;
}

for(var i = 0; i < array.length; i++){
    document.write(array[i]+'<br/>');
}

////Funcion de callback
array.forEach(function(array){
document.write(array+'<br/>');
})

////Funcion de callback con funciones de flecha
array.forEach((array)=>{
    document.write(array+'<br/>');
    })

///Objetos JSON o literales3
var carro = {
    modelo: 'Honda',
    velocidad:300,
    antiguedad:2019,
    mostrardatos(){
        console.log(this.modelo,this.velocidad);
    },
    propiedaFinal:"valor no se"
};    

document.write("<h1>"+carro.antiguedad+"</h1>");
carro.mostrardatos();

///Promise
var saludar = new Promise ((resolve,reject)=>{
    //Tiempo de espera
    setTimeout(()=>{
        let saludo = 'Hola a todos!!';
        saludo = false;
        if(saludo){
            resolve(saludo);
        }
        else{
            reject('No hay saludo disponible?');
        }

    },2000);
   
});

saludar.then(resultado => {
alert(resultado)
})
.catch(err =>{
    alert(err);
});