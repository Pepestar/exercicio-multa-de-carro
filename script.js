function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong> ${vel}Km/h<strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p> Você está <strong>MULTADO</strong> por exesso de velocidade`
        res.innerHTML += `<p>Não ultrapasse o limite de 60km/h e Dirija sempre com cinto de segurança!</p>`
    }
}