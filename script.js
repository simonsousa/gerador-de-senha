let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#botao')

let tamSenha = document.querySelector('#Valor')
let senha = document.querySelector('#senha')

let containerDaSenha = document.querySelector('#container-senha')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"

let novaSenha = ""

tamSenha.innerHTML = sliderElement.value

slider.oninput = function() {
    tamSenha.innerHTML = this.value
}

function gerarSenha() {

    let pass = ""

    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerDaSenha.classList.remove("escond")
    senha.innerHTML = pass
    novaSenha = pass

}

function copiaSenha() {
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(novaSenha)
}