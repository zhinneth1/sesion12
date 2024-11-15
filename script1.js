let numeros = [5,1,8,6,7,8,6,9];
let sumatoria = 0;
let promedio = 0;
 
for (let i = 0; i < numeros.length; i++) {
    sumatoria += numeros[i];    
}
 
promedio = sumatoria / numeros.length;
 
console.log(sumatoria); // Esto debería mostrar el total correcto de la suma
document.getElementById("resultado").value = sumatoria;
document.getElementById("promedio").value = promedio;