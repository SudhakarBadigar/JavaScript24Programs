function leastno(){
	var num1,num2,num3;
	num1=Number(document.getElementById("no1").value);
	num2=Number(document.getElementById("no2").value);
	num3=Number(document.getElementById("no3").value);

	if((num1<num2) && (num1<num3)){
		window.alert(num1 + "-is the Least Number");
	}
	else if((num2<num1) && (num2<num3)){
		window.alert(num2 + "-is the Least Number");
	}
	else if((num3<num1) && (num3<num2)){
		window.alert(num3 +"-is the Least Number");
	}

}