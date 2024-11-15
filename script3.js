let contraseñacorrecta="Isabella0615*"
let contraseñaingresada;

do{
    contraseñaingresada = prompt("Digite su contraseña");
    if(contraseñaingresada != contraseñacorrecta){
        alert("Contraseña errada, intente de nuevo");
    }
}while(contraseñaingresada !== contraseñacorrecta);
alert("Su contraseña es correcta.")