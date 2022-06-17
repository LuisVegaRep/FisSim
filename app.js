//variables
const formulario = document.querySelector('.formulario')



//evento submit
formulario.addEventListener('submit',function(evento) {
    evento.preventDefault();

    cambioPagina();
    return;
})





//FUNCIONES
function cambioPagina() {
    let stName = document.getElementById("nombreUsuario").value;
    sessionStorage.setItem("stName", stName);
    let stPass = document.getElementById("contra").value;
    sessionStorage.setItem("stPass", stPass);

    location.href = 'Sim.html';
}

function soloLetras(e) {
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "abcdefghijklmnopqrstuvwxyz1234567890"

especiales = [8,13]
tecla_especial = false
for (var i in especiales) {
    if(key == especiales[i]) {
        tecla_especial = true;
        break;
    }
}

if(letras.indexOf(tecla) == -1 && !tecla_especial) {
    mostrarError('No se permiten espacios, letras mayusculas o caracteres especiales')
    return false;
}

}



//MOSTRAR ALERTAS
function mostrarAlerta(mensaje) {
    const alerta = document.createElement('P') //crear parrafo
    alerta.textContent = mensaje; //que va a decir la letra
    alerta.classList.add('aprobado') //añadir la clase

    formulario.appendChild(alerta) //añadirlo al html

    //removerlo despues de 5 seg
    setTimeout(() => {
        alerta.remove(); 
    } ,5000)
}

function mostrarError(mensaje) {
    const error = document.createElement('P') //crear parrafo
    error.textContent = mensaje; //que va a decir la letra
    error.classList.add('error') //añadir la clase

    formulario.appendChild(error) //añadirlo al html

    //removerlo despues de 5 sege
    setTimeout(() => {
        error.remove(); 
    } ,5000)
}