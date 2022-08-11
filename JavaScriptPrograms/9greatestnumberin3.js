var num1 = parseFloat(prompt("Enter the number" ));
var num2 = parseFloat(prompt("Enter the number" ));
var num3 = parseFloat(prompt("Enter the number" ));
let largest;

if((num1>=num2) && (num1>=num3)){
    largest=num1;
}
elseif ((num2>=num1) && (num2>=num3))
{
    largest=num2;
}
elseif((num3>=num1) && (numm>=num2))
{ 
    largest=num3;
}

console.log("The greatest number : " + largest);
