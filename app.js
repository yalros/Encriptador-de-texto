function encriptar() {
    var textoEntrada = document.getElementById('inputTexto').value.toLowerCase();

    if (!validarTexto(textoEntrada)) {
        alert('El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acento.');
        return;
    }

    var textoCifrado = textoEntrada.replace(/e/g, 'enter')
                                   .replace(/o/g, 'ober')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/u/g, 'ufat');

    mostrarResultado(textoCifrado);
}

function desencriptar() {
    var textoEntrada = document.getElementById('inputTexto').value.toLowerCase();

    if (!validarTexto(textoEntrada)) {
        alert('El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas sin acento.');
        return;
    }

    var textoCifrado = textoEntrada.replace(/enter/g, 'e')
                                   .replace(/ober/g, 'o')
                                   .replace(/imes/g, 'i')
                                   .replace(/ai/g, 'a')
                                   .replace(/ufat/g, 'u');

    mostrarResultado(textoCifrado);
}

function mostrarResultado(texto) {
    document.getElementById('imgDerecha').style.display = 'none';
    document.getElementById('texto1').style.display = 'none';
    document.getElementById('texto2').textContent = texto;
    document.getElementById('copiarEncriptado').style.display = 'inherit';
}

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/; // Solo permite letras minúsculas y espacios
    return regex.test(texto);
}


function copiar() {
    var contenido = document.getElementById('texto2').textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(contenido)
            .then(function() {
                alert('Texto copiado al portapapeles');
            })
            .catch(function(error) {
                console.error('Error al copiar el texto: ', error);
            });
    } else {
        // Si Clipboard API no funciona en navegador
        var textarea = document.createElement('textarea');
        textarea.value = contenido;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            alert('Texto copiado al portapapeles');
        } catch (error) {
            console.error('Error al copiar el texto: ', error);
        }
        document.body.removeChild(textarea);
    }
}