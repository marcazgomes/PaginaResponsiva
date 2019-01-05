function toggle() {
    
    const classesCabecalho = document.getElementById('cabecalho').classList
    const classesMenu = document.getElementById('menu').classList

    if(classesCabecalho.contains('cabecalho')) {
        classesCabecalho.remove('cabecalho')
        classesCabecalho.add('cabecalho-botao')
        classesMenu.remove('menu')
        classesMenu.add('menu-botao')
    } else {
        classesCabecalho.remove('cabecalho-botao')
        classesCabecalho.add('cabecalho')
        classesMenu.remove('menu-botao')
        classesMenu.add('menu')
    }
}

var botao = document.getElementById('toggle')

botao.onclick = toggle