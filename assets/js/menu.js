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
        document.querySelector('.frame-1000005533-pVIns9').style.opacity = '1';

        document.querySelector('.navigation').src = 'https://cdn.animaapp.com/projects/65d5e3adb758944670ebfa1e/releases/65d5e43b6f7b7e704bcb5c36/img/navigation-1.svg';
    } else {
        headerMobile.style.height = '100vh';
        document.querySelector('#header_mobile  #content').style.display = 'block';
        document.querySelector('.frame-1000005533-pVIns9').style.opacity = '0';

        document.querySelector('.navigation').src = 'https://cdn.animaapp.com/projects/65d5e3adb758944670ebfa1e/releases/65d5e43b6f7b7e704bcb5c36/img/navigation.svg';
    }
});

// Lấy danh sách tất cả các phần tử <div> có lớp "component-187-dU3u59"
var divs = document.getElementsByClassName("component-187-dU3u59");

// Lặp qua từng phần tử <div> và thêm sự kiện nhấp chuột
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
        console.log('first')
        // Tìm phần tử con có lớp "frame-1000005551"
        var frame = this.querySelector(".frame-1000005551");

        // Lặp qua tất cả các phần tử có class ".frame-1000005551"
        var allFrames = document.getElementsByClassName("frame-1000005551");
        for (var j = 0; j < allFrames.length; j++) {
            // Kiểm tra xem phần tử đó có là con của phần tử được nhấp chuột hay không
            if (!this.contains(allFrames[j])) {
                // Nếu không phải là con, ẩn đi
                allFrames[j].style.display = "none";
            }
        }

        // Kiểm tra trạng thái hiện tại của phần tử con
        if (frame.style.display === "block") {
            // Nếu đang hiển thị, ẩn đi
            frame.style.display = "none";
        } else {
            // Nếu đang ẩn, hiển thị lên
            frame.style.display = "block";
        }
    });
}