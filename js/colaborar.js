//Copiar chave pix
document.getElementById('copy-chave-pix').addEventListener('click', function () {
    var copyText = document.getElementById('chave-pix').value;
    navigator.clipboard.writeText(copyText);

    document.getElementById('copy-chave-pix').innerHTML = 'Copiado!';
    setTimeout(function () {
        document.getElementById('copy-chave-pix').innerHTML = 'Copiar Chave PIX';
    }, 3000);

});

// Mensagem para colaborar
document.getElementById('contato-colaborar').addEventListener('click', function () {
    var nome = document.getElementById('nome-colaborar').value;
    window.open('https://wa.me/5531998618396?text=Olá vim pelo site! Meu nome é ' + nome + ' e gostaria de conhecer mais sobre as formas de apoiar o projeto.', '_blank');
});