function toggle_reply() {
    var reply_links = document.querySelectorAll('.reply_link');
    
    for (var i = 0; i < reply_links.length; i++) {
        reply_links[i].addEventListener("click", function () {
            var reply_id = this.getAttribute("data-form_no");
            document.getElementById(reply_id).style.display = 'block';
            
        })                                    
    }
}

document.addEventListener("DOMContentLoaded", toggle_reply);