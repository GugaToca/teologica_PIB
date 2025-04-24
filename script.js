<script>
  document.getElementById('botao-enviar').addEventListener('click', function() {
    const comentarioInput = document.getElementById('comentario');
    const comentarioTexto = comentarioInput.value.trim();

    if (comentarioTexto) {
      const listaComentarios = document.querySelector('#lista-comentarios ul');
      const novoComentario = document.createElement('li');
      novoComentario.textContent = comentarioTexto;

      // Adiciona o novo comentário à lista
      listaComentarios.appendChild(novoComentario);

      // Limpa o campo de entrada
      comentarioInput.value = '';
    } else {
      alert('Por favor, insira um comentário antes de enviar.');
    }
  });
</script>
