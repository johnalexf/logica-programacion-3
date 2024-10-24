// input del campo donde el usuario puede escribir su numero
let entradaUsuario = document.getElementById("inputDatoIngresado");;

//expresion regular para determinar que la entrada del usuario es un numero
const expresionRegular = /^\d+$/;

//variable para guardar el resultado del factorial según el numero entero que ingrese el usuario
let resultadoFactorial = 1;

//variable para guardar la entrada del usuario como entero, después de comprobar que si es entero el valor ingresado
let numero ;

//boton de calcular el factorial de la entrada del usuario
let botonCalcularFactorial = document.getElementById("botonCalcularFactorial");

//div que contiene el resultado del factorial
let divResultadoFactorial = document.getElementById("divResultadoFactorial");

//variable que guarda el modal de error de dato ingresado
const modal = document.getElementById('errorModal');

//función para cuando el usuario de click en el boton de calcular factorial del numero entero
botonCalcularFactorial.addEventListener('click', ()=>{
    if(VerificarSiNumero()){
        //después de que se comprueba que el usuario ingreso un numero entero
        // se convierte en entero la entrada de tipo string
        numero = parseInt(entradaUsuario.value);
        resultadoFactorial = calcularFactorial(numero);
        console.log(resultadoFactorial);
        divResultadoFactorial.innerHTML = ` <h2> El factorial del numero entero ${entradaUsuario.value} es : ${resultadoFactorial} </h2>`;
    }else{
        divResultadoFactorial.innerHTML = ` <p> por favor, escribe un numero entero, recuerda que el factorial solo se calcula para números enteros, no es para decimales o para textos </p>`;
    }
});


//función para verificar si el dato ingresado por el usuario es un numero
function VerificarSiNumero(){
    console.log("entro en verificar si el dato ingresado es numero");
    console.log(entradaUsuario.value)
    if (expresionRegular.test(entradaUsuario.value)){
        console.log("El valor ingresado si es numero entero");
        console.log(entradaUsuario.value)
        return true;
    }else{
        console.log("El valor ingresado no es numero entero");
        mostrarModal();
        // alert("Debes ingresar un numero entero");
        return false;
    }
}


//función para calcular el factorial de un numero entero
function calcularFactorial(numeroEntero){
    let resultado = 1;
    for(let i=numeroEntero  ; i > 1 ; i-- ){
        resultado = i*resultado;
    }
    return resultado;
}

// Función que muestra el modal de error de dato ingresado
function mostrarModal() {
    //ponemos el modal en display flex para que el margin; auto en el contenedor dentro del modal
    // se ajuste en el centro de la pagina
    modal.style.display = 'flex';
  }

  
// Función que cierra el modal cuando el usuario hace clic en la "X"
function cerrarModal() {
    modal.style.display = 'none';
  }
