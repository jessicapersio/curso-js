function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else  {
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancamas.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmas.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adultomas.jpg')
            } else {
                //idoso
                img.setAttribute('src','idosomas.jpg')
            }

        } else  if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criancafem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemfem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'adultofem.jpg')
            } else {
                //idoso
                img.setAttribute ( 'src', 'idosafem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}