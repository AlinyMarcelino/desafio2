function checkForm() {
    // Fetching values from all input fields and storing them in variables.
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var endereco = document.getElementById("endereço").value;
    var numero = document.getElementById("numero").value;
    var celular = document.getElementById("celular").value;

    //Check input Fields Should not be blanks.
    if (nome == '' || cpf == '' || endereco == '' || numero == '' || celular == '') {
        alert("Por favor preencha todos os campos obrigatórios.");
    } else {
        //Notifying error fields
        var name = document.getElementById("nome");
        var cpf = document.getElementById("cpf");
        var endereco = document.getElementById("endereço");
        var numero = document.getElementById("numero");
        var celular = document.getElementById("celular");
        alert("Dados enviados com sucesso!");
        //Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
        if (nome.innerHTML == 'Nome' || cpf.innerHTML == 'CPF' || endereco.innerHTML == 'Endereço' || numero.innerHTML == 'Número' || celular.innerHTML == 'Celular') {
            
        } else {
            //Submit Form When All values are valid.
            document.getElementById("myForm").submit();                      
        }
    }
}