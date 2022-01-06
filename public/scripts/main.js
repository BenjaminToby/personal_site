document.querySelectorAll("nav a").forEach((link) => {
    let locationRegex = new RegExp(`${window.location.pathname}.*?`);
    if (link.pathname === window.location.pathname) {
        link.classList.add("active-page");
    }
});
