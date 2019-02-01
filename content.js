/**
 * @author Craig Monroe
 * @email cmonroe@ebsco.com
 * @create date 2018-12-30 09:07:07
 * @modify date 2019-01-04 11:03:02
 * @desc Jquery that rewrites the Eureka page
 */


var url = window.location.pathname;
var readMe = "http://confluence/x/pwGlDg";
var manifestData = chrome.runtime.getManifest();
var author = manifestData.author;
var breakString = "___________________________________________________________________________________________________________";
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
        var info = "<i><a href='mailto:" + author + "'>" + author + "</a></i> - <a href='" + readMe + "' target='_blank'>Confluence README</a>";

        // Add a title
        newContent.push("<H1>Available " + stringToMatch.toUpperCase() + "  Servers</H1>" + info + "<br>" + breakString + "<br><br>");


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
                    tempValue = tempValue.replace(/\/info/g, "/swagger-ui.html");
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

    } else {   // just do the replace for the swagger path

        var newContent = response;

        if (newContent != null) {

            // replace newContent instances with path change
            newContent = newContent.replace(/info/g, "swagger-ui.html");

            console.log("Updated Content: " + newContent);
            document.body.innerHTML = newContent;
        }
    }

    }
);
