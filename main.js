

function addRec(){
	var name = document.getElementById("fname").value;	
	var mjr = document.getElementById("major").value;
	var stdyr = document.getElementById("year").value;
							
	
	if (stdyr >= 2000){
		var table = document.getElementById("tName");
		var x = table.rows.length;
		var row = table.insertRow(x);
		var col = row.insertCell (0);
		
		var dte = new Date();
		var time = dte.getHours()+ ":" + dte.getMinutes();
		var addrecord = time + "-" + " " + name + " ," + mjr + ", " + stdyr ;  
		col.colSpan = "7";	
		col.innerHTML = addrecord;					
		document.getElementById("fname").value = "";	
		document.getElementById("major").value = "";
		document.getElementById("year").value = "";					
	
	} else 
		alert ("Enter the year greater or equal to 2000");
}
