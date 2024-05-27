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




// function adicionar() {
//     // Obtém o valor digitado no input
//     var nomeAmigo = document.getElementById("nome-amigo").value;
    
//     // Verifica se o campo não está vazio
//     if (nomeAmigo.trim() !== "") {
//       // Cria um novo elemento de parágrafo para exibir o nome do amigo
//       var novoAmigo = document.createElement("p");
//       novoAmigo.textContent = nomeAmigo;
      
//       // Adiciona o novo amigo à lista de amigos
//       document.getElementById("lista-amigos").appendChild(novoAmigo);
      
//       // Limpa o campo de entrada
//       document.getElementById("nome-amigo").value = "";
//     } else {
//       alert("Por favor, insira um nome válido.");
//     }
//   }
  
//   // Função para sortear os amigos
//   function sortear() {
//     var amigos = document.querySelectorAll("#lista-amigos p");
//     var quantidadeAmigos = amigos.length;
    
//     // Verifica se há amigos na lista
//     if (quantidadeAmigos === 0) {
//       alert("Adicione pelo menos um amigo antes de sortear.");
//       return;
//     }
    
//     // Cria uma lista de índices para embaralhar
//     var indices = [];
//     for (var i = 0; i < quantidadeAmigos; i++) {
//       indices.push(i);
//     }
    
//     // Embaralha os índices
//     for (var i = quantidadeAmigos - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = indices[i];
//       indices[i] = indices[j];
//       indices[j] = temp;
//     }
    
//     // Exibe os resultados do sorteio
//     var listaSorteio = document.getElementById("lista-sorteio");
//     listaSorteio.innerHTML = "";
//     for (var i = 0; i < quantidadeAmigos; i++) {
//       var indiceSorteado = indices[i];
//       var amigoSorteado = amigos[indiceSorteado].textContent;
//       var resultadoSorteio = document.createElement("p");
//       resultadoSorteio.textContent = amigoSorteado + " => " + amigos[(indiceSorteado + 1) % quantidadeAmigos].textContent;
//       listaSorteio.appendChild(resultadoSorteio);
//     }
//   }
  
//   // Função para reiniciar o sorteio
//   function reiniciar() {
//     // Limpa a lista de amigos e o sorteio
//     document.getElementById("lista-amigos").innerHTML = "";
//     document.getElementById("lista-sorteio").innerHTML = "";
//   }
