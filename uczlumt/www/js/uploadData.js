
//function for upload data from the form
function startDataUpload(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var module = document.getElementById("module").value;
	//get the checkbox values - separate them with a || so it would be split easily later on
	var checkString = "";
	var lis = document.getElementById("moduleList").getElementsByTagName("li");
	for (var i = 0; i < lis.length; i++){
		if (lis[i].getElementsByTagName("input")[0].checked){
			checkString = checkString + lis[i].getElementsByTagName("input")[0].value + "||";
		}
	}
	//get the select box value
	var language = document.getElementById("languageselectbox").value;
	var lat = document.getElementById("lat").value;
	var lon = document.getElementById("lon").value;
	
	 var postString = "name="+name +"&surname="+surname +"&module="+module + "&modulelist="+checkString +"&language="+language +"&latitude="+lat +"&longitude="+lon;
	if(document.getElementById("morning").checked){
		postString = postString + "&lecturetime=morning"
	}
	if(document.getElementById("afternoon").checked){
		postString = postString + "&lecturetime=afternoon"
	}
	
	//alert(postString);
	processData(postString);
}

var client;
function processData(postString){
	client = new XMLHttpRequest();
	client.open('POST','http://developer.cege.ucl.ac.uk:30283/uploadData',true);
	client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	client.onreadystatechange = dataUploaded;
	client.send(postString);
}

//create hte code to wait for the response from the data server, and process the response once it is received
function dataUploaded(){
	//this function listens out for the server to say that the data is ready - i.e. state 4
	if(client.readyState == 4){
		//change the DIV show the response
		document.getElementById("dataUploadResult").innerHTML = client.responseText;
	}
}
