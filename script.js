
document.addEventListener('DOMContentLoaded', function () {

    var botaoEntrar = document.querySelector('.botao_entrar');
    var inputUsuario = document.getElementById('Usuário');
    var inputSenha = document.getElementById('Senha');

    botaoEntrar.addEventListener('click', function (event) {
        if (inputUsuario.value.trim() === '' || inputSenha.value.trim() === '') {
            alert('Por favor, preencha ambos os campos antes de clicar em Entrar.');
            event.preventDefault(); 
        } else {
            alert('Login realizado com sucesso!');
        }
    });
});