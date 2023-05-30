function clicado(){
    var x = document.getElementById('conteudo')
    x.innerHTML='clicado'
}
function data(){
    var data = new date()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getfullYear()
    mes = mes+1
    var span = document.getElementById('span')
    span.innerHTML = dia +"/"+mes+"/"+ano
}
function arredondar(){
    var x = document.getElementById('div')
    x.style.borderRadius = '50%'
    x.style.backgroundColor = 'red'
}
function tente(){
    var a = document.getElementById('tente')
    a.style.marginLeft = '100px'
    var msg = document.getElementById('msg')
    msg.innerHTML = 'trouxa'
}
function denovo(){
    var a = document.getElementById('tente')
    a.style.marginLeft='0'
    document.getElementById('msg').innerHTML = ''
}


