function calcular(){
    var txtalt = document.getElementById('txtalt')
    var txtpeso = document.getElementById('txtpeso')
    if (txtalt.value.length == 0 || txtpeso.value.length == 0){
        window.alert('Digite o(s) campos(s) restante(s) antes de calcular!')
    }else{
        var altura = parseFloat(txtalt.value)
        var peso = parseFloat(txtpeso.value)
        if (altura <= 0 || peso <= 0){
            window.alert('Digite caracteres válidos nos campos correspondentes!')
        }else{
            var res = document.getElementById('res')
            document.getElementById('tela-resultado').classList.remove('ocultar-res')
            var imc = peso/(altura**2)
            if (imc < 18.5){
                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você está Abaixo do Peso!</p>`
            }else if (imc >= 18.5 && imc <= 24.9){
                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, o seu Peso está Normal!</p>`
            }else if (imc >= 25.0 && imc <= 29.9){
                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você está com Sobrepeso!</p>`
            }else if (imc >= 30.0 && imc <= 34.9){
                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você está com Obesidade de Grau I!</p>`
            }else if (imc >= 35.0 && imc <= 39.9){
                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você com Obesidade de Grau II!</p>`
            }else if (imc >= 40.0){
                res.innerHTML = `<p>O seu IMC é ${imc.toFixed(2)}, você com Obesidade de Grau III!</p>`
            }
            
        }
    }
}

function limpar(){
    var txtalt = document.getElementById('txtalt')
    var txtpeso = document.getElementById('txtpeso')
    var res = document.getElementById('res')
    var telaResult = document.getElementById('tela-resultado')
    txtalt.value = ''
    txtpeso.value = ''
    res.innerHTML = ''
    telaResult.classList.add('ocultar-res')
    txtalt.focus()
}