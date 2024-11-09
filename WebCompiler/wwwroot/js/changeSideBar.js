window.addEventListener('load', function () {
    const currentUrl = window.location.href;
    const buttons = document.querySelectorAll('.change-lang-btn');

    buttons.forEach(button => {
        if (currentUrl === button.getAttribute('href')) {  
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
});
