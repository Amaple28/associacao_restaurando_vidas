
//Mensagem form fale conosco
document.getElementById('form-fale-conosco').addEventListener('click', function() { 
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value; 
    var mensagem = document.getElementById("mensagem").value;

    var messageToSend = `Olá vim pelo site! Meu nome é `+ nome + `. \n`; 
    messageToSend += `*E-mail:* ` + email + `. \n\n\n`; 
    messageToSend += `*Mensagem:* `+ mensagem; 

    window.open("https://wa.me/5531998618396?text=" + messageToSend);
});