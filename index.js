function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var second = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 /   60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
return {
    'total' : t,
    'days' : days,
    'hours' : hours,
    'minutes':minutes,
    'seconds': second
};



}
function initializeClock(id,endtime){
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondSpan = clock.querySelector('.seconds');

    function updateClock(){
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0'+ t.hours). slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondSpan.innerHTML = ('0' + t.seconds).slice(-2);


        if (t.total <= 0){
             clearInterval(timeinterval);
        }
    }


    updateClock();
    var timeinterval = setInterval(updateClock,1000);

}

var deaddline = new Date(Date.parse(new Date()) + 18 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv',deaddline);


$(document).ready ( function(){
    $(".filter-button").click( function() {
        var value = $(this).attr('data-filter');
        if(value == "all") {
            $('.filter').show('1000');
        }
        else {
            $('.filter').not ('.' + value).hide('3000');
            $('.filter').filter ('.' + value).show('3000');
        }
    });

    if($(".filter-button").removeClass("active")){
        $(this).removeClass('active');
    }
    $(this).addClass('active');
});


$(window).scroll(function () {
    if($(this).scrollTop() >=100){
        $('nav').addClass ('nav-fixed');

    }
    else{
        $('nav').removeClass('nav-fixed');
    }
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $('#arrow i').fadeIn();
        }
        else{
            $('#arrow i').fadeOut();

        }
    });
    $('#arrow i').on('click', function () {
        $("html,body").animate({
            scrollTop :0
        },600);
        return true;
    })
});


$(document).ready(function (){
    $('#toggle-btn').click (function (){
        $(".nav").toggleClass('nav-active');
        $('#toggle-btn i').toggleClass('nav-active');
    })
})
// const btn = document.querySelector("#arrow");
// btn.addEventListener ("click",function(){
//     window.scrollTo({
//         top:0,
//         left:0,
//         behavior:"smooth"
//     });
// });