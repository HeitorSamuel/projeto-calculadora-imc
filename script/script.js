// Função responsável pelo cálculo do IMC
function calcular(){

    // Captura os inputs
    var txtalt = document.getElementById('txtalt')
    var txtpeso = document.getElementById('txtpeso')

    // Verifica se algum campo está vazio
    if (txtalt.value.length == 0 || txtpeso.value.length == 0){

        window.alert('Digite o(s) campos(s) restante(s) antes de calcular!')

    }else{

        // Converte os valores para número decimal
        var altura = parseFloat(txtalt.value)
        var peso = parseFloat(txtpeso.value)

        // Verifica valores inválidos
        if (altura <= 0 || peso <= 0){

            window.alert('Digite caracteres válidos nos campos correspondentes!')

        }else{

            // Captura a área do resultado
            var res = document.getElementById('res')

            // Exibe a área de resultado
            document.getElementById('tela-resultado')
            .classList.remove('ocultar-res')

            // Fórmula do IMC
            var imc = peso/(altura**2)

            // Classificação do IMC
            if (imc < 18.5){

                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você está Abaixo do Peso!</p>`

                res.style.color = '#780000'

            }else if (imc >= 18.5 && imc <= 24.9){

                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, o seu Peso está Normal!</p>`

            }else if (imc >= 25.0 && imc <= 29.9){

                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você está com Sobrepeso!</p>`

                res.style.color = '#780000'

            }else if (imc >= 30.0 && imc <= 34.9){

                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você está com Obesidade de Grau I!</p>`

                res.style.color = '#780000'

            }else if (imc >= 35.0 && imc <= 39.9){

                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você com Obesidade de Grau II!</p>`

                res.style.color = '#780000'

            }else{

                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você com Obesidade de Grau III!</p>`

                res.style.color = '#780000'
            }
        }
    }
}

// Função responsável por limpar os campos
function limpar(){

    // Captura os elementos
    var txtalt = document.getElementById('txtalt')
    var txtpeso = document.getElementById('txtpeso')
    var res = document.getElementById('res')
    var telaResult = document.getElementById('tela-resultado')

    // Limpa os valores dos inputs
    txtalt.value = ''
    txtpeso.value = ''

    // Limpa o conteúdo do resultado
    res.innerHTML = ''

    // Oculta novamente a área de resultado
    telaResult.classList.add('ocultar-res')

    // Retorna o foco para o primeiro input
    txtalt.focus()
}