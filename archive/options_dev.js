/**
 * @author Craig Monroe
 * @email cmonroe@ebsco.com
 * @create date 2018-12-30 09:07:07
 * @modify date 2019-01-04 11:03:02
 * @desc Javascript to support the options pop-up
 */

var alertString = "Please Reload Your Browser Tab";
var manifestData = chrome.runtime.getManifest();
var version = manifestData.version;

document.body.onload = function() {

    // get the data from storage
    chrome.storage.sync.get("data", function(items) {
        console.log(items);
        if (!chrome.runtime.error) {
            console.log(items);
            document.getElementById("data").innerText = items.data;
        }
    });

    /*chrome.storage.sync.get("checkBox", function(checkboxItems) {
        console.log(checkboxItems);
        if (!chrome.runtime.error) {
            console.log(checkboxItems);
            document.getElementById("checkBox").innerText = checkboxItems.checkBox;
        }
    });
*/

}

// Save the data from the form if valid string
document.getElementById("save").onclick = function() {
    //var so = document.getElementById("swaggerOnly").value;
    var d = document.getElementById("domainMarket").value;
    console.log("SO:" + so);
    console.log("D:" + d);

    // Remove white space then check the length.
    // If there is no characters, alert that a valid string has to be entered
    if (d.trim().length > 0) {
        console.log("Length:" + d.length);
        chrome.storage.sync.set({"data": d}, function () {
            if (chrome.runtime.error) {
                console.log("Runtime error.");
            } else {
                console.log("Save Successful");
            }

        });
        //reloadTab();
    } else {

        if(so){
            chrome.storage.sync.set({"checkBox": so}, function () {
                if (chrome.runtime.error) {
                    console.log("Runtime error.");
                } else {
                    console.log("Save Successful");
                }

            });
            alert("Swagger Path Change Only Selected");
        } else {
            alert("String is invalid. Please enter a vailid string.");
            window.close;
        }

        alert(alertString);
        window.close();
    }





}

// Reset the chrome storage to null so no value is saved
document.getElementById("reset").onclick = function() {
    var d = null;
    chrome.storage.sync.set({ "data" : d }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        } else {
            console.log("Save Successful");
        }
    });

    var so = null;
    chrome.storage.sync.set({ "checkBox" : so }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        } else {
            console.log("Save Successful");
        }
    });



    alert(alertString);
    window.close();
    reloadTab();
}

document.write("<br><br><i><sub>Version: " + version + "</sub></i>");
function reloadTab() {

    //var current_index = document.getSelection("#tabs").tabs("option", "active");
    //console.log("Tab: " + current_index);
    //document.getSelection("#tabs").tabs('load', current_index);
    //document( "#tabs .ui-tabs-active").click();
}