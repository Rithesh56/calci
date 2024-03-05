let number=0
let number2=0
let result=0
let result2=0
let result3=0
let result4=0
let name
document.getElementById("add").onclick = function() {
    console.log("add was clicked")
    number = number+1
    console.log(number)
    if(number>0){
        console.log("its is a +ve value")
    }
    document.getElementById("num").innerHTML =number
}
document.getElementById("reset").onclick = function() {
    console.log("reset was clicked")
    number = 0
    console.log(number)
    document.getElementById("num").innerHTML =number
}
document.getElementById("sub").onclick = function() {
    console.log("sub was clicked")
    number = number-1
    console.log(number)
    if(number <=0){
        console.log("its is -ve value")
        number=0
        
    }
    document.getElementById("num").innerHTML ="error"
}
document.getElementById("add2").onclick = function() {
    console.log("add 2 was clicked")
    number2 = number2+1
    console.log(number2)
    document.getElementById("num2").innerHTML =number2
}
document.getElementById("reset2").onclick = function() {
    console.log("reset 2 was clicked")
    number2 = 0
    console.log(number2)
    document.getElementById("num2").innerHTML =number2
}
document.getElementById("sub2").onclick = function() {
    console.log("sub 2 was clicked")
    number2 = number2-1
    console.log(number2)
    if(number2 <=0){
        console.log("its is -ve value")
        number2=0
    }
    document.getElementById("num2").innerHTML ="error"
}
document.getElementById("result").onclick = function(){
    console.log("button pressed")
    result = number + number2
    console.log(result)
    document.write(result)
    document.getElementById("num3").innerhtml = result
}
document.getElementById("result2").onclick =function(){
    console.log("button pressed")
    result2=number-number2
    console.log(result2)
    document.write(result2)
    document.getElementById("num3").innerhtml = result2
}
document.getElementById("result3").onclick = function(){
    console.log("button pressed")
        result3=number*number2
        console.log(result3)
        document.write(result3)
        document.getElementById("num3").innerhtml= result3
 }
    document.getElementById("result4").onclick = function(){
        console.log("button pressed")
        result4=number/number2
        console.log(result4)
        document.write(result4)
        document.getElementById("num3").innerhtml= result4
     
    name=document.getElementById("imp").value;
    console.log(name)
}


