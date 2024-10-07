function openTab(evt, tier) {
    let tierName = tier.getAttribute("data-label");
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("sponsor-list");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("sponsor-type");
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tierName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("default").click();
