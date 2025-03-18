let nombreAmigos = [];
let sorteados = [];
console.log(sorteados)

function agregarAmigo() {
    //crea una captura del nombre que ingresa el usuario
    let amigoDeUsuario = document.getElementById('amigo').value; 
    console.log(amigoDeUsuario);
    
    //validacion de datos
    if (amigoDeUsuario === ''){
        alert('Por favor, inserte un nombre.');
        //si un amigo se repite
        }else if (nombreAmigos.includes(amigoDeUsuario)){
            alert('Ya insertaste ese nombre, por favor ingresa uno diferente.');
        }else{
        //si usuario indica un nombre
            nombreAmigos.push(amigoDeUsuario);
    }
    limpiarCaja();
    amigosAgregados();
    return;
}

// Capturar el evento de la tecla Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}


function amigosAgregados() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    //para recorrer el array

    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = nombreAmigos[i];
        listaAmigos.appendChild(li);
        //para recorrer la lista
    }
    return;
}

function sortearAmigo(){
    if(nombreAmigos.length === 0){
        alert('No hay amigos para sortear, por favor ingresa un nuevo nombre');
     } else {
        let amigoSecreto = nombreAmigos[Math.floor(Math.random()*nombreAmigos.length)];
        if(sorteados.includes(amigoSecreto)){
            sortearAmigo()
        }
        else{
            sorteados.push(amigoSecreto)
            let eliminarDeListaNombreAmigos = nombreAmigos.indexOf(amigoSecreto);
            //si no hay amigos en la lista
            if (eliminarDeListaNombreAmigos !== -1){
                nombreAmigos.splice(eliminarDeListaNombreAmigos, 1);
            }
            document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es: <strong>${amigoSecreto}</strong>`;

            // Vaciar completamente la lista de amigos
            nombreAmigos = []; // Se vacía el array
            document.getElementById('listaAmigos').innerHTML = ''; // Se borra la lista en pantalla

        }
    }
    
    if (sorteados.length === nombreAmigos.length){
        alert('Todos los nombres fueron sorteados')
        //funcion adicional: si se sortearon todos
    }          
    amigosAgregados(); 
}