const criarBotao = () => {
    var row = document.querySelector('.recsToolbar')
    var automatico = document.createElement('div')

    automatico.setAttribute('class', 'automatico')
    automatico.innerText = "MEGALIKE"

    row.appendChild(automatico)
}


window.onload = function () {
    criarBotao()
}

setInterval(() => {
    const botao = document.querySelectorAll('.button')[2];
    const botao2 = document.querySelectorAll('.button');
    const x = document.querySelector('.automatico')

    botao2.forEach((item) => {
        x.addEventListener('click', () => {
            botao.click()
        })
    })
    
}, 1000)