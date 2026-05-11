const { FLOAT } = require("sequelize")

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
            var imc = peso/(altura**2)
            if (imc < 18.5){
                res.innerHTML = `<p>O seu IMC é ${imc}, você está Abaixo do Peso!</p>`
            }else if (18.5 <= imc <= 24.9){
                res.innerHTML = `<p>O seu IMC é ${imc}, o seu Peso está Normal!</p>`
            }else if (25.0 <= imc <= 29.9){
                res.innerHTML = `<p>O seu IMC é ${imc}, você está com Sobrepeso!</p>`
            }else if (30.0 <= imc <= 34.9){
                res.innerHTML = `<p>O seu IMC é ${imc}, você está com Obesidade de Grau I!</p>`
            }else if (35.0 <= imc <= 39.9){
                res.innerHTML = `<p>O seu IMC é ${imc}, você com Obesidade de Grau II!</p>`
            }else if (imc >= 40.0){
                res.innerHTML = `<p>O seu IMC é ${imc}, você com Obesidade de Grau III!</p>`
            }
            
        }
    }
}

function limpar(){
            altura.value = ''
            peso.value = ''
            res.innerHTML = ''
}