//window.onload = function () {
//    document.getElementById('status_form').style.display = 'none';
//    document.getElementById('post_link').style.display = 'block';
//};
   
function toggle(id) {
    if (document.getElementById('status_form').style.display == 'none') {
        document.getElementById('status_form').style.display = 'block';
    } else {
        document.getElementById('status_form').style.display = 'none';
    }
};

//document.getElementById('post_link').onclick = function () {
//    document.getElementById('status_form').style.display = 'none';
//};

//var post_link = document.getElementById('post_link');
//var status_form = document.getElementById('status_form');

//post_link.onclick = function() {
//    status_form.style.display = 'none';
//}