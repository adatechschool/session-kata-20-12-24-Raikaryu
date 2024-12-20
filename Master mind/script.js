const colorAllowed = ['bleu','vert','rouge','jaune','violet','noir','blanc','rose']

function generateSecretCode(colors, codeLength = 4) {
    const secretCombination = [];
    
    for (let i = 0; i < codeLength; i++) {
        // Génère un index aléatoire entre 0 et la longueur du tableau de couleurs - 1
        const randomIndex = Math.floor(Math.random() * colors.length);
        secretCombination.push(colors[randomIndex]);
    }
    console.log(secretCombination)
    return secretCombination;
}

function checkColor(colorGived){
   if(colorGived.length !== 4){
    return false
   }else{
    return colorGived.every(color => colorAllowed.includes(color));
   }
}

function checkCombination(colorGived, secretCombination){
    if (!checkColor(colorGived))
        return false;

    for (let i = 0; i < 4; i++){
        if(colorGived[i] !== secretCombination[i]){
        return false;
        }
    }
    return true
}

function playGame(colorGived, secretCombination){
    let maxTry = 12
    let numberOfTry = 0
    let win = false

   

    while (numberOfTry < maxTry && !win){
        numberOfTry ++

        if (!checkColor(colorGived)){
            console.log(`Proposition non valides, donner des couleurs parmi ${colorAllowed}`);
            continue;
        }

        win = checkCombination(colorGived, secretCombination);
        
        if(win){
            console.log(`Bravo vous avez gagner en ${numberOfTry} essais`);   
        }else if (numberOfTry === maxTry){
            console.log(`La combinaison secret était ${secretCombination}`);
        }else{
            console.log(`Essai ${numberOfTry}/${maxTry} : Continuez !`);
        }
    }
    return win;
}

// const secretCombination = ['bleu','bleu','jaune','vert']
const secretCombination = generateSecretCode(colorAllowed)

const test1 = ['bleu','rouge','jaune','violet']
const test2 = ['jaune','rouge','gris','bleu']
const test3 = ['bleu','bleu','jaune','vert']
console.log(checkColor(test1,colorAllowed))
console.log(checkColor(test2,colorAllowed))
console.log(checkColor(test3,colorAllowed))

console.log(checkCombination(test1, secretCombination))
console.log(checkCombination(test2, secretCombination))
console.log(checkCombination(test3, secretCombination))

console.log(playGame(test1, secretCombination))
console.log(playGame(test2, secretCombination))
console.log(playGame(test3, secretCombination))
