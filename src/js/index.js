function collapsed() {
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
        x.className += " responsive";
    }else {
        x.className = "nav-menu";
    }
}