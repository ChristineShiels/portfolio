const grrlApp = {};


grrlApp.leftSlide = function() {
    $('.sidebarToggle').on("click", function(){
        $(this).toggleClass('openLeft');
        $('.sidebar').toggleClass('openLeft');
    })
};

grrlApp.rightSlide = function() {
    $('.socialsToggle').on('click', function(){
        $(this).toggleClass('openRight');
        $('.socialsPanel').toggleClass('openRight');
    })
};

grrlApp.navSlide = function() {
    $('.navList li').on('click', function(){
        $('.sidebarToggle').toggleClass('openLeft');
        $('.sidebar').toggleClass('openLeft');
    })
    $('.socialsList li').on('click', function(){
        $('.socialsToggle').toggleClass('openRight');
        $('.socialsPanel').toggleClass('openRight');
    })
}

grrlApp.projectSwitch = function() {
    $(".projectList a").on("click", function(e) {
        console.log(this);
        if ($(this).hasClass("project01")) {
            console.log("project01");
            $(".projectPortal").hide().html('<p class="projectText">My first jQuery project - a simple text adventure built in one week</p><img src="./assets/neonFramejQueryAdventure.jpg" alt="choose your own adventure style web app"><a class="project" href="https://christineshiels.github.io/">click to view project</a> ').slideUp(700).slideDown(700);
        }
    })
}

grrlApp.init = () => {
    grrlApp.leftSlide();
    grrlApp.rightSlide();
    grrlApp.navSlide();
    grrlApp.projectSwitch();
}


$(function() {
    grrlApp.init();
})