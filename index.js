$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.nav-bar-element').css("background-color", "#d8dbe0");
    $('.nav-bar-element').css("color", "#151515");
    if (scroll + 1049 > $('.about-me-section').offset().top &&
        scroll + 160 <= $('.skills-section').offset().top) {
        document.getElementById("about-me-href").style.backgroundColor = '#151515';
        document.getElementById("about-me-href").style.color = '#d8dbe0';
    }

    if (scroll + 160 > $('.skills-section').offset().top) {
        document.getElementById("skills-href").style.backgroundColor = '#151515';
        document.getElementById("skills-href").style.color = '#d8dbe0';
    }
  });

function setArrowHeight () {
    var childLabels = document.getElementById("skills").getElementsByTagName("label");
    
    for (i=0; i< childLabels.length; i++) {
        var labelHeight;
        if(childLabels[i].offsetHeight) {
            labelHeight = childLabels[i].offsetHeight;
        } else {
            labelHeight = childLabels[i].style.pixelHeight;
        }
        var skillSectionArrow = childLabels[i].querySelector("#skill-section-arrow");
        if(skillSectionArrow) {
            skillSectionArrow.style.height = labelHeight;
            setArrowDesignMargin(skillSectionArrow, labelHeight/2.2);
        }
    }
}

function setArrowDesignMargin (parent, height) {
    var skillArrowDesign = parent.querySelector(".skill-arrow-design");
    if(skillArrowDesign) {
        skillArrowDesign.style.marginTop = height
    }
}

window.addEventListener('resize', setArrowHeight);
window.addEventListener('load', setArrowHeight);