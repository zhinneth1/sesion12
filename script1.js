let numero = [1,2,3,4,5];
let suma=0;
let promedio=0;
for(let i=0; i < numero.length; i++){
    suma=+numero[i];
}

promedio = suma/numero.length;
document.getElementById("resultado").value=suma;
document.getElementById("promedio").value=promedio;