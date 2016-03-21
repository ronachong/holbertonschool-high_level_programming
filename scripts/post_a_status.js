//when page loads, enable toggle for statuses 
window.onload = function toggle_status(){
    var status_form = document.getElementById('status_form');
    var post_link = document.getElementById('post_link');


    post_link.onclick = function () {

        status_form.toggle();
    };

}
