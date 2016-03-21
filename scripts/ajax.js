function ajaxGet(url, onSuccess) {
    doStuff = function (url, onSuccess) {
      var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                onSuccess(xhttp.responseText);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };
    
    setTimeout(doStuff, 2000, url, onSuccess);
}


    