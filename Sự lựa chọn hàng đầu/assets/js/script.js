var elements = document.getElementsByClassName("component-200-xXIWKJ component-200");
var ps = document.getElementsByClassName("gip-iu-tr-nhng-tn-th-vxPFGA gip-iu-tr-nhng-tn-th proximanovavh-regular-normal-white-16px pclasss");
var icons = document.getElementsByClassName("arrow-chevron_-down-1WxP6I arrow-chevron_-down");

elements[1].style.backgroundColor = "transparent"; // Gán giá trị màu nền trống
ps[1].style.display = "none"; // Gán giá trị display là "none"
icons[1].style.transform = 'rotate(180deg)';

function xoaMauNen() {
    var elements = document.getElementsByClassName("component-200-xXIWKJ component-200");
    if (elements[0].style.backgroundColor == 'transparent') {
        elements[1].style.backgroundColor = "transparent"; // Gán giá trị màu nền trống
        elements[0].style.backgroundColor = ""; // Gán giá trị màu nền trống
    } else {
        return

    }
    var ps = document.getElementsByClassName("gip-iu-tr-nhng-tn-th-vxPFGA gip-iu-tr-nhng-tn-th proximanovavh-regular-normal-white-16px pclasss");
    var icons = document.getElementsByClassName("arrow-chevron_-down-1WxP6I arrow-chevron_-down");

    for (var i = 0; i < ps.length; i++) {
        ps[1].style.display = "none"; // Gán giá trị display là "none"
        ps[0].style.display = "block"; // Gán giá trị display là "none"
        icons[0].style.transform = 'rotate(0deg)';
        icons[1].style.transform = 'rotate(180deg)';
    }
}
function xoaMauNen_() {
    var elements = document.getElementsByClassName("component-200-xXIWKJ component-200");
    if (elements[1].style.backgroundColor == 'transparent') {
        console.log('first')
        elements[0].style.backgroundColor = "transparent"; // Gán giá trị màu nền trống
        elements[1].style.backgroundColor = ""; // Gán giá trị màu nền trống
    } else {
        return
    }
    var ps = document.getElementsByClassName("gip-iu-tr-nhng-tn-th-vxPFGA gip-iu-tr-nhng-tn-th proximanovavh-regular-normal-white-16px pclasss");
    var icons = document.getElementsByClassName("arrow-chevron_-down-1WxP6I arrow-chevron_-down");

    ps[1].style.display = "block"; // Gán giá trị display là "none"
    ps[0].style.display = "none"; // Gán giá trị display là "none"
    icons[1].style.transform = 'rotate(0deg)';
    icons[0].style.transform = 'rotate(180deg)';
}