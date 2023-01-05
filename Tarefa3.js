const username = ''
 //Expressão ternária
 //A ? B : C 
 username ? console.log(`Hello ${username}!`) : console.log('Hello!')

 //pergunta que deve ser respondido
 const userQuestion = 'ficarei rica em 2023?';

const perguntaCompleta = username ? `${username} estáperguntando: ${userQuestion} `:` 
usuário anonimo perguntando: ${userQuestion}`

console.log (perguntaCompleta)

// Gerando um valor aleatorio
let randomNumber = Math.floor(Math.random()* 8);
console.log(randomNumber);

let eigthBall = ''

switch (randomNumber) {
    case 0: {
        eigthBall = 'It is certain (É uma certeza).';
        break;
    }
    case 1: {
        eigthBall = 'It is decidedly so (É decididamente assim.)';
        break;
    }
    case 2: {
        eigthBall = 'Reply hazy try again (Resposta nebulosa, tente de novo)';
        break;
    }
    case 3 : {
        eigthBall = 'Cannot predict now (Não consigo prever agora.)';
        break;
    }
    case 4: {
        eigthBall = 'Do not count on it (Não conte com isso.)';
        break;
    }
    case 5: {
        eigthBall = 'My sources say no (Minhas fontes dizem que não.)';
        break;
    }
case 6: {
    eigthBall = 'Outlook not so good (Perspectiva não tão boa)';
    break;
}
case 7: {
    eigthBall = 'Signs point to yes (Os sinais apontam que sim)';
    break;
}
    default: {
        eigthBall = 'sei lá, irmão!'
    }

}
console.log(eigthBall);

// if else else if
