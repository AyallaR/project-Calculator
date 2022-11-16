function getHistory(){
    document.getElementById("operation-log").innerText;
}

function printHistory(num){
    document.getElementById("screen").innerText=num;
}

function getOutput(){
    return document.getElementById
}

function printOutput(num){
    if(num=""){
        document.getElementById("screen").innerText=num;
    }
    else{
        document.getElementById("screen").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

var operator = document.getElementsByClassName("operator");
for (var i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="erase"){
            var output=reverseNumberFormat(getOutput()).toSring();
            if(output){output=output.subste(0,output.length-1);
            printOutput(output);}
        }
        else var output=getOutput();
        var history=getHistory();
    })
}