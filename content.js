// content.js
//alert("Craig's Swagger Extension is Active!");

var url = window.location.pathname;

$.get(url, function(response) {
  //console.log(response);

  // <a href="http://10.25.130.105:32772/info" target="_blank">resourcemanagement.ftf.internaladapter:151-01227b3:b7b888b7384f</a>
  //var links = response.match(/<h1 class="flat-top text-primary">\[ ([\d]*?) \]<\/h1>/)[1];
  //var links = response.match(/<a href="\d.\d.\d.\d:\d target="_blank">resourcemanagement.ftf.\w:/)[0][1];
  //var length = response.length;

  var array, text;
  array = response.split("<tr>");
  console.log("Length:" + array.length);
  var stringToMatch = "resourcemanagement.ftf";
  var newContent = new Array();
  var info = "<i>" + "CSM v.01" + "</i>";
  // put the title on
  newContent.push("<H1>" + stringToMatch + " Servers</H1>" + info + "<br><br>");

  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i].match(stringToMatch)) {
      console.log("ELEMENT NUMBER: " + i);
      var tempValue = array[i];
      tempValue = tempValue.replace(") -",") <br>");
      tempValue = tempValue.replace("</a> ,","<br>");
      var stringWithSpace = ">       ,                              <a";
      tempValue = tempValue.replace(stringWithSpace,"");
      tempValue = tempValue.replace("                ", "");
      
      var j;
      for(j=0; j < 2;j++) {
        tempValue = tempValue.replace("/info", "/swagger-ui.html");
      }
      console.log(tempValue);
      newContent.push(tempValue +"<br><br>");

      console.log("ELEMENT END");
    }
  }

if (newContent != null) {
    document.body.innerHTML = newContent;
}

});
