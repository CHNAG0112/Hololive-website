let slidetext1 = 0;
let slidetext2 = 1;
function mythFuc() {
    var express= document.getElementsByClassName("myth");
    for (var i = 0; i < express.length; i++) {
        express[i].style.display = "none"
    };

    for (var i = 0; i < express.length; i++) {
        express[i].className = express[i].className.replace(" text1", "")
    };
    for (i = 0; i < express.length; i++) {
        express[i].className = express[i].className.replace(" text2", "")
    };

    express[slidetext1].style.display = "block";
    express[slidetext1].className += " text1";

    express[slidetext2].style.display = "block";
    express[slidetext2].className += " text2";

    if (slidetext1 == 4) { slidetext1 = -1 };
    if (slidetext2 == 4) { slidetext2 = -1 };

    slidetext1 += 1;
    slidetext2 += 1;0   
}


