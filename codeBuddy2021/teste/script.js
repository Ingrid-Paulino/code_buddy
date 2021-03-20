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
function clicar() {
    usuario.dadosDeLogin.cpf = document.getElementById('inCpf');
    usuario.dadosDeLogin.eMail = document.getElementById('inEmail');
    
    usuario.dadosDeContato.senha= document.getElementById('inSenha');
   
     usuario.dadosDeContato.nome= document.getElementById('inNome');
   usuario.dadosDeContato.sobrenome= document.getElementById('inSobrenome');
    usuario.dadosDeContato.nascimento = document.getElementById('inNascimento');
    usuario.dadosDeContato.rg= document.getElementById('inRg');
    usuario.dadosDeContato.sexo = document.getElementById('inSexo');
    usuario.dadosDeContato.cep= document.getElementById('inCep');
    usuario.dadosDeContato.endereco = document.getElementById('inEndereco');
  usuario.dadosDeContato.numero= document.getElementById('inNumero');
  usuario.dadosDeContato.bairro= document.getElementById('inBairro');
    usuario.dadosDeContato.complemento = document.getElementById('inComplemento');
     usuario.dadosDeContato.cidade= document.getElementById('inCidade');
     usuario.dadosDeContato.estado= document.getElementById('inEstado');
     usuario.dadosDeContato.telefone= document.getElementById('inTel');
     usuario.dadosDeContato.celular= document.getElementById('inCel'); 

    validarCpf (usuario.dadosDeLogin.cpf.toString())
    validarEmail (usuario.dadosDeLogin.cpf.toString())
    validarSenha(usuario.dadosDeLogin.senha.toString())

    
}

    
function validarCpf (cpf){
    var tipo =typeof(cpf);
    if (typeof(cpf)!="string") {
        window.alert(`ERRO! DIGITE DE NOVO`);
    }else {
        if (cpf.length()==14){
            if ((cpf[3]!='.')||(cpf[7]!='.')||(cpf[11]!='-')) {
                window.alert(`CPF ERRADO`);
            }
        }
    }
}
 
function validarEmail (email, confirmarEmail) {
    if (typeof(email)!="string") {
        
    }else {
        if(email!=confirmarEmail){
            window.alert(`VOCÊ DIGITOU O E-MAIL DIFERENTE. TENTE NOVAMENTE`);
        }
    }
}

function validarSenha  (senha,confirmarSenha) {
   if (typeof(senha)!="string") {
        window.alert(`ERRO! DIGITE DE NOVO.`);
    }else {
        if (senha.length()==8||9||10||11||12||13||14||15||16){
            if ((senha!='8')||(senha!='9')||(senha!='10')||(senha!='11')||(senha!='12')||(senha!='13')||(senha!='14')||(senha!='15')||(senha!='16')) {
                window.alert(`SENHA ERRADA`);
            }else {
                if(confirmarSenha!=senha) {
                    document.alert(`VOCÊ DIGITOU A SENHA DIFERENTE. TENTE NOVAMENTE`)
                }
            }
        } 
    }
}

function validarRg (rg){
    if (typeof(rg)!="string") {
        window.alert(`ERRO! DIGITE DE NOVO`);
    }else {
        if (rg.length()==10){
            if ((rg[2]!='.')||(rg[6]!='.')) {
                window.alert(`RG ERRADO`);
            }
        }
    }
}

function validarCep(cep){
    if (typeof(cep)!="string") {
        window.alert(`ERRO! DIGITE DE NOVO`);
    }
}