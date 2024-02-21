var showDropMenu = function (name, article) {

    var dropMenu = document.getElementsByClassName(name)[0];
    var child = dropMenu.querySelector('div');
    dropMenu.style.setProperty('display', 'block');

    var screenWidth = window.innerWidth;
    var maxOffset = child.offsetWidth + article.offsetLeft;

    if (maxOffset > screenWidth) {
        dropMenu.style.paddingLeft = (screenWidth - child.offsetWidth) + 'px';
    } else {

        dropMenu.style.paddingLeft = article.offsetLeft + 'px';
    }

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