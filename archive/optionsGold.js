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
    window.close();
}
