window.onload = function toggle_status(){
    var status_form = document.getElementById('status_form');
    var post_link = document.getElementById('post_link');


    post_link.onclick = function () {
        if (status_form.style.display == 'none') {
            status_form.style.display = 'block';
        } else {
            status_form.style.display = 'none';
        }
    };

}