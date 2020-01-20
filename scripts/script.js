//CRIANDO A FUNÇÃO QUE VAI COLETAR A ALTURA E LARGURA
    let altura
    let largura
    let vidas = 1
    let tempo = 10

    let criaMosquitoTempo = 1500

//RECUPERANDO O ENDEREÇO DO JOGO
    let nivel = window.location.search
    nivel = nivel.replace('?', '')

    if(nivel === 'normal'){
        //Tempo de 1500
        criaMosquitoTempo = 1500
    }else if(nivel === 'dificio'){
        //Tempo de 1000
        criaMosquitoTempo = 1000
    }else if(nivel === 'chucknorris'){
        //Tempo de 750
        criaMosquitoTempo = 750
    }

    //Coletando a altura e a largura
    function ajustaTamanhoPalcoJogo(){
        altura = window.innerHeight
        largura = window.innerWidth
        //console.log(altura, largura)
    }

    ajustaTamanhoPalcoJogo()

    let cronometro = setInterval(function(){
        tempo -= 1
        if(tempo < 0){
            clearInterval(cronometro)
            clearInterval(criaMosca)
            window.location = 'vitoria.html'
        }else{
            document.getElementById('cronometro').innerHTML = tempo
        }
        
    }, 1000)


//CRIANDO A FUNÇÃO QUE VAI RANDOMIZAR NOSSO MOSQUITO
    function posicaoRandomica(){
        //remover o mosquito anterior caso exista
        if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove()
            if(vidas > 3){
                window.location.href = 'fimDeJogo.html'
            }else{
                document.getElementById(`v${vidas}`).src = 'imagens/coracao_vazio.png'
                vidas ++
            }
            
        }

        let posicaoX = Math.floor(Math.random() * largura) - 90
        let posicaoY = Math.floor(Math.random() * altura) - 90

        //Testando se a altura e largura for menor que zero
        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY
    
        //console.log(posicaoX, posicaoY)
    
        //CRIANDO UM ELEMENTO HTML - MOSQUITO
            let mosquito = document.createElement('img')
            mosquito.src = 'imagens/mosca.png'
            //Adicionando o estilo criado
            mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
            mosquito.style.left = `${posicaoX}px` 
            mosquito.style.top = `${posicaoY}px` 
            mosquito.style.position = 'absolute' 
            mosquito.id = 'mosquito'
            //Evento ao clicar no mosquito
            mosquito.onclick = function(){
                this.remove()   //Removendo o mosquito
            }

            document.body.appendChild(mosquito)

    }

//CRIANDO A FUNÇÃO QUE VAI DEIXAR NOSSO MOSQUITO COM TAMANHO ALEATÓRIO
    function tamanhoAleatorio(){
        let classe = Math.floor(Math.random() * 3)
        //console.log(classe)

        switch(classe){
            case 0:
                return 'mosquito1'
            case 1:
                return 'mosquito2'
            case 2:
                return 'mosquito3'
        }
    }

//CRIANDO A FUNÇÃO QUE VAI DEFINIR O LADO ALEATÓRIO DO MOSQUITO
    function ladoAleatorio(){
        let classe = Math.floor(Math.random() * 2)
        //console.log(classe)

        switch(classe){
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'
        }
    }
