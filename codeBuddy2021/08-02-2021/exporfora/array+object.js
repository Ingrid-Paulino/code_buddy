let num = [5,8,4,6,]
console.log(num[0])
console.log(num)

//Busca no vetor onde esta o valor pedido, e mostra a posiçao onde se encontra 
//obs: Se colocar um valor que não tem, o JS vai me retornar -1
num.indexOf(8)
console.log(`O numero 8 se encontra na posição ${num.indexOf(8)}`)

//Cria mais um elemento na nossa var
num [4] = 2              
console.log(num[4])
console.log(num)

//O JS acrescenta o valor sem ter que especificar qual é a ultima casa
num.push(7)
console.log(num)

//Mostra quantos elementos tem na nossa variavel num
console.log(num.length)
console.log(`Ah ${num.length} elementos na var num`)

//Coloca todos os elementos em ordem
num.sort()
console.log(num.sort())

//modo 1
for(let a=0;a<num.length;a++){
    console.log(num[a]);
} 

//modo 2 deixa o codigo mais limpo
for(let a in num){
    console.log(num[a]);
}

//Tem como colocar nome em um array alem de numeros
var pessoa = ['Ricardo', 'Bernardi', '31'];
console.log(pessoa[0]); /*Mas essa nao é a melhor forma. usando um objeto é o ideal nesse caso 
é melhor pois ali tem varias informaçoes diferentes, como; nome, sobrenome e idade*/

//Para coisas com um valor sem ser muito  generico ja é melhor usar array ex
//Array usamos mais com listas, para contestos especificos
var frutas = [ 'laranja','abacaxi', 'uva', 'melão' ]
console.log(frutas)

//melhor forma é usando um objeto quando tiver varios dados diferentes
var pessoa = {nome:'Ricardo', sobrenome:'Bernardi', idade:32};
//forma de aplicar
console.log(pessoa['sobrenome']);
//ou
console.log(pessoa.idade)



//Dento de um objeto podemos colocar açoes tabem (funçoes)
var pessoa = {
    nome:'Ricardo',
    sobrenome:'Bernardi',
    idade:32,
    andar: function(){
        alert('caminhando');
       }
    };
//console.log(pessoa.andar());

