

$(document).ready()
{

    $('.open').on("click", function () {

        $('#sidebar').animate({ left: '0px' }, 1000);
        

    });

    $("#close").on("click", function () {
        $("#sidebar").animate({ left: `${- $('#side').innerWidth()}px` }, 1000);
       

    });
 

    $('.linkto').on('click', function(e) {

        let section = $(e.target).attr('href');
        let secoffset = $(section).offset().top;
        $('html , body').animate({scrollTop:secoffset}, 2000);
    });


    $('.singer').on('click', function () {
        $(this).next().slideToggle(500);
        $('.details').not($(this).next()).slideUp(500);

    });


    $('.details').not('.one').hide();

    $('#message').on('input', function (e) {
        let counter = $(this).val().length;
        let remain = 100 - counter;
        if (remain < 0) {
            $('#remain').text(`your available character finished`);
        }
        else {
            $('#remain').text(`${remain}`);
        }
    })

    countDown('26 JUL 2024 10:00:00');
}

function countDown(date) {
    let eventDate = new Date(date)
    eventDate = eventDate.getTime() / 1000;
    let currentTime = (new Date().getTime()) / 1000;
    let remind = (eventDate - currentTime);
    let days = Math.floor(remind / (24 * 60 * 60));
    let hours = Math.floor((remind - (days * 24 * 60 * 60)) / (60 * 60));
    let mints = Math.floor((remind - (days * 24 * 60 * 60) - (hours * 60 * 60)) / (60));
    let seconds = Math.floor((remind - (days * 24 * 60 * 60) - (hours * 60 * 60) - (mints * 60)));

    $('.days').text(`${days} D`);
    $('.hours').text(`${hours} h`);
    $('.mints').text(`${mints} m`);
    $('.sec').text(`${seconds} s`);

    setInterval(function () { countDown(date); }, 1000);
    // console.log(remind);

    // console.log(days);

    // console.log(hours);

    // console.log(mints);

    // console.log(seconds);
}
