$(document).ready(function(){
    alert("Seu site carregou!");

        $("#btnCadastro").on("click", function(){

            var inputNome = $("#txtNome").val();
            var inputSobrenome = $("#txtSobrenome").val();
            var inputIdade = $("#txtIdade").val();
            var inputCPF = $("#txtCPF").val();
            var inputTelefone = $("#txtTelefone").val();
            var inputEmail = $("#txtEmail").val();
            var inputCidade = $("#cmbCidade").val();

            if(inputNome == ""){
                alert("Preencha seu nome!");
                return 0;
            } else if(inputSobrenome == ""){
                alert("Preencha seu sobrenome!");
                return 0;
            } else if(inputIdade == ""){
                alert("Preencha sua idade!");
                return 0;
            } else if(inputCPF == ""){
                alert("Preencha seu CPF!");
                return 0;
            } else if(inputTelefone == ""){
                alert("Preencha seu telefone!");
                return 0;
            } else if(inputEmail == ""){
                alert("Preencha seu email!");
                return 0;
            } else if(inputCidade == ""){
                alert("Selecione sua cidade!");
                return 0;
            } else {
                alert("Cadastro realizado com as seguintes informações: \n Nome: " + inputNome + "\n Sobrenome: " + inputSobrenome + "\n Idade: " + inputIdade + "\n CPF: " + inputCPF + "\n Telefone: " +  inputTelefone + "\n Email: " + inputEmail + "\n Cidade: " + inputCidade)
            }
        })

})