
function calc (... input){

    console.log(input);

    input = input[0].split(" ");

    if(input.includes('+')){
        
        return sum(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (input.includes('-')){
        return sub(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (input.includes('*')){
        return mul(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (input.includes('/')){
        return div(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else {
        return "Error";
    }
}

function sum (n, n2){
    return n + n2; 
}

function sub (n, n2){
    return n - n2; 
}

function mul (n, n2){
    return n * n2; 
}

function div (n, n2) {
    try {
        return n / n2;
    } catch(Exception) {
        console.error('Error');
    }
}

function enableButtons(){

    if(document.getElementById("display").innerText.length == 1){
        document.getElementById("sum").disabled = false;
        document.getElementById("sub").disabled = false;
        document.getElementById("mul").disabled = false;
        document.getElementById("div").disabled = false;
        document.getElementById("equal").disabled = false;
    }
    
}

function disableButtons(){
    document.getElementById("sum").disabled = true;
    document.getElementById("sub").disabled = true;
    document.getElementById("mul").disabled = true;
    document.getElementById("div").disabled = true;
}


document.getElementById("one").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "1";
    enableButtons();
});
document.getElementById("two").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "2";
    enableButtons();
});
document.getElementById("three").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "3";
    enableButtons();
});
document.getElementById("four").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "4";
    enableButtons();
});
document.getElementById("five").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "5";
    enableButtons();
});
document.getElementById("six").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "6";
    enableButtons();
});
document.getElementById("seven").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "7";
    enableButtons();
});
document.getElementById("eight").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "8";
    enableButtons();
});
document.getElementById("nine").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "9";
    enableButtons();
});
document.getElementById("zero").addEventListener("click", function(){
    document.getElementById("display").innerHTML += "0";
    enableButtons();
});


document.getElementById("cancel").addEventListener("click", function(){
    document.getElementById("display").innerHTML = "";
    disableButtons();
});
document.getElementById("sum").addEventListener("click", function(){
    document.getElementById("display").innerHTML += " + ";
    disableButtons();
});
document.getElementById("sub").addEventListener("click", function(){
    document.getElementById("display").innerHTML += " - ";
    disableButtons();
});
document.getElementById("mul").addEventListener("click", function(){
    document.getElementById("display").innerHTML += " x ";
    disableButtons();
});
document.getElementById("div").addEventListener("click", function(){
    document.getElementById("display").innerHTML += " / ";
    disableButtons();
});

document.getElementById("equal").addEventListener("click", function(){


    let op = document.getElementById("display").innerHTML + " = " + 
    calc(document.getElementById("display").innerText) + "</br>" + localStorage.getItem("historic");

    document.getElementById("historic").innerHTML = op;
    document.getElementById("display").innerHTML = "";
    
    localStorage.setItem("historic", op);
});

document.getElementById("switch").addEventListener("click", function(){ document.getElementById("historic").innerHTML = localStorage.getItem("historic")});