function ValidarDados() {
    if (document.getElementById("nome").value == "" || 
        document.getElementById("cpf").value == "" ||
        document.getElementById("rua").value == "" ||
        document.getElementById("numero").value == "" ||
        document.getElementById("celular").value == "") 
        {
            alert("Favor preencher os campos obrigatórios.");
            return false;
    }
    else{
        if (!ValidarCPF(document.getElementById('cpf').value )) {
            return false;
        }
        else
        {
            alert('Formulário enviado com sucesso!');
            return true;
        }
    }
}