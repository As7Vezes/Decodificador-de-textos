let botaoCriptografar = document.getElementById("button_encrypt");
let botaoDescriptografar = document.getElementById("button_decrypt");
let botaoCopiar = document.getElementById("button_copy");

botaoCriptografar.addEventListener('click', criptografar);
botaoDescriptografar.addEventListener('click', descriptografar);
botaoCopiar.addEventListener('click', copiar);

function criptografar() {
  let textoASerCriptografado = document.querySelector('.container_input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
  if (textoASerCriptografado) {
      textoASerCriptografado = textoASerCriptografado.replaceAll('e', 'enter');
      textoASerCriptografado = textoASerCriptografado.replaceAll('i', 'imes');
      textoASerCriptografado = textoASerCriptografado.replaceAll('a', 'ai');
      textoASerCriptografado = textoASerCriptografado.replaceAll('o', 'ober');
      textoASerCriptografado = textoASerCriptografado.replaceAll('u', 'ufat');
      textoASerCriptografado = textoASerCriptografado.replaceAll(' ', '');
      escreverResultado(textoASerCriptografado);
  }
}

function descriptografar() {
  let textoASerDescriptografado = document.querySelector('.container_input').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
  if (textoASerDescriptografado) {
      textoASerDescriptografado = textoASerDescriptografado.replaceAll('enter', 'e');
      textoASerDescriptografado = textoASerDescriptografado.replaceAll('imes', 'i');
      textoASerDescriptografado = textoASerDescriptografado.replaceAll('ai', 'a');
      textoASerDescriptografado = textoASerDescriptografado.replaceAll('ober', 'o');
      textoASerDescriptografado = textoASerDescriptografado.replaceAll('ufat', 'u');
      textoASerDescriptografado = textoASerDescriptografado.replaceAll(' ', '');
      escreverResultado(textoASerDescriptografado);
  }
}

function escreverResultado(texto) {
  document.getElementById("container_input_result").innerText = texto;
}

function copiar() {
  let textoCopia = document.getElementById('container_input_result').innerText;
  if (textoCopia) {
      navigator.clipboard.writeText(textoCopia)
      .then(() => {
          alert("Texto copiado para a área de transferência!");
      })
  }
}
