document.getElementById('submit-button').addEventListener('click', function() {
    var button = this;
    button.classList.add('loading');
    button.disabled = false;
    setTimeout(function() {
        button.classList.remove('loading');
        button.disabled = true;
    }, 2000);
});

