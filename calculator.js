
function calc (... input){

    input = input[0].split(" ");

    if(input.includes('+')){
        
        return sum(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (input.includes('-')){
        return sub(Number.parseInt(input[0]), Number.parseInt(input[2]));
    }
    else if (input.includes('x')){
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
        return (n / n2).toFixed(2);
    } catch(Exception) {
        console.error('Error');
    }
}

// Eneables the operator buttons if there is at least one number
function enableButtons(){

    if(document.getElementById("display").innerText.length == 1){
        document.getElementById("sum").disabled = false;
        document.getElementById("sub").disabled = false;
        document.getElementById("mul").disabled = false;
        document.getElementById("div").disabled = false;
        
    }

    enableEqual();
    
}

// Disables the operator buttons
function disableButtons(){
    document.getElementById("sum").disabled = true;
    document.getElementById("sub").disabled = true;
    document.getElementById("mul").disabled = true;
    document.getElementById("div").disabled = true;
    document.getElementById("equal").disabled = true;
}

// Eneables the equal button if there are two numbers
function enableEqual(){
    let op = document.getElementById("display").innerText.split(" ");
    if(op.length === 3){
        document.getElementById("equal").disabled = false;
    }
}

document.getElementById("one").addEventListener("click", one);

function one(){
    document.getElementById("display").innerHTML += "1";
    enableButtons();
};

document.getElementById("two").addEventListener("click", two);

function two(){
    document.getElementById("display").innerHTML += "2";
    enableButtons();
};

document.getElementById("three").addEventListener("click", three);

function three(){
    document.getElementById("display").innerHTML += "3";
    enableButtons();
};

document.getElementById("four").addEventListener("click", four);

function four(){
    document.getElementById("display").innerHTML += "4";
    enableButtons();
};

document.getElementById("five").addEventListener("click", five);

function five(){
    document.getElementById("display").innerHTML += "5";
    enableButtons();
};

document.getElementById("six").addEventListener("click", six);

function six(){
    document.getElementById("display").innerHTML += "6";
    enableButtons();
};

document.getElementById("seven").addEventListener("click", seven);

function seven(){
    document.getElementById("display").innerHTML += "7";
    enableButtons();
};

document.getElementById("eight").addEventListener("click", eight);

function eight(){
    document.getElementById("display").innerHTML += "8";
    enableButtons();
};

document.getElementById("nine").addEventListener("click", nine);

function nine(){
    document.getElementById("display").innerHTML += "9";
    enableButtons();
};

document.getElementById("zero").addEventListener("click", zero);

function zero(){
    document.getElementById("display").innerHTML += "0";
    enableButtons();
};


document.getElementById("cancel").addEventListener("click", cancel);

function cancel(){
    document.getElementById("display").innerHTML = "";
    disableButtons();
};

document.getElementById("sum").addEventListener("click", sumPress);

function sumPress(){

    if(document.getElementById("sum").disabled === false){
        document.getElementById("display").innerHTML += " + ";
        disableButtons();
    }
};

document.getElementById("sub").addEventListener("click", subPress);

function subPress(){

    if(document.getElementById("sub").disabled === false){
        document.getElementById("display").innerHTML += " - ";
        disableButtons();
    }
};

document.getElementById("mul").addEventListener("click", mulPress);

function mulPress(){

    if(document.getElementById("mul").disabled === false){
        document.getElementById("display").innerHTML += " x ";
        disableButtons();
    }
};

document.getElementById("div").addEventListener("click", divPress);

function divPress(){

    if(document.getElementById("div").disabled === false){
        document.getElementById("display").innerHTML += " / ";
        disableButtons();
    }
};

document.getElementById("equal").addEventListener("click", equalPress);

function equalPress(){

    if(document.getElementById("equal").disabled === false){
        // Adds the new operation on top of the list
        let op = document.getElementById("display").innerHTML + " = " + 
        calc(document.getElementById("display").innerText) + "</br>" + localStorage.getItem("history");

        document.getElementById("history").innerHTML = op;
        document.getElementById("display").innerHTML = "";
        disableButtons();
        
        localStorage.setItem("history", op);
    }
};

document.getElementById("switch").addEventListener("click", function(){ 
    document.getElementById("history").innerHTML = localStorage.getItem("history");

    document.getElementById("display").style.backgroundColor = 'gainsboro';
    document.getElementById("history").style.backgroundColor = 'gainsboro';
});

document.addEventListener("keypress", function(event){

    switch(event.keyCode){
        case 13: equalPress(); break;
        case 42: mulPress(); break;
        case 43: sumPress(); break;
        case 45: subPress(); break;
        case 47: divPress(); break;
        case 48: zero(); break;
        case 49: one(); break;
        case 50: two(); break;
        case 51: three(); break;
        case 52: four(); break;
        case 53: five(); break;
        case 54: six(); break;
        case 55: seven(); break;
        case 56: eight(); break;
        case 57: nine(); break;
        default: break;
    }
});

document.addEventListener("keydown", function(event){
    
    if(event.keyCode === 27){
        cancel();
    }
});
