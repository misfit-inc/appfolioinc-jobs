$.ajax({
  url: "https://learn.appfolio.com/inc/data/json/inc-news-and-press.json",
  dataType: "jsonp"
});

function jsonCallback(data){
/* NEWS start */
    /* clear result div */ 
    $('#featured-article .row').html('');
    $('#two-articles .row').html('');
    $('#three-articles .row').html('');
    $('#more-news-items-display .row').html('');
    $('#all-news-items-display').html('');

    /* First article */ 
    currentNewsCount = 1;

	$.each(data, function(i, item){
		if (data[i].type == "news"){
            $(document).ready(function() {
                /* 1st article */
                if (currentNewsCount == 1) {
                    $('#featured-article .row').append('<div class="large-4 medium-6 small-12 columns"><a href="'+data[i].link+'" target="_blank"><img src="'+data[i].image+'" alt="'+data[i].source+'" class="show-for-small-only picture"></a><img src="'+data[i].logo+'" alt="'+data[i].source+'" class="logo"><h3><a href="'+data[i].link+'" target="_blank">'+data[i].longtext+'</a></h3><p>'+data[i].snippet+' <a href="'+data[i].link+'" target="_blank">[Read More]</a></p></div><div class="large-8 medium-6 small-12 columns"><a href="'+data[i].link+'" target="_blank"><img src="'+data[i].image+'" alt="'+data[i].source+'" class="hide-for-small-only"></a></div>');
                }

                /* 2 more articles */
                if (currentNewsCount > 1 && currentNewsCount <= 3) {
                    $('#two-articles .row').append('<div class="large-6 medium-6 small-12 columns"><a href="'+data[i].link+'" target="_blank"><img src="'+data[i].image+'" alt="'+data[i].source+'" class="picture" /></a><img src="'+data[i].logo+'" alt="'+data[i].source+'" class="logo" /><h3><a href="'+data[i].link+'" target="_blank">'+data[i].longtext+'</a></h3><p>'+data[i].snippet+' <a href="'+data[i].link+'" target="_blank">[Read More]</a></p></div>');
                }

                /* 3 more articles */
                if (currentNewsCount > 3 && currentNewsCount <= 6) {
                    $('#three-articles .row').append('<div class="large-4 medium-4 small-12 columns"><a href="'+data[i].link+'" target="_blank"><img src="'+data[i].image+'" alt="'+data[i].source+'" class="picture" /></a><img src="'+data[i].logo+'" alt="'+data[i].source+'" class="logo" /><h3><a href="'+data[i].link+'" target="_blank">'+data[i].longtext+'</a></h3><p>'+data[i].snippet+' <a href="'+data[i].link+'" target="_blank">[Read More]</a></p></div>');
                }
            });
            currentNewsCount = currentNewsCount + 1; 
		}	
	});

    /* 8 more articles */
    moreNewsCount = 1;
    $.each(data, function(i, item){
        $(document).ready(function() {
            $('#load-more-news').click(function() {
                $('#load-more-news').css('display', 'none');
                $('.horizon').css('display', 'block');
                $('#load-all-news').show();
                if (data[i].type == 'news') {
                    if (moreNewsCount > 6 && moreNewsCount <= 14) {
                        $('#more-news-items-display .row').append('<div class="large-3 medium-6 small-12 columns more_articles"><a href="'+data[i].link+'" target="_blank"><img src="'+data[i].image+'" alt="'+data[i].source+'" class="picture" /></a><img src="'+data[i].logo+'" alt="'+data[i].source+'" class="logo" /><h3><a href="'+data[i].link+'" target="_blank">'+data[i].longtext+'</a></h3><p>'+data[i].snippet+' <a href="'+data[i].link+'" target="_blank">[Read More]</a></p></div>');
                    }
                    moreNewsCount = moreNewsCount + 1;
                }
            });
        });
    }); 

    /* Load all articles */
    allNewsCount = 1;
    $.each(data, function(i, item){
        $(document).ready(function() {
            $('#load-all-news').click(function() {
                $('#load-all-news').css('display', 'none');
                $('.buttons').css('display', 'none');
                if (data[i].type == 'news') {
                    if (allNewsCount > 14) {
                        $('#all-news-items-display').append('<li><a href="'+data[i].link+'" target="_blank">'+data[i].longtext+'</a> &nbsp;('+data[i].source+')</li>');
                    }
                    allNewsCount = allNewsCount + 1;
                }
            });
        });
    });
/* NEWS end */

/* PRESS start */
    /* clear result div */
    $('#more-press-items-display ul').html('');
    $('#home-press-list-display ul').html('');

     /* Count all articles */
     pressCount = 0;
     $.each(data, function(i, item){
        if (data[i].type == 'press release'){
            pressCount = pressCount + 1;
        }
    });
    // Set article display values //
    var pressArticleIntervals = 10;
    var initialPressArticles = 2; // first one is 0. So value of 2 will mean 3 articles //
    var startOfRestOfPressArticles = pressArticleIntervals + initialPressArticles + 1;

    /* First 3 press releases */
    currentPressCount = 0;

    $.each(data, function(i, item){
        if (data[i].type == 'press release'){
            if (currentPressCount <= initialPressArticles){
                $(document).ready(function() {
                $('#home-press-list-display ul').append('<li><span>'+data[i].date+'</span><h2 class="news-pr-date"><a href="'+data[i].link+'">'+data[i].longtext+'</a></h2></li>');
                });
                currentPressCount = currentPressCount + 1;
                
            }
        }
    });

    morePressCount = 0;

    $.each(data, function(i, item){
        $(document).ready(function() {
        $('#load-more-press').click(function() {
            $('#load-more-press').css('display', 'none');
            $('#load-all-press').show();
                if (data[i].type == 'press release'){
                    if (morePressCount <= initialPressArticles){
                        $('#more-press-items-display ul').append();
                    } else {
                        nextBatchPress = currentPressCount + pressArticleIntervals;
                        if (morePressCount <= nextBatchPress){
                            $('#more-press-items-display ul').append('<li><a href="'+data[i].link+'">'+data[i].longtext+'</a> <span>('+data[i].date+')</span></li>');
                        } else {
                            $('#more-press-items-display ul').append();
                        }
                    }
                    morePressCount = morePressCount + 1;
                }
            });
        });
    });

    allPressCount = 0;

    $.each(data, function(i, item){
        $(document).ready(function() {
        $('#load-all-press').click(function() {
            $('#load-all-press').css('display', 'none');
                if (data[i].type == 'press release'){
                    if (allPressCount <= startOfRestOfPressArticles){
                        $('#more-press-items-display ul').append();
                    } else {
                        if (allPressCount > startOfRestOfPressArticles){
                            $('#more-press-items-display ul').append('<li><a href="'+data[i].link+'">'+data[i].longtext+'</a> <span>('+data[i].date+')</span></li>');
                        } else {
                            $('#more-press-items-display ul').append();
                        }
                    }
                    allPressCount = allPressCount + 1;
                }
            });
        });
    });
/* PRESS end */

}