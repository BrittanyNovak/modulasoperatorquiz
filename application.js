for (var i = 1; i <= 1000; i++) { 
    if(i % 9 == 0){ // if value is divisible by the number 9 make it red
        document.write("<span style='color:red;'>"+i+"</span><br />");
	}
	if(i % 23 ==0){ // if value is divisible by the number 23 make it green
		document.write("<span style='color:green;'>"+i+"</span><br />");
    }
}
		
