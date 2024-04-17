function voltarParaIndex() {
    window.location.href = "index.html";
}

function calcular_circulo() {
    let raio = document.getElementById ("circle")
    let raioValue = raio.value
    let calculo = 3.1415 * (raioValue ** 2) 
    let resultado = document.getElementById("resultado_circulo")
    return resultado.textContent = "O valor do raio é igual a: " + calculo
}

function calcularCubo(){
    var area = document.getElementById("input_cub")
    var areaValue = area.value
    var calculo = 6 * (areaValue ** 2)
    var resultado = document.getElementById("cubo_rsl")
    return resultado.textContent = "O resultado é " + calculo
}

function calcularRetangulo(){
    var altura = document.getElementById("input_ret1")
    var base = document.getElementById("input_ret2")
    var alturaValue = altura.value
    var baseValue = base.value
    var calculo = alturaValue * baseValue
    var resultado = document.getElementById("ret_rsl")
    return resultado.textContent = "O resultado é " + calculo
}

function calcularRomboedro(){
    var distM = document.getElementById("input_rombD")
    var distm = document.getElementById("input_rombd")
    var distMValue = distM.value
    var distmValue = distm.value
    var calculo = 3 * distMValue * distmValue
    var resultado = document.getElementById("romb_rsl")
    return resultado.textContent = "O resultado é " + calculo
}

function calcularTrapezoide(){
    var baseM = document.getElementById("input_trapB")
    var basem = document.getElementById("input_trapb")
    var alturaT = document.getElementById("input_trapa")
    var baseMValue = baseM.value
    var basemValue = basem.value
    var alturaTValue = alturaT.value 
    var calculo = ((baseMValue + basemValue) * alturaTValue) / 2
    var resultado = document.getElementById("trap_rsl")
    return resultado.textContent = "O resultado é " + calculo
}

function calcularQuadrado(){
    var lado = document.getElementById("input_quad")
    var ladoValue = lado.value 
    var calculo = ladoValue ** 2
    var resultado = document.getElementById("quad_rsl")
    return resultado.textContent = "O resultado é " + calculo
}

function calcularCuboide(){
    var alturaC = document.getElementById("input_cubdA")
    var comprimento = document.getElementById("input_cubdC")
    var largura = document.getElementById("input_cubdL")
    var alturaCValue = alturaC.value
    var comprimentoValue = comprimento.value 
    var larguraValue = largura.value 
    var calculo = (2 * alturaCValue * comprimentoValue) + (2 * alturaCValue * larguraValue) + (2 * comprimentoValue * larguraValue)
    var resultado = document.getElementById("cubd_rsl")
    return resultado.textContent = "O resultado é " + calculo
}