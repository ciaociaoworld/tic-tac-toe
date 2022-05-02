
// 
var winningSituation = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]
// player 1 and player 2 
var player1 = 'O'
var player2 = 'X'

var boxes = document.querySelectorAll(".boxes")
var main = document.querySelector('.main')
var counter = 0


//function for player switch
main.addEventListener('click', function(event) {
    counter++
   if (counter % 2 == 0 && event.target.className == 'boxes') {
        event.target.className = 'cross'
    } else if (counter % 2 !== 0 && event.target.className == 'boxes') {
        event.target.className = 'circle'
    }
})

//function for validate the winner
var crossWin = document.querySelectorAll('.cross')
var circleWin = document.querySelectorAll('.circle')


    
    // for (let i = 0; i < winningSituation.length; i++)




