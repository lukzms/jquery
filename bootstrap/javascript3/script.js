//if
//for
var nomes=[
    'a', 
    'b',
    'c',
    'd'
]//arrey

for(var i = 0; i<nomes.length; i++){
    document.write(i+1 ,'-',nomes[i])
    document.write('<br>')
}
document.write('<hr>')
for(nome in nomes){
    document.write(nomes[nome])
    document
}


//while
var c =0
while(c<nomes.length){
    document.write(nomes)
    c++
}
//switch
var idade = 20
switch(idade){
    case '17':
        document.writed("dezessete")
        break
    case '20':
        document.write('vinte')
        break
    default:
        document.write(' noa informe')

}

//foreach

nome.forEach(
    function(nome, index){
        index = index+1
        document.write(index, '-', nome,'<br>')
    }
)

var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundos = data.getSeconds()

document.write(hora, ':' ,minuto, ':', segundos)


