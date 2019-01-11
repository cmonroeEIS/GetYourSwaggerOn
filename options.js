/**
 * @author Craig Monroe
 * @email cmonroe@ebsco.com
 * @create date 2018-12-30 09:07:07
 * @modify date 2019-01-04 11:03:02
 * @desc Javascript to support the options pop-up
 */

var alertString = "Please Reload Your Browser Tab";

document.body.onload = function() {

    chrome.storage.sync.get("data", function(items) {
        console.log(items);
        if (!chrome.runtime.error) {
            console.log(items);
            document.getElementById("data").innerText = items.data;
        }
    });
}

document.getElementById("save").onclick = function() {
    var d = document.getElementById("domainMarket").value;
    chrome.storage.sync.set({ "data" : d }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        } else {
            console.log("Save Successful");
        }
    });

    alert(alertString);
    window.close();

}

document.getElementById("reset").onclick = function() {
    var d = null;
    chrome.storage.sync.set({ "data" : d }, function() {
        if (chrome.runtime.error) {
            console.log("Runtime error.");
        } else {
            console.log("Save Successful");
        }
    });
    alert(alertString);
    window.close();

}

