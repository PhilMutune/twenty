
alert("WELCOME! In this game you will battle aganist thy computer, who ever gets closer to the number 20 WINS!")
comp = 0;
user = 0;
do {
var compDraw = Math.floor(Math.random() * 10 )+ 1;
comp = comp + compDraw;
alert(` The computer scored ${compDraw}. the computers new total is ${comp}`)

} while (comp <= 16)

alert("User guess a number")

do {
    var compDraw = Math.floor(Math.random() * 10 )+ 1;
    user = user +compDraw;
    alert(`your new number is ${compDraw}. you now have ${user}`)
    var conT = prompt(`Would you like to play again?? press Y for Yes & N for No`)
} while ((user <= 19) && (conT == "Y"))

alert(`Computer Score: ${comp}. User Score: ${user}`)

if ((comp > 20) && (user < 21) && (user > computer)) {
    alert(`Congratulations! You won with a score of ${user}.`)
    user++
    alert(`The score is; Computer: ${comp} Human: ${user}`)
} else if ((comp> 20) && (user < 21) && (comp > user)) {
    alert(`Congratulations! You won with a score of ${user}`)
    user++
    alert(`The score is; Computer: ${comp} Human: ${user}`)
} else if ((comp < 21) && (user < 21) && (user > comp)) {
    alert(`Congratulations! You won with a score of ${user}`)
    user++
    alert(`The score is; Computer: ${comp} Human: ${user}`)
} else if ((comp < 21) && (user < 21) && (comp > user)) {
    alert(`Uh oh! The computer won with a score of ${user}`)
    comp++
    alert(`The score is; Computer: ${comp} Human: ${user}`)
} else if ((comp < 20) && (user < 21) && (comp == user)) {
    alert(`WOW! You tied with a score of ${user}!`)
    alert(`The score is; Computer: ${comp} Human: ${user}`)
} else { 
    alert(`Uh oh! You lost with a score of ${user}.`);
    comp++
    alert(`The score is; Computer: ${comp} Human: ${user}`)
}


