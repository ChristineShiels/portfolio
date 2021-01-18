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
            $(".projectPortal").hide().html('<p class="projectText">My first jQuery project - a simple text adventure built in one week</p><img src="./assets/neonFramejQueryAdventure.jpg" alt="choose your own adventure style web app"><a class="live" href="https://christineshiels.github.io/" target="_blank">view project</a><a class="project" href="https://github.com/ChristineShiels/ChristineShiels.github.io.git" target="_blank">view code</a> ').slideUp(700).slideDown(700);
        }else if ($(this).hasClass("project02")) {
            $(".projectPortal").hide().html('<p class="projectText">My first React project - an app to record and review craft beer tasting notes, built in one week</p><img src="./assets/neonFrameTapp.jpg" alt="beer tasting web app"><a class="live" href="https://christineshiels.github.io/project05/" target="_blank">view project</a><a class="video" href="https://www.loom.com/share/b6272cd8fb11452e987ffe9b8c914b42" target="_blank">intro video</a><a class="project" href="https://github.com/ChristineShiels/project05.git" target="_blank">view code</a> ').slideUp(700).slideDown(700);
        }else if ($(this).hasClass("project03")) {
            $(".projectPortal").hide().html('<p class="projectText">Group React project - a mock client request to allow user to choose a color from a makeupp API and return an artwork containing that color from a museum API</p><img src="./assets/neonFrameHue.jpg" alt="API project web app"><a class="live" href="https://hue-are-you.github.io/hue-are-you/" target="_blank">view project</a><a class="project" href="https://github.com/Hue-are-you/hue-are-you.git" target="_blank">view code</a> ').slideUp(700).slideDown(700);
        }else if ($(this).hasClass("project04")) {
            $(".projectPortal").hide().html('<p class="projectText">Group API project - my first API app uses MapQuest and Leafly APIs to find restaurants near to user provided location and offer directions</p><img src="./assets/neonFrameMaps.jpg" alt="Food Finder web app"><a class="live" href="https://christinebenproj4org.github.io/christineBenProj4/" target="_blank">view project</a><a class="project" href="https://github.com/christineBenProj4Org/christineBenProj4.git" target="_blank">view code</a> ').slideUp(700).slideDown(700);
        }else if ($(this).hasClass("project05")) {
            $(".projectPortal").hide().html('<p class="projectText">My first JavaScript project - a word-guessing game inspired by the game show, built in one week</p><img src="./assets/neonFrameLingo.jpg" alt="word game web app"><a class="project" href="http://lazrgrrl.com/lingo.html" target="_blank">view project</a> ').slideUp(700).slideDown(700);
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