function openTab(evt, tier) {
    let tierName = tier.getAttribute("data-label");
    var tablinks;
    
    tablinks = document.getElementsByClassName("sponsor-type");
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    evt.currentTarget.className += " active";

    fetchSponsors(tierName);
}

function fetchSponsors(tier) {
    console.log(tier);
    const container = document.getElementById("sponsor-space");

    container.innerHTML = "";

    fetch("../../../assets/sponsors/sponsors.xml", {mode: 'cors'}).then(response => {
        return response.text();
    }).then(xmlString => {
        const xmlDocument = new DOMParser().parseFromString(xmlString, "text/xml");
        const sponsors = xmlDocument.querySelectorAll(tier);

        const items = Array.from(sponsors).map(sponsor => {
            const logo = sponsor.getElementsByTagName("logo")[0].childNodes[0].nodeValue;
            const url = sponsor.getElementsByTagName("url")[0].childNodes[0].nodeValue;

            return `
            <div class="sponsor">
                <a href="${url}"  target="_blank">
                    <img class="sponsor-image" src="../../../assets/sponsors/${logo}"></img>
                </a>
            </div>
            `;
        });

        if(items.length == 0) {
            let str = "";
            str = tier.charAt(0).toUpperCase() + tier.slice(1);
            container.innerHTML += `<h1>No ${str} sponsors at the moment!</h1>`;
        }else {
            container.innerHTML += items.join("");
        }
    });
}

document.getElementById("default").click();
