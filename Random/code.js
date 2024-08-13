$(document).ready(function(){
    var resposta = 1 + Math.floor(Math.random() * 100);
    var Chute = $("#chute").val()
    var tentativas = 0

    $('#btnResposta').click(function(){
        Chute = $("#chute").val()
        if (Chute > resposta){
            alert("O número secreto é MENOR, tente novamente!");
            tentativas = tentativas + 1;
        } else if (Chute < resposta){
            alert("O número secreto é MAIOR, tente novamente!");
            tentativas = tentativas + 1;
        } else if (Chute == resposta){
            alert("Você acertou o número " + resposta + " em " + tentativas + " tentativas");
        }
    })
})