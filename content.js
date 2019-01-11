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
        // add something else to split on
        response = response.replace(/\<tr\>/g,"<!--split-->\n\t\t\t<tr>");
        //response = response.replace(/,/igm,"Service: ");



        console.log ("RESPONSE:" + response);
        array = response.split("<!--split-->");
        console.log("Length:" + array.length);

        var newContent = new Array();
        // Let them know this is early
        var info = "<i>" + "CSM v 1.0" + "</i> <a href='https://github.com/cmonroeEIS/EurekaSwaggerExt/blob/master/README.md' target='_blank'>README.md</a> ";
        //var imageName = document.getElementById("images/Swagger-logo.png");
        //newContent.push(imageName);

        // Add a title
        newContent.push("<H1>" + stringToMatch.toUpperCase() + " Available Servers</H1>" + info + "<br><br>");


        var i;
        for (i = 0; i < array.length; i++) {
            if (array[i].match(stringToMatch)) {
                // console debugging help
                console.log("String Used: " + stringToMatch);
                var tempValue = array[i];
                console.log("-----------------------------------LINE BEGIN: " + i);
                console.log(tempValue);

                tempValue = tempValue.replace(") -", ") <br>");

                var j;
                for (j = 0; j < 2; j++) {
                    tempValue = tempValue.replace("/info", "/swagger-ui.html");
                }
                newContent.push(tempValue + "<br><br>");
                // console debugging help
                //console.log("-----------------------------------ELEMENT END");
                console.log("-----------------------------------LINE END: " + i);

            }
        }

        if (newContent != null) {

            console.log("Updated Content: " + newContent);
            document.body.innerHTML = newContent.toString().replace(/,/g, "");
        }

    }

    }
);
