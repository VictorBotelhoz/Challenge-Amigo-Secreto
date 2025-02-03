let listaAmigos = [];

// Adiciona amigos a lista
function adicionarAmigo() {
    if (amigo.value == ''){
        alert('Insira um nome.');
        return;
    } else {
        let amigos = document.querySelector('input').value;
    if (listaAmigos.includes(amigos)){
        return alert('Este nome já esta na lista');
    } else {
        listaAmigos.push(amigos);
        let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpa a lista antes de recriá-la

        listaAmigos.forEach(amigos => {
                        let li = document.createElement("li");
                        li.textContent = amigos;
                        lista.appendChild(li);
                    });
    }
    }
    
    console.log(listaAmigos);
    
    limparCampo();
}


function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    let lista = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
  
    lista.innerHTML = "";
    resultado.innerHTML = "";
  
    let li = document.createElement("li");
    li.innerHTML = `O amigo secreto sorteado: ${listaAmigos[amigoSorteado]}`;
  
    resultado.appendChild(li);
}

// Limpa o campo depois de adicionar
function limparCampo() {
    amigos = document.querySelector('input');
    amigos.value = '';
}