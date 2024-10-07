function activateNav(){
    const sections = document.querySelectorAll(".page");
    const container = document.createElement("nav");
    const items = Array.from(sections).map(section => {
        return `
        <div class="nav-item" data-for-section="${section.id}">
            <a href="#${section.id}" class="nav-link"></a>
            <span class="nav-label">${section.dataset.label}</span>
        </div>
        `;
    });

    container.classList.add("nav");
    container.innerHTML = items.join("");

    const observer = new IntersectionObserver((entries) => {
        document.querySelectorAll(".nav-link").forEach((navLink) => {
            navLink.classList.remove("nav-link-selected");
        });

        const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];

        document.querySelector(
            `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
        ).classList.add("nav-link-selected");
    },{
        threshold: 0.5
    });

    sections.forEach((section) => observer.observe(section));
    document.body.appendChild(container);
}

activateNav();