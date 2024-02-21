var showDropMenu = function (name, article) {
    console.log('Left offset position:', article.offsetLeft, 'px');

    var dropMenu = document.getElementsByClassName(name)[0];
    dropMenu.style.setProperty('display', 'block');
    dropMenu.style.paddingLeft = article.offsetLeft + 'px';
};

var hideDropMenu = function (name) {
    var elementsToHide = document.querySelectorAll(`.${name}`);
    elementsToHide.forEach(function (element) {
        element.style.display = "none";
    });
    var dropMenu = document.getElementsByClassName(name)[0];
    dropMenu.style.setProperty('display', 'none');
};

var articles = document.querySelectorAll('.menu-lTxfya article');

articles.forEach(function (article) {
    article.addEventListener('mouseover', function () {
        this.classList.add('hover');
        this.classList.remove('hover_');
    });

    article.addEventListener('mouseout', function () {
        this.classList.add('hover_');
        this.classList.remove('hover');

        setTimeout(function () {
            article.classList.remove('hover_');
        }, 500);
    });
});