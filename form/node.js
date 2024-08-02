$(document).ready(function(){
    alert("Seu site carregou!");

    $('#btnCadastro').click(function(){

        var inputNome = $("#txtNome").val();
        var inputSobrenome = $("#txtSobrenome").val();
        var inputIdade = $("#txtIdade").val();
        var inputCPF = $("#txtCPF").val();
        var inputTelefone = $("#txtTelefone").val();
        var inputEmail = $("#txtEmail").val();
        var inputCidade = $("#txtCidade").val();

        alert("Cadastro realizado com as seguintes informações: \n Nome: " + inputNome + "\n Sobrenome: " + inputSobrenome + "\n Idade: " + inputIdade + "\n CPF: " + inputCPF + "\n Telefone: " +  inputTelefone + "\n Email: " + inputEmail + "\n Cidade: " + inputCidade)
    })
})