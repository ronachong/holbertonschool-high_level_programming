function load_more() {
    var see_more = document.getElementById('see_more');
    var makeResponseText = function (string) {
        document.getElementById("demo").innerHTML = string;
    };

    see_more.onclick = function () {
        ajaxGet("/statuses-1.html", makeResponseText);
    };
};

document.addEventListener("DOMContentLoaded", load_more);




/* function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "/statuses-1.html", true);
  xhttp.send();
} */
