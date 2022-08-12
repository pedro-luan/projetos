let formulario = document.querySelector('form')

function buscar(){
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    let nome = document.getElementById('name')
    url += nome.value
    url = url.toLocaleLowerCase()
    let resposta = document.getElementById('content')
    let imagem = document.getElementById('poke')
    let html = ''
    fetch(url)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + data.name + '<br>'
            html = html + 'type: ' + data.types[0].type.name
            resposta.innerHTML = html
            imagem.innerHTML = '<img src="' + data.sprites.front_default + '"><img src="' + data.sprites.back_default + '">'
        })
        .catch(function(err){
            console.log(err)
        })
}