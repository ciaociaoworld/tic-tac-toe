
var box0 = document.querySelector('#top0')
var box1 = document.querySelector('#top1')
var box2 = document.querySelector('#top2')
var box3 = document.querySelector('#mid3')
var box4 = document.querySelector('#mid4')
var box5 = document.querySelector('#mid5')
var box6 = document.querySelector('#bot6')
var box7 = document.querySelector('#bot7')
var box8 = document.querySelector('#bot8')

var boxArray = [box0, box1, box2, box3, box4, box5, box6, box7, box8]

var crossCounter = 0
var circleCounter = 0
var drawCounter = 0
// var circle = document.querySelectorAll(".circle")
// var cross = document.querySelectorAll(".cross")
var winner1 = document.querySelector('.winner1')
var winner2 = document.querySelector('.winner2')

var boxes = document.querySelectorAll(".boxes")
var main = document.querySelector('.main')
var counter = 0


//function for player switch
main.addEventListener('click', function(event) {
    counter++
   if (counter % 2 == 0 && event.target.className == 'boxes') {
        event.target.className = 'cross'
        event.target.innerText = 'X'
    } else if (counter % 2 !== 0 && event.target.className == 'boxes') {
        event.target.className = 'circle'
        event.target.innerText = 'O'
    }
    var circle = document.querySelectorAll('.circle')
    // circle win
    if (box0.className === 'circle' && box1.className === 'circle' && box2.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"
        // auto reset function
        // counter = 0
        // for(let i = 0; i <= 8; i++) {
        //     boxArray[i].className ='boxes'
        // }
        
    } else if (box3.className === 'circle' && box4.className === 'circle' && box5.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (box6.className === 'circle' && box7.className === 'circle' && box8.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"
    // column
    } else if (box0.className === 'circle' && box3.className === 'circle' && box6.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"

    } else if (box1.className === 'circle' && box4.className === 'circle' && box7.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"

    } else if (box2.className === 'circle' && box5.className === 'circle' && box8.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"
    
    // diagonal
    } else if (box0.className === 'circle' && box4.className === 'circle' && box8.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (box6.className === 'circle' && box4.className === 'circle' && box2.className === 'circle') {
        winner1.textContent = "Congrats! Player 1 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (circle.length === 5) {
        winner1.textContent = "It's a DRAW!"
        winner2.textContent = "Click REST button to continue!"
    }  
    //cross win
    if (box0.className === 'cross'&& box1.className === 'cross' && box2.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (box3.className === 'cross' && box4.className === 'cross' && box5.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (box6.className === 'cross' && box7.className === 'cross' && box8.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    // column
    } else if (box0.className === 'cross' && box3.className === 'cross' && box6.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (box1.className === 'cross' && box4.className === 'cross' && box7.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (box2.className === 'cross' && box5.className === 'cross' && box8.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    // diagonal
    } else if (box0.className === 'cross' && box4.className === 'cross' && box8.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    } else if (box6.className === 'cross' && box4.className === 'cross' && box2.className === 'cross') {
        winner1.textContent = "Congrats! Player 2 win!"
        winner2.textContent = "Click REST button to continue!"
    }
})


//reset function
var resetFunction = document.querySelector('.reset')
var article = document.querySelector('article')

article.addEventListener('click', function(event) {
    winner1.textContent = ""
    winner2.textContent = ""
    counter = 0
        for(let i = 0; i <= 8; i++) {
            boxArray[i].className ='boxes'
            boxArray[i].textContent = ''
        }
})

//reset button sound










//used
//method 1 function for validate the winner

//cross win
// main.addEventListener('click', function(event) {
    
//     // row
//     if (box0.className === 'cross'&& box1.className === 'cross' && box2.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     } else if (box3.className === 'cross' && box4.className === 'cross' && box5.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     } else if (box6.className === 'cross' && box7.className === 'cross' && box8.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     // column
//     } else if (box0.className === 'cross' && box3.className === 'cross' && box6.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     } else if (box1.className === 'cross' && box4.className === 'cross' && box7.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     } else if (box2.className === 'cross' && box5.className === 'cross' && box8.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     // diagonal
//     } else if (box0.className === 'cross' && box4.className === 'cross' && box8.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     } else if (box6.className === 'cross' && box4.className === 'cross' && box2.className === 'cross') {
//         alert("Cross Win!")
//         crossCounter = crossCounter + 1
//     } 
// })

//circle win
// main.addEventListener('click', function(event) {
//     var circle = document.querySelectorAll(".circle")
//     var cross = document.querySelectorAll(".cross")
//     // row
//     if (box0.className === 'circle' && box1.className === 'circle' && box2.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     } else if (box3.className === 'circle' && box4.className === 'circle' && box5.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     } else if (box6.className === 'circle' && box7.className === 'circle' && box8.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     // column
//     } else if (box0.className === 'circle' && box3.className === 'circle' && box6.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     } else if (box1.className === 'circle' && box4.className === 'circle' && box7.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     } else if (box2.className === 'circle' && box5.className === 'circle' && box8.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     // diagonal
//     } else if (box0.className === 'circle' && box4.className === 'circle' && box8.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     } else if (box6.className === 'circle' && box4.className === 'circle' && box2.className === 'circle') {
//         alert("Circle Win!")
//         for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     } else if (circle.length === 5) {
//         alert('draw')
//          for(let i=0; i <= circle.length; i++) {
//             circle[i].className = 'boxes'
//             cross[i].className = 'boxes'
//             counter = 0
//          }
//     } 
// })

