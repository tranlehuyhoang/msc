var showDropMenu = function (name, article) {

    var dropMenu = document.getElementsByClassName(name)[0];
    var child = dropMenu.querySelector('div');
    dropMenu.style.setProperty('display', 'block');

    var screenWidth = window.innerWidth;
    var maxOffset = child.offsetWidth + article.offsetLeft;

    if (maxOffset > screenWidth) {
        console.log(true)
        dropMenu.style.paddingLeft = (screenWidth - child.offsetWidth - 20) + 'px';
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
document.querySelector('.navigation').addEventListener('click', function () {
    var headerMobile = document.querySelector('#header_mobile');
    if (headerMobile.style.height === '100vh') {
        headerMobile.style.height = 'auto';
        document.querySelector('#header_mobile  #content').style.display = 'none';
        document.querySelector('.navigation').src = 'https://cdn.animaapp.com/projects/65d5e3adb758944670ebfa1e/releases/65d5e43b6f7b7e704bcb5c36/img/navigation-1.svg';
    } else {
        headerMobile.style.height = '100vh';
        document.querySelector('#header_mobile  #content').style.display = 'block';

        document.querySelector('.navigation').src = 'https://cdn.animaapp.com/projects/65d5e3adb758944670ebfa1e/releases/65d5e43b6f7b7e704bcb5c36/img/navigation.svg';
    }
});