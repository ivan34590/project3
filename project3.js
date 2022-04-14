let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
// Selecting the input element and get its value 
let button = document.getElementById("button");
let resetbutton = document.getElementById("resetButton");
resetbutton.addEventListener('click', function(){
    count1 = 0;
    document.getElementById("currentScore").innerHTML = `Current Score: ${count1}`;
    document.getElementById("button").removeAttribute("disabled");
    randomNumber = Math.floor(Math.random() * 100) + 1
    console.log(randomNumber)

})
let storeHighscore = []
let count1 = 0;
button.addEventListener('click', function(){
    let inputVal = Number(document.getElementById("myInput").value);
    
    if(isNaN(inputVal) == 1){
        alert("Please Enter A number")
    }
    else if(inputVal > randomNumber){
        
        document.getElementById("textThatChanges").innerHTML = 'Your number is too high';
        document.getElementById("currentScore").innerHTML = `Current Score: ${count1 + 1}`;
        count1 += 1

    }
    else if(inputVal < randomNumber){

        document.getElementById("textThatChanges").innerHTML = 'Your number is too low';
        document.getElementById("currentScore").innerHTML = `Current Score: ${count1 + 1}`;
        count1 += 1
    }
    else if(inputVal === randomNumber){
        count1 += 1
        document.getElementById("textThatChanges").innerHTML = 'Thats right!!!';
        document.getElementById("button").setAttribute("disabled","disabled");
        
        document.getElementById("currentScore").innerHTML = `Current Score: ${count1}`;
        console.log(count1)
        
        storeHighscore.push(count1);
        storeHighscore.sort(function(a,b){
            return a - b;
        })
        console.log(storeHighscore);
        document.getElementById("Highscore").innerHTML = `Highscore: ${storeHighscore[0]}`;
        


    }

});

// Displaying the value


