/**
 * @author Craig Monroe
 * @email cmonroe@ebsco.com
 * @create date 2018-12-30 09:07:07
 * @modify date 2019-01-04 11:03:02
 * @desc Jquery that rewrites the Eureka page
 */


var url = window.location.pathname;

var stringToMatch = null;

chrome.storage.sync.get(['data'], function(result) {
    stringToMatch = result.data;
    console.log('Domain Market currently is ' + result.data);
});


$.get(url, function (response) {

    if (stringToMatch != null) {


        var array, text;
        array = response.split("<tr>");
        console.log("Length:" + array.length);

        var newContent = new Array();
        var info = "<i>" + "CSM v.01" + "</i>";
        var imageName = document.getElementById("images/Swagger-logo.png");
        newContent.push(imageName);
        // put the title on


        newContent.push("<H1>" + stringToMatch.toUpperCase() + " Available Servers</H1>" + info + "<br><br>");


        var i;
        for (i = 0; i < array.length; i++) {
            if (array[i].match(stringToMatch)) {
                //console.log("ELEMENT NUMBER: " + i);
                console.log("String Used: " + stringToMatch);
                var tempValue = array[i];
                tempValue = tempValue.replace(") -", ") <br>");
                tempValue = tempValue.replace("</a> ,", "<br>");
                var stringWithSpace = ">       ,                              <a";
                tempValue = tempValue.replace(stringWithSpace, "");
                //tempValue = tempValue.replace("                ", "");
                //tempValue = tempValue.replace("<td>","<td style=\"background-color:red;\">");

                var j;
                for (j = 0; j < 2; j++) {
                    tempValue = tempValue.replace("/info", "/swagger-ui.html");
                }
                //console.log(tempValue);
                newContent.push(tempValue + "<br><br>");

                //console.log("ELEMENT END");
            }
        }

        if (newContent != null) {

            document.body.innerHTML = newContent;
        }

    }

    }
);
