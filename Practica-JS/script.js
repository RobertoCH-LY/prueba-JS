// DIFERENCIA let vs var - explicado claro

function probarVar() {
    console.log("=== PROBANDO VAR ===");
    if (true) {
        var nombre = "Juan con VAR";
        console.log("  DENTRO del if: " + nombre);
    }
    console.log("  FUERA del if: " + nombre);
    // PROBLEMA: var funciona en TODA la función
    document.getElementById("resultado").innerHTML = 
        "VAR: " + nombre + " ← ¡Existe fuera del if! (puede causar errores)";
}

function probarLet() {
    console.log("=== PROBANDO LET ===");
    let resultado = "";
    if (true) {
        let nombre = "Ana con LET";
        console.log("  DENTRO del if: " + nombre);
        resultado = nombre;  // Guardamos antes de salir
    }
    // let nombre YA NO EXISTE aquí (CORRECTO)
    console.log("  FUERA del if: nombre no existe, solo resultado");
    document.getElementById("resultado").innerHTML = 
        "LET: " + resultado + " ← Solo existe DENTRO del if (más seguro)";
}

// ES2015 (ES6 - junio 2015): solucionó problemas de var
/*
ANTES: solo var → errores porque funcionaba en toda la función
AHORA: let/const → variables solo donde las necesitas
+ Arrow functions, plantillas `Hola ${nombre}`, clases
Código más seguro y fácil de entender
*/

window.onload = function() {
    document.getElementById("mostrar").onclick = mostrarVideo;
    document.getElementById("ocultar").onclick = ocultarVideo;
    document.getElementById("campo-nombre").onblur = validarNombre;
};

function mostrarVideo() {
    let caja = document.getElementById("caja-video");
    if (caja.children.length == 0) {
        let video = document.createElement("iframe");
        video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
        video.width = "400";
        video.height = "225";
        caja.appendChild(video);
    }
}

function ocultarVideo() {
    let caja = document.getElementById("caja-video");
    let video = caja.querySelector("iframe");
    if (video) caja.removeChild(video);
}

function validarNombre() {
    let campo = document.getElementById("campo-nombre");
    let nombre = campo.value.trim();
    if (nombre == "") {
        document.getElementById("mensaje-error").innerHTML = "Escribe tu nombre";
    } else {
        document.getElementById("mensaje-error").innerHTML = "";
    }
}
