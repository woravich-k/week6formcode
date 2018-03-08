
//function for upload data from the form
function startDataUpload(){
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var module = document.getElementById("module").value;
	
	var postString = "name="+name +"&surname="+surname +"&module="+module;
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
