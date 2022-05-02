<h1>Tic Tac Toe</h1>
<a href="https://ciaociaoworld.github.io/tic-tac-toe/">Click here to play the game</a>

<h2>Summary of Project</h2>

<h2>Plan</h2>

Step1: What I need to do at first stage

1. Think about the basic elements and bonus elements I need to add to this project.

    1.1 Switch Turns
    use odd and even method to switch the player

    1.2 Design logic for winning & visually display which player won
        
        1.2.1 use sample code blow:
```
var parentBox = document.querySelector('section')

parentBox.addEventListener('click', function(event) {
    if(event.target.tagName === 'DIV') {
        event.target.className = 'red'
        //you need to create a Class and backroundColor is red
    }
    // below is becasue querySelectorAll is like array. so need to use for loop to measure if 3 boxes turned to red.
    if(document.querySelectorAll('.red').length === 3) {
        var allDivElements = document.querySelectorAll('div')
        for(let i=0; i < allDivElements.length; i++) {
            allDivElements[i].className = 'green'
        }
    }
})
```
        
        1.2.2 As there are 9 boxes. Need to add this logic to each group of 3 boxes.

        Note: Think about boxes contain boxes. array[i][i]

2. Find out which codes I may need to use and which codes are used to add these elements.
3. Find out the difficult part I may face. Complete Flow Chart at first.
4. Image the final version of this project, think about what else functions should to be added.

Step2: Complete basic coding

1. Build simple html, CSS, and mainly focus on basic javascript 
2. Test
3. Add bonus elements to project
4. Test

Step3: Decoration

1. Finding online sources for decorating
2. complete Html and CSS
3. Test

Step4: What I learned

1. find out what I learned from this project, including coding,resources, etc.
2. Record these new things and find out which part I am prond of.

<h2>Cool Tech</h2>

<h2>Lessons</h2>