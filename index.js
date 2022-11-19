$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('.nav-bar-element').css("background-color", "#d8dbe0");
    $('.nav-bar-element').css("color", "#151515");
    if (scroll + 858 > $('.about-me-section').offset().top &&
        scroll + 5 <= $('.skills-section').offset().top) {
        document.getElementById("about-me-href").style.backgroundColor = '#151515';
        document.getElementById("about-me-href").style.color = '#d8dbe0';
    }

    if (scroll + 5 > $('.skills-section').offset().top) {
        document.getElementById("skills-href").style.backgroundColor = '#151515';
        document.getElementById("skills-href").style.color = '#d8dbe0';
    }
  });