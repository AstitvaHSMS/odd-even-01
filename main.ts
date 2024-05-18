let a = 2
let b = game.askForNumber("Enter a number")
if (b % a == 0) {
    game.splash("number is an even value")
} else if (b % a != 0) {
    game.splash("number is an odd value")
}
