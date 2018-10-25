/*
Form Validation Module
Developed by: Sylvester Antwi-Boasiako
Made for: Afterloans website
Date: 26/09/2018
*/
$(document).ready(function(){


var ok = false;
var d8_info = '';


$('#').keyup(function(){
var d8= $('#date').val();
var info = "";
var invalids="`!@#$%^&*()_+?><,.;:{}[]|1234567890\/";
if(d8.length<5){
info = '<p class="danger">Password strength: <strong>weak</strong></p>';
}else if(pword.length>5){
info = '<p class="success">Password strength: <strong>Strong</strong></p>';
}
$('#output').html(info);
document.getElementById('output')=responseText;
});

$('#wnum').on("focusout",function(){
	var wnum = $('#wnum').val();
	var valids = "-+1234567890";

var wnum_info = "";
	for(var x=0;x<valids.length;x++){
		for(var y=0;y<wnum.length;y++){
			if(valids.charAt(x)!=wnum.charAt(y)){
				 wnum_info = '<p class="danger"><strong>Invalid Input! Only Numbers and "+" or "-" Are Allowed </strong></p>';
			
			}else{
				ok = true;

				wnum_info = "";
			}
		}
		}
				$('#wnum_out').html(wnum_info);
	
});

$('#hnum').focusout(function(){
	var hnum = $('#hnum').val();
	var valids = "-+1234567890";
	var hnum_info = '';
	//var ok = false;
	for(var x=0;x<valids.length;x++){
		for(var y=0;y<hnum.length;y++){
			if(valids.charAt(x)!=hnum.charAt(y)){
				 hnum_info = '<p class="danger"><strong>Invalid Input! Only Numbers and "+" or "-" Are Allowed </strong></p>';
			}else{
				ok = true;
				hnum_info = "";
			}
		}
	}
	$('#hnum_out').html(hnum_info);
});
if (ok==false) {

//$('.btn.btn-info').attr("disabled","disabled");
}else if(ok==true){
	//$('.btn.btn-info').removeAttr("disabled");
}

function checkInvalidChar(someString) {
	var invalids="`!@#$%^&*()_+?><,.;:{}[]|1234567890\/";
	for(var x=0;x<invalids.length;x++)
		for(var y=0;y<someString.length;y++){
			if(invalids.charAt(x)==someString.charAt(y))return true;
		}
	return false;
}
});