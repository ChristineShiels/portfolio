const grrlApp = {};


grrlApp.leftSlide = function() {
    $('.sidebarToggle').on("click", function(){
        $(this).toggleClass('openLeft');
        $('.sidebar').toggleClass('openLeft');
    })
};

grrlApp.rightSlide = function() {
    $('.socialsToggle').on('click', function(){
        console.log("hello");
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

grrlApp.init = () => {
    grrlApp.leftSlide();
    grrlApp.rightSlide();
    grrlApp.navSlide();
}


$(function() {
    grrlApp.init();
})