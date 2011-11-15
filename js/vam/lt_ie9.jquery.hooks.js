jQuery(document).ready(function() {
    
    /* emulate some higher level css blocks for lesser IEs */
    $('.stripe>h2:nth-child(2n), .stripe>h3:nth-child(2n), .stripe>ul:nth-child(2n)>li:nth-child(2n+1), .stripe>ul:nth-child(2n+1)>li:nth-child(2n), .stripe>.pane:nth-child(2n)').addClass('bg2');
    $('.stripe>h2, .stripe>h3, .stripe>ul>li').css({'border-bottom':'1px dotted #e4e4e4', 'margin':'0', 'padding':'0.6em 1em'});
    $('.stripe>ul>li').css({'background-position':'1.3em 1.1em', 'padding-left':'2.2em'});
    $('.row>.stripe>ul>li:last-child').css({'border-bottom':'0'});
    $('.list .row .figure:nth-child(2n)').css({'border-left':'1px dotted #e4e4e4'});
    $('.subnav div.pane:nth-child(1) ul').css({'width':'23em'});
    $('#header-nav .subnav div.pane:nth-child(1) li').css({'display':'inline-block', 'width':'43%'});
    /* pseudo-classes in jQuery selectors appear to break the JS in IE6-7
	$('.ghost, .carousel li img.active, .carousel li img:hover').css({'filter':'alpha(opacity=40)'});	
    */
    $('.ghost').css({'filter':'alpha(opacity=40)'});
    $('.promo .promocaption').css({'filter':'alpha(opacity=90)'});
    $('#content.row .two-thrds-w.col:first-child .row:first-child .figure.half-w:nth-child(-n+2)').css({'padding-top':'20px'});
    $('.row:not(.pane) .row:not(.pane)').css({'padding-bottom':'15px'});
    $('.row:not(.pane) .row:not(.pane)+.row:not(.pane):not(.figure)').css({'padding-bottom':'0'});
    $('.row:not(.pane):not(.figure):not(#content)>*:first-child:not(.pane):not(.figure):not(.col), .row:not(.page-header)+*:not(.row):not(.pane):not(.figure):not(.nav)').css({'margin-top':'15px'});
    
});
