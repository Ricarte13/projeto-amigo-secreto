let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == '') {
        alert('Informe um nome válido!')
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert("Nome já existente, digite outro nome!");
        return;
    }

    let listaAmigo = document.getElementById('lista-amigos');
    
    amigos.push(nomeAmigo.value);
    
    if (listaAmigo.textContent == '') {
        listaAmigo.textContent = nomeAmigo.value;
    } else {
        listaAmigo.textContent = listaAmigo.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione no mínimo 4 nomes!');
        return;
    }

    embaralha(amigos);
    
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] +
                    '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document
        .getElementById('lista-amigos')
        .innerHTML = '';
    document
        .getElementById('lista-sorteio')
        .innerHTML = '';
}