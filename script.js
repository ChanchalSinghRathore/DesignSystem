document.getElementById('submit-button').addEventListener('click', function() {
    var button = this;
    button.classList.add('loading');
    button.disabled = true;
    setTimeout(function() {
        button.classList.remove('loading');
        button.disabled = false;
    }, 2000);
});

