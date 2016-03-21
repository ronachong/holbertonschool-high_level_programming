HTMLElement.prototype.toggle = function () {
    console.log("The display is", this.style.display);
    if (this.style.display == "") {
        this.style.display = "block";
    console.log("The display is now", this.style.display);    
    } else {
        console.log("I can see that this is not display none");
        this.style.display = "";
    }
};
