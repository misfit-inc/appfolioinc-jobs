$(document).ready(function() {

    // This section removes the text overlay of the videos on play click and loads in the embed code from Wistia and autoplays
    function loadWisitaEmbed(id){ // function to dynamically generate the proper embed code based on Wistia ID
        var embedCode = "";
        var embedCode = '<div class="wistia_responsive_padding" style="padding:49% 0 0 0;position:relative;">' +
            '<div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">' +
            '<iframe src="https://fast.wistia.net/embed/iframe/'+id+'?videoFoam=true&autoplay=true" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>' +
            '<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>';
        return embedCode;
    }
    // Load the content of all of the video boxes into an object
    var vID; //declare the video ID
    var vHTML; // declare the content of each carousel box
    var vContent = {}; // declare the object where I will store the data
    $(".employee-video-item").each(function() { // loop thru the video carousel items to get the ID and HTML content
        var vID = $(this).attr('id'); // set each video ID as the key
        var vHTML = $(this).html(); // Associate the HTML content of the container to this variable vHTML
        vContent[vID] = vHTML; // Associate the video ID with the HTML content into the object
    });
    $('.employee-video-item').on('click', function(){ // This is what it does when a user clicks on a video carousel item
        var videoID; // declare the videoID variable. It is used to see which video the user clicks
        var videoID = $(this).attr('id') // The ID is set as the div id. It is the wisita video ID
        $('.employee-video-item').html(loadWisitaEmbed(videoID)); // This dynamically loads the embed code into the video carousel position that the user clicked on
        // $(this).unbind( "click" ); // this unbinds the click action so subsequent clicks do not affect the UI. It is disabled because we are using the iFrame embed code from Wistia
        $(".employee-video-item").each(function() { // loop thru the video carousel again
            if (videoID == $(this).attr('id')){ // The video the user clicked should not be reset to the standard HTML code
            } else {
                $(this).html(vContent[$(this).attr('id')]); // This will repalce the original HTML to the video carousel item so if it was playing the video, it will stop it.
            }
        });
    });

    $('#employee-hero-video, .owl-prev, .owl-next').on('click', function(){ // This stops any of the carousel videos from playing when the hero video, the left or the right arrows of the carousel is clicked
        $(".employee-video-item").each(function() { // loop thru the video carousel again
            $(this).html(vContent[$(this).attr('id')]); // This will repalce the original HTML to the video carousel item so if it was playing the video, it will stop it.
        });
    });

    $('#mobile-nav #top #menu').click(function() {
        $('#mobile-nav').animate({marginLeft: '-639px'}, 300);
    });

    $('nav #mobile-menu').click(function() {
        $('#mobile-nav').animate({marginLeft: '0px'}, 300);
    });

    $('#mobile-nav ul li#mobile-nav-about').click(function() {
        window.location = "/about";
    });

    $('#mobile-nav ul li#mobile-nav-products').click(function() {
        window.location = "/products";
    });

    $('#mobile-nav ul li#mobile-nav-jobs').click(function() {
        window.location = "/jobs";
    });

    $('#mobile-nav ul li#mobile-nav-news').click(function() {
        window.location = "/news";
    });

    $('#mobile-nav ul li#mobile-nav-ir').click(function() {
        window.location = "https://ir.appfolioinc.com";
    });

    /*
      af modal window
    */
    $('.benefits-open-modal').click(function() {
        $('#benefits-af-modal').fadeIn(300);
    });
    $('#whyapp-open-modal').click(function() {
        $('#whyapp-af-modal').fadeIn(300);
    });
    $('#about-open-modal').click(function() {
        $('#about-af-modal').fadeIn(300);
    });
    $('#brian-open-modal').click(function() {
        $('#brian-af-modal').fadeIn(300);
    });
    $('#klaus-open-modal').click(function() {
        $('#klaus-af-modal').fadeIn(300);
    });
    $('#jon-open-modal').click(function() {
        $('#jon-af-modal').fadeIn(300);
    });
    $('#ida-open-modal-sm').click(function() {
        $('#ida-af-modal').fadeIn(300);
    });
    $('#ida-open-modal-lg').click(function() {
        $('#ida-af-modal').fadeIn(300);
    });
    $('#amy-open-modal').click(function() {
        $('#amy-af-modal').fadeIn(300);
    });
    $('#aimee-open-modal').click(function() {
        $('#aimee-af-modal').fadeIn(300);
    });
    $('#jason-open-modal').click(function() {
        $('#jason-af-modal').fadeIn(300);
    });
    $('#coalson-open-modal').click(function() {
        $('#coalson-af-modal').fadeIn(300);
    });
    $('#nye-open-modal').click(function() {
        $('#nye-af-modal').fadeIn(300);
    });
    $('#ipad-open-modal').click(function() {
        $('#ipad-af-modal').fadeIn(300);
    });
    $('#muse-open-travis-modal').click(function() {
        $('#muse-travis-modal').fadeIn(300);
    });
    $('#muse-open-beth-modal').click(function() {
        $('#muse-beth-modal').fadeIn(300);
    });
    $('#muse-open-damon-modal').click(function() {
        $('#muse-damon-modal').fadeIn(300);
    });
    $('#muse-open-lizzie-modal').click(function() {
        $('#muse-lizzie-modal').fadeIn(300);
    });
    $('#muse-open-sam-modal').click(function() {
        $('#muse-sam-modal').fadeIn(300);
    });

    $('.close-af-modal').click(function() {
        $('.afmodal').fadeOut(300);
    });
});

/*
  close af modal window with escape key
*/
$(document).keyup(function(e){
    if(e.keyCode === 27)
        $(".afmodal").fadeOut();
});