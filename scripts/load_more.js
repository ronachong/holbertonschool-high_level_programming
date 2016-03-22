//when button is clicked, page loads more satuses
function load_more() {
    var see_more = document.getElementById('see_more');
    var makeResponseText = function (string) {
        document.getElementById("more_statuses").innerHTML = string;
    };

    see_more.onclick = function () {
        ajaxGet("http://krisbredemeier.github.io/holbertonschool-impossible_octopus_fitness/statuses-1.html", makeResponseText);
        document.getElementById("see_more").disabled = true;
        document.getElementById("see_more").style.background='#d9d9d9';
        document.body.style.cursor = "wait";
    };
}

document.addEventListener("DOMContentLoaded", load_more);
