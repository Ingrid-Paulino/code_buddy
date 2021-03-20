var usuario = {
    dadosDeLogin: {
        cpf: "",
        eMail: "",
        senha: "",
    },
    dadosDeContato: {
        nome: "",
        sobrenome: "",
        nascimento: "",
        rg: "",
        sexo: "",
        cep: "",
        endereco: "",
        numero: "",
        bairro: "",
        complemento: "",
        cidade: "",
        estado: "",
        telefone: "",
        celular: "",

    }
}

function clicar(InCpf) {
    usuario.dadosDeLogin.cpf = document.getElementById("inCpf").value;
    console.log(usuario.dadosDeLogin.cpf);
    function validarCpf (iCpf){
        if (typeof(iCpf) != "string") {
            window.alert(`DEU RUIM DIGITE DE NOVO`);
        }else {
            if (iCpf.length()==14){
                if ((iCpf[3]!='.')||(iCpf[7]!='.')||(iCpf[11]!='-')) {
                    window.alert(`CPF ERRADO`);
                }
            }else 
    {
                    window.alert(`CPF ERRADO`);
            }
    
        }
}
}

function clicar() {
    usuario.dadosDeLogin.eMail = document.getElementById("email").value;
    console.log(usuario.dadosDeLogin.eMail);
}

function clicar() {
    usuario.dadosDeLogin.senha = document.getElementById("senha").value;
    console.log(usuario.dadosDeLogin.cpf);
}

function clicar() {
    usuario.dadosDeContato.nome = document.getElementById("nome").value;
    console.log(usuario.dadosDeContato.nome);
}

function clicar() {
    usuario.dadosDeContato.sobrenome = document.getElementById("sobrenome").value;
    console.log(usuario.dadosDeContato.sobrenome);
}

function clicar() {
    usuario.dadosDeContato.nascimento = document.getElementById("nascimento").value;
    console.log(usuario.dadosDeContato.nascimento);
}

function clicar() {
    usuario.dadosDeContato.rg = document.getElementById("rg").value;
    console.log(usuario.dadosDeContato.rg);
}

function clicar() {
    usuario.dadosDeContato.sexo = document.getElementById("sexo").value;
    console.log(usuario.dadosDeContato.sexo);
}

function clicar() {
    usuario.dadosDeContato.cep = document.getElementById("cep").value;
    console.log(usuario.dadosDeContato.cep);
}

function clicar() {
    usuario.dadosDeContato.endereco = document.getElementById("endereco").value;
    console.log(usuario.dadosDeContato.endereco);
}

function clicar() {
    usuario.dadosDeContato.numero = document.getElementById("num").value;
    console.log(usuario.dadosDeContato.numero);
}

function clicar() {
    usuario.dadosDeContato.bairro = document.getElementById("bairro").value;
    console.log(usuario.dadosDeContato.bairro);
}

function clicar() {
    usuario.dadosDeContato.complemento = document.getElementById("complemento").value;
    console.log(usuario.dadosDeContato.complemento);
}

function clicar() {
    usuario.dadosDeContato.cidade = document.getElementById("cidade").value;
    console.log(usuario.dadosDeContato.cidade);
}

function clicar() {
    usuario.dadosDeContato.estado = document.getElementById("estado").value;
    console.log(usuario.dadosDeContato.estado);
}

function clicar() {
    usuario.dadosDeContato.telefone = document.getElementById("tel").value;
    console.log(usuario.dadosDeContato.telefone);
}

function clicar() {
    usuario.dadosDeContato.celular = document.getElementById("cel").value;
    console.log(usuario.dadosDeContato.celular);
}






