function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

(function(){
	$( "#form1" ).submit(function( event ) {
	  console.log('hello')
	  var inText = $("#inText").val();
	  var findString1 = $("#findString1").val();
	  var replaceString1 = $("#replaceString1").val();
	  var replaceString2 = $("#replaceString2").val();
	  var replaceString3 = $("#replaceString3").val();
	  var replaceString4 = $("#replaceString4").val();
	  var replaceString5 = $("#replaceString5").val();
	  var replaceString6 = $("#replaceString6").val();
	  var replaceString7 = $("#replaceString7").val();
	  var replaceString8 = $("#replaceString8").val();

	  var outText1 = (replaceString1 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString1);
	  var outText2 = (replaceString2 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString2);
	  var outText3 = (replaceString3 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString3);
	  var outText4 = (replaceString4 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString4);
	  var outText5 = (replaceString5 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString5);
	  var outText6 = (replaceString6 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString6);
	  var outText7 = (replaceString7 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString7);
	  var outText8 = (replaceString8 == "") ? null: 
	  			replaceAll(inText, findString1, replaceString8);

	  var outText = (replaceString1 == "") ? "": outText1;
	  outText += (replaceString2 == "") ? "": '\n\n' + outText2;
	  outText += (replaceString3 == "") ? "": '\n\n' + outText3;
	  outText += (replaceString4 == "") ? "": '\n\n' + outText4;
	  outText += (replaceString5 == "") ? "": '\n\n' + outText5;
	  outText += (replaceString6 == "") ? "": '\n\n' + outText6;
	  outText += (replaceString7 == "") ? "": '\n\n' + outText7;
	  outText += (replaceString8 == "") ? "": '\n\n' + outText8;

	  $("#outText").val(outText);
	  event.preventDefault();
	});	
})();