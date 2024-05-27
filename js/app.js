let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigo = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if(listaAmigo.textContent == "") {
       listaAmigo.textContent = nomeAmigo.value;
    } else {
        listaAmigo.textContent = listaAmigo.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = "";
}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[1] + ' --> ' + amigos[0] + '<br>';
        }else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

