document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove 'active' from all links
        if (link.href === currentUrl) {
            link.classList.add('active'); // Add 'active' to the current link
        }
    });
});


function setLanguage(flagSrc, languageName) {
    // Update the dropdown toggle to show the selected language flag and name
    document.getElementById("activeLangFlag").src = flagSrc;
    document.getElementById("activeLangFlag").alt = languageName;
    document.getElementById("languageDropdown").innerHTML = 
        '<img id="activeLangFlag" src="' + flagSrc + '" alt="' + languageName + '" width="20" class="me-2"> ' + languageName;
}