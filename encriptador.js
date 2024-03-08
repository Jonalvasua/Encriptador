const mensajeACambiar = document.querySelector("#textoACodificar");
const mensajeCambiado = document.querySelector("#mensajeCambiado");
const container = document.querySelector('.PreCodificado');
const copiar = document.querySelector('.copiar');
const mensajeACopiar = document.querySelector('.mensaje');
copiar.style.visibility = 'hidden';

// crear un array con las vocales
const vocales = ['a', 'e','i', 'o', 'u'];

// crear diccionario valores
const valores = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
};

// crear matriz para decodificacion
const matriz_claves = [
    ['a','ai'], 
    ['e','enter'],
    ['i','imes'],
    ['o','ober'],
    ['u', 'ufat'],
];

function textoIngresadoACodificar() {
    const texto = codificacion(mensajeACambiar.value);
    mensajeCambiado.value = texto;
    mensajeACambiar.value='';
    mensajeCambiado.style.backgroundImage='none';
    container.style.display = 'none';
    copiar.style.visibility = 'visible';
}   

function textoIngresadoADecodificar() {
    const texto = decodificacion(mensajeACambiar.value);
    mensajeCambiado.value = texto;
    mensajeACambiar.value='';
    mensajeCambiado.style.backgroundImage='none';
    container.style.display = 'none';
    copiar.style.visibility = 'visible';
}   

function codificacion(fraseAEncriptar) {

    let textoNuevo = '';
    fraseAEncriptar = fraseAEncriptar.toLowerCase();
    // recorrer texto letra por letra
    for (let i = 0; i < fraseAEncriptar.length; i++) {
        if (vocales.includes(fraseAEncriptar[i])){
            textoNuevo += valores[fraseAEncriptar[i]];
        } else {
            textoNuevo += fraseAEncriptar[i];
        }
    }

    return textoNuevo;

}

function decodificacion(fraseADesencriptar) {
    fraseADesencriptar = fraseADesencriptar.toLowerCase();
    // recorrer texto letra por letra
    for (let i = 0; i < matriz_claves.length; i++) {
        if (fraseADesencriptar.includes(matriz_claves[i][1])){
            fraseADesencriptar = fraseADesencriptar.replaceAll(
                matriz_claves[i][1],
                matriz_claves[i][0]
            )
        }
    }
    return fraseADesencriptar
}

function copiarFrase(){
    navigator.clipboard.writeText(mensajeACopiar.value)
}
