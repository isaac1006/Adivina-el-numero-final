let numeroSecreto=0;
let intentos=0;//porque almenos una vez lo tendra que hacer //
//2.0 crearemos un array para ir almacenando los numeros sorteados que fueron utilizados //
let numeroMaximo=10;
let listaNumerosSorteados=[]; //2.1 almacenamos los numero dentro de la lista //


console.log(numeroSecreto);
function asignarTextoElemento(elemento,texto){ //creo la funcion que unira la etiqueta html con el el texo para describirla //
    // la funcion asignartTextoElemento reibe dos valirables llamadas (elemento,texto);
   let elementoHtml=document.querySelector(elemento);
   elementoHtml.innerHTML=texto;
   return;
}

function verificarIntento(){ //metodo del boton con el evento onclick// 
    let numeroDeUsuario =parseInt(document.getElementById('valorUsuario').value); 
    //1 creamos la variable para capturar el numero del input //
    /*2 parseInt convierto el dato a type number(documento.getElementByid)conecto html dandole el id de la 
       eiqueta correspondiente .value capturo el dato y no el objeto 
    */
      
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`felicidades acertaste el numero en ${intentos} ${(intentos== 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','el numero secreto es menor ');
        } else{
            asignarTextoElemento('p','el numero secreto es mayor');
        } 
        intentos++; 
        console.log(intentos);
        limpiarCaja(); // limpia el campo cada vez que no acierto
    }
    return;
}
  //esta funcion comentada tiene un error porque no garantiza que todos lo numeros maximos posibles ya esten sorteados //
/*function generarNumeroSecreto() { // funcion para crear un numero secreto //
  // return Math.floor(Math.random()*10)+1; // 
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //2.0.1// almacenar el numero generado en una variable //
   // 2.0 si el numero generado esta incluido en la lista hacemos una operacion si no otra //
   //2.1 si ya sorteamos todos los numeros posibles //
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   if (listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
   }else{  //si el numero generado esta incluido en la lista//
        if (listaNumerosSorteados.includes(numeroGenerado)){
           
        return numeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
   }
} */
function generarNumeroSecreto() {
    // Verifica si ya se han sorteado todos los números posibles
    if (listaNumerosSorteados.length >= numeroMaximo) {
        // Muestra un mensaje indicando que ya se sortearon todos los números posibles
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Declaración de la variable para almacenar el número generado
        let numeroGenerado;
        // Bucle do-while para asegurarse de que el número generado no esté en la lista
        do {
            // Genera un número aleatorio entre 1 y numeroMaximo (ambos inclusive)
            numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
        } while (listaNumerosSorteados.includes(numeroGenerado));
        
        // Agrega el número generado a la lista de números sorteados
        listaNumerosSorteados.push(numeroGenerado);
        // Muestra en la consola la lista de números sorteados actualizada
        console.log(listaNumerosSorteados);
        // Retorna el número generado
        return numeroGenerado;
    }
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value=''; 
    // de esta manera la conecto y le asigo el valor vacio//
  
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto'); // aqui solo utilizo el metodo para asignar la etiqueta y el valor deseado //
     asignarTextoElemento('p',`Indica un mumero del 1 al ${numeroMaximo}`);
     numeroSecreto=generarNumeroSecreto();
     intentos=1;
}
function reiniciarJuego() { //para iniciar juego es como si presionara f5 //
    limpiarCaja(); // limpio caja //
   condicionesIniciales(); // indicar mensaje de intervalo de numeros //
    // generar el numero aleatorio //
   document.querySelector('#reiniciar').setAttribute('disabled','true'); // deshabilitar el boton nuevo juego //
    // inicializar el numerde intentos de juego //
}

condicionesIniciales();


