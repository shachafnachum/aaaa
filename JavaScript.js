//כפתור למעבר לעמווד שיחות מעמוד הבית
function pageRedirect() {
    window.location.href = "conversions.html";
}   

//כפתור למעבר לעמווד פעילויות
function pageRedirect2() {
    window.location.href = "activities.html";
}   

//כפתור למעבר לעמווד מקרים ותגובות מעמוד הבית
function pageRedirect3() {
    window.location.href = "casses.html";
}   

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    var change = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
        change.src = "pictures/menu.svg";
    } else {
        x.style.display = "block";
        change.src = "pictures/xIcon.svg";
    }
}

function showAbout() {
    var x = document.getElementById("overlay");
    var about = document.getElementById("about");
    var y = document.getElementById("myLinks");
    var change = document.getElementById("menu");
    x.style.display = "block";
    y.style.display = "none";
    about.style.display = "block";
    change.src = "pictures/menu.svg";
}

function closeAbout() {
    var x = document.getElementById("overlay");
    var about = document.getElementById("about");
    x.style.display = "none";
    about.style.display = "none";
}


//רעיונות לפעילויות

function reset() {
    var countCB = 4;
    var txt = 1;
    for (var i = 0; i < 9; i++) {
        var item = "item" + countCB;
        console.log("check " + item);
        document.getElementById(item).checked = false;
        countCB++;
    }
    for (var i = 0; i < 9; i++) {
        var div = "div" + txt;
        document.getElementById(div).style.display = "none";
        txt++;
    }
}

//פעילויות יצירה
function activitiesCreation() {
    var checkBox = document.getElementById("item4");
    var text = document.getElementById("div1");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;

        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });

    } else {
        text.style.display = "none";
    }
}

//פעילויות בישול
function activitiesCook() {
    var checkBox = document.getElementById("item5");
    var text = document.getElementById("div2");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
        checkBox.style.background = "#A2C3B8";
    }
}

//פעילויות משחק
function activitiesGame() {
    var checkBox = document.getElementById("item6");
    var text = document.getElementById("div3");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
    }
}

//פעילויות טכנולוגיה
function activitiesTech() {
    var checkBox = document.getElementById("item7");
    var text = document.getElementById("div4");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
    }
}

//פעילויות העשרה ותרבות
function activitiesCulture() {
    var checkBox = document.getElementById("item8");
    var text = document.getElementById("div5");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
    }
}

//פעילויות כתיבה
function activitiesWriting() {
    var checkBox = document.getElementById("item9");
    var text = document.getElementById("div6");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
    }
}

//פעילויות ספורט
function activitiesSport() {
    var checkBox = document.getElementById("item10");
    var text = document.getElementById("div7");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
    }
}

//פעילויות התנדבות משותפת
function activitiesVolunteering() {
    var checkBox = document.getElementById("item11");
    var text = document.getElementById("div8");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
    }
}

//פעילויות אחר
function activitiesOther() {
    var checkBox = document.getElementById("item12");
    var text = document.getElementById("div9");
    if (checkBox.checked == true) {
        reset();
        text.style.display = "block";
        checkBox.checked = true;
        var scrollDiv = text.offsetTop;
        window.scroll({ top: scrollDiv - 70, behavior: 'smooth' });
    } else {
        text.style.display = "none";
    }
}
///////////////רעיונות לפעילויות///////////////////


//טיפים
function tap() {
    var text = document.getElementById("commentDiv1");
    var newText = document.getElementById("answer").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip");
    var lineGreen = document.getElementById("lineGreen");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap2() {
    var text = document.getElementById("commentDiv2");
    var newText = document.getElementById("answer2").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip2");
    var lineGreen = document.getElementById("lineGreen2");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap3() {
    var text = document.getElementById("commentDiv3");
    var newText = document.getElementById("answer3").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip3");
    var lineGreen = document.getElementById("lineGreen3");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap4() {
    var text = document.getElementById("commentDiv4");
    var newText = document.getElementById("answer4").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip4");
    var lineGreen = document.getElementById("lineGreen4");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap5() {
    var text = document.getElementById("commentDiv5");
    var newText = document.getElementById("answer5").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip5");
    var lineGreen = document.getElementById("lineGreen5");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap6() {
    var text = document.getElementById("commentDiv6");
    var newText = document.getElementById("answer6").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip6");
    var lineGreen = document.getElementById("lineGreen6");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap7() {
    var text = document.getElementById("commentDiv7");
    var newText = document.getElementById("answer7").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip7");
    var lineGreen = document.getElementById("lineGreen7");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap8() {
    var text = document.getElementById("commentDiv8");
    var newText = document.getElementById("answer8").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip8");
    var lineGreen = document.getElementById("lineGreen8");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap9() {
    var text = document.getElementById("commentDiv9");
    var newText = document.getElementById("answer9").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip9");
    var lineGreen = document.getElementById("lineGreen9");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap10() {
    var text = document.getElementById("commentDiv10");
    var newText = document.getElementById("answer10").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip10");
    var lineGreen = document.getElementById("lineGreen10");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap11() {
    var text = document.getElementById("commentDiv11");
    var newText = document.getElementById("answer11").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip11");
    var lineGreen = document.getElementById("lineGreen11");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap12() {
    var text = document.getElementById("commentDiv12");
    var newText = document.getElementById("answer12").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip12");
    var lineGreen = document.getElementById("lineGreen12");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function tap13() {
    var text = document.getElementById("commentDiv13");
    var newText = document.getElementById("answer13").innerHTML;
    var arrowFlip = document.getElementById("arrow-flip13");
    var lineGreen = document.getElementById("lineGreen13");
    text.innerHTML = newText;
    text.className = "commentDivAfter";
    lineGreen.className = "lineGreenAfter";
    arrowFlip.style.display = "none";
}

function begining() {
    var text = document.getElementById("begining");
    var scrollDiv = text.offsetTop;
    window.scroll({ top: scrollDiv - 100, behavior: 'smooth' });
}

function during() {
    var text = document.getElementById("during");
    var scrollDiv = text.offsetTop;
    window.scroll({ top: scrollDiv - 100, behavior: 'smooth' });
}

function end() {
    var text = document.getElementById("end");
    var scrollDiv = text.offsetTop;
    window.scroll({ top: scrollDiv - 100, behavior: 'smooth' });
}