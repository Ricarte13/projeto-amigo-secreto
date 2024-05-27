let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigo = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.valeu);
    if(listaAmigo.textContent == "") {
       listaAmigo.textContent = nomeAmigo.value;
    } else {
        listaAmigo.textContent = listaAmigo.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = "";
}

function sortear() {
    embaralha(amigos);
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

