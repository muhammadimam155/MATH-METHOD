// Q1
document.write(" <h1> Q1 <h1>")
var num = 3.4567
document.write( "number :"+ " ("+ num +")<br>")
var num1 = Math.round(num)
document.write( "Found off value :"+ " ("+ num1 +")<br>")
var num2 = Math.floor(num)
document.write( "floor value :"+ " ("+ num2 +")<br>")
var num3 = Math.ceil(num)
document.write( "ceil value :"+ " ("+ num3 +")<br>")

// Q2
document.write(" <h1> Q2 <h1>")
var num = -2.673
document.write( "number :"+ " ("+ num +")<br>")
var num1 = Math.round(num)
document.write( "Found off value :"+ " ("+ num1 +")<br>")
var num2 = Math.floor(num)
document.write( "floor value :"+ " ("+ num2 +")<br>")
var num3 = Math.ceil(num)
document.write( "ceil value :"+ " ("+ num3 +")<br>")


// Q3
 document.write(" <h1> Q3 <h1>")
 var num = prompt("AIK AISA NEGATIVE NUM LIKHO JIS KO AP POSITIVE KRNA CHATAY HU (ANSWER IN Q3)")
 var abs =Math.abs(num)
 document.write("The absolute value of " +" (" +num+ ") "+ "is"+ " (" +abs+ ") " )


 // Q4
 document.write(" <h1> Q4 <h1>")
 var random = Math.random()*10
 var ceil = Math.ceil(random)
document.write("Random dice value :" +" ("+ ceil +")" )

// Q5
document.write(" <h1> Q5 <h1>")
var ranValue = Math.random()*2
var ceil1 = Math.ceil(ranValue)
document.write(ceil1 +"<br>")
if(ceil1 == "2"){
    document.write("Heads")
}else{
    document.write("Tails")
}  


// Q6
document.write(" <h1> Q6 <h1>")
var ranValue = Math.random()*100
var ceil2 = Math.ceil(ranValue)
document.write( "random num between 1 and 100 :" + " ("   + ceil2 +")<br>")

// Q7
document.write(" <h1> Q7 <h1>")
var weight = prompt('apna weight likhay (answer in Q6)')
var user =("the weight of user is " + weight +" Kilograms" )
document.write(user)

// Q8
document.write(" <h1> Q8 <h1>")
document.write("in the alert box")
var secNum = "5"
var user = prompt("koi bhi aik num likay 1 se 10 tak agr ap ka select sahi hoa tu ap ko congrat ka alert show hoga wargarna ap dobara try kray")
if (user == secNum){
    alert("congrat")
}else{
    alert("try again")
} 

