function ajaxGet(url, onSuccess) {
    
    // doStuff makes an Ajax request and reruns script for toggle_reply
    var doStuff = function (url, onSuccess) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                onSuccess(xhttp.responseText);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();

        
        var more_reply_links_array = document.querySelectorAll('#more_statuses .reply_link');
        var reply_id = null; //will be assigned val later
        var reply_form = null;

        for (var i = 0; i < more_reply_links_array.length; i++) {
            more_reply_links_array[i].addEventListener("click", function () {
                console.log("I see this click.");
                reply_id = this.getAttribute("data-form_no");
                reply_form = document.getElementById(reply_id);
                reply_form.toggle();
                this.style.display = "none"; //this is still the reply link
            })                                    
        }
    };
    
    setTimeout(doStuff, 2000, url, onSuccess);
}


    