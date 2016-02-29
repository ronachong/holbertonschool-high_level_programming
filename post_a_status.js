//window.onload = function () {
//    document.getElementById('status_form').style.display = 'none';
//    document.getElementById('post_link').style.display = 'block';
//};



window.onload = function () {
    var status_form = document.getElementById('status_form');
    var post_link = document.getElementById('post_link');


    post_link.onclick = function toggle_status() {
        if (status_form.style.display == 'none') {
            status_form.style.display = 'block';
        } else {
            status_form.style.display = 'none';
        }
    };
};

//document.getElementById('post_link').onclick = function () {
//    document.getElementById('status_form').style.display = 'none';
//};

//var post_link = document.getElementById('post_link');
//var status_form = document.getElementById('status_form');

//post_link.onclick = function() {
//    status_form.style.display = 'none';
//}