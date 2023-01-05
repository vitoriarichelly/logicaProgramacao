const getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase()
    if (userInput === 'pedra' || userInput === 'tesoura' || userInput === 'papel' || userInput === 'bomba') {
        return userInput;
    } else {
        console.log('erro')
        return false;
    }
}

console.log(getUserChoice('papel'))

function getComputerchoice() {
    const numberChoice = Math.floor(Math.random() * 3);
    //return 'pedra', 'tesoura'|| 'papel'
    let Option;
    switch (numberChoice) {
        case 0:
            Option = 'pedra';
            break;
        case 1:
            Option = 'tesoura'
            break;
        case 2:
            Option = 'papel'
            break;
        default:
            Option = 'erro estranho'
    }
    return Option
}

console.log(getComputerchoice());

function determineWinner(userchoice, computerchoite) {
    if (userchoice === computerchoite) {
        return 'empatou'
    }
    if (userchoice === 'pedra') {
        if (computerchoite === 'papel') {
            return 'computador ganhou'
        } else return 'humano ganhou!'
    }
    if (userchoice === 'papel') {
        if (computerchoite === 'tesoura') {
            return 'computador ganhou'
        }else return 'humano ganhou'
    }
    if (userchoice === 'tesoura') {
        if (computerchoite === 'pedra') {
            return 'computador ganhou'
        }else return 'humano ganhou'
    }
    if (userchoice === 'bomba'){
        return 'humano ganhou'
    }
}


console.log(determineWinner('pedra', 'tesoura'));

function getComputerchoice () {
}

const determineWinner = function (userchoice, computerchoite) {
}

const playGame = () => {
    let userchoice = getComputerchoice('bomba');
    let computerchoice = getComputerchoice ()
    console.log(`escolha do usuário foi: ${userchoice}`);
    console.log(`escolhe do computador foi: ${computerchoice}`);
    console.log (`o resultado foi: ${result}`);
}

playGame();
