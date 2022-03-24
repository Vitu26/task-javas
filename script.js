1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
let nome = prompt("Escreva seu nome") 

alert("Seu nome é " +nome) 

console.log(nome) 

2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números. 

let num1 = parseInt(prompt("Digite um numero")) 

let num2 = parseInt(prompt("Digite outro numero")) 

console.log(num1 + num2)

3.	Crie um script que leia duas notas do usuário e calcule a média do aluno. 

let nota1 = parseInt(prompt("Escreva sua primeira nota")) 

let nota2 = parseInt(prompt("Escreva sua segunda nota")) 

console.log((nota1 + nota2)/2) 

4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 

let data1 = prompt("Escreva seu ano de nascimento: ") 

let data2 = prompt("Escreva o ano atual") 

console.log (data2 - data1) 

5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês. 

let valor1 = prompt("Qual valor da sua hora trabalhada?") 

 let hora = prompt ("Quantas horas você trabalha por dia?") 
 console.log ((valor1 * hora)*30) 


6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.   
( C = 5 * ((F-32) / 9)). 
let grau = prompt("Informe a temperatura em F") 
console.log (5 * ((grau-32) / 9)) 


EstruturaDeDecisao 

1.	Faça um Programa que peça dois números e imprima o maior deles. 

let num1 =parseInt(prompt("Digite o primeiro número"))  

let num2 =parseInt(prompt("Digite o segundo numero")) 

if (num1 > num2) {  

    console.log("Este numero é o maior "+num1)  

} else {  

    console.log("Este numero é o maior "+num2)  

} 


2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo. 


let num =parseInt(prompt("Digite um número")) 

if (num >= 0) { 

    console.log("Este numero é positivo") 

} else { 

    console.log("Este numero é negativo") 

3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido. 

let sexo = prompt("Digite seu sexo").toLowerCase(); 

if (sexo === "f" ) { 

    console.log("Feminino") 

} else if (sexo === "m")  { 

    console.log("Masculino") 

} else { 

    console.log ("Sexo invalido") 

4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar: 

1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; 

2.	A mensagem "Reprovado", se a média for menor do que sete; 

3.	A mensagem "Aprovado com Distinção", se a média for igual a dez. 

 

let nota1 = parseInt(prompt("Escreva sua primeira nota"))  
let nota2 = parseInt(prompt("Escreva sua segunda nota"))  
let media = ((nota1 + nota2)/2) 
 
console.log((nota1 + nota2)/2)  

if (console.log >= 7) { 

    alert("Aprovado. Sua nota é "+media) 

} else if (console.log === 10 ) {  

    alert("Aprovado com Distinção! Sua nota foi "+media) 

} else { 

    alert("Reprovado. Sua nota foi "+media) 

} 



5.	Faça um Programa que leia três números e mostre o maior e o menor deles. 

let num1 = prompt("Informe o primeiro numero") 

let num2 = prompt("Informe o segundo numero") 

let num3 = prompt("Informe o terceiro numero") 

if ( num1 > num2, num1 > num3, num2 > num3 ) { 

    console.log("Seu maior numero é "+num1,"Seu menor numero é "+num3) 

} else if (num1 < num2, num2 > num3, num3 < num1) { 

    console.log("Seu maior numero é "+num2,"Seu menor numero é "+num3) 

} else if (  num1 > num2, num1 > num3, num3 > num2) { 

    console.log("Seu maior numero é "+num1,"Seu menor numero é "+num2) 

} else if (num1 < num2, num2 > num3, num3 > num1) { 

    console.log("Seu maior numero é "+num2,"Seu menor numero é "+num1) 

} else if (num3 > num2, num3 > num1, num2 > num1) { 

    console.log("Seu maior numero é "+num3,"Seu menor numero é "+num1) 

}else { 

    console.log("Seu maior numero é "+num3,"Seu menor numero é "+num2) 

} 

6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar. 

let num =parseInt(prompt("Digite um número")) 

if (num % 2 == 0) { 

    console.log("Este numero é par") 

} else { 

    console.log("Este numero é impar") 

}