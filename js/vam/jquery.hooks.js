jQuery(document).ready(function() {
    
    $('#header-nav>ul>li>a').each(function(i){ $(this).attr('tabindex',i+8); });
    
    $('#login-links #login>a:visible').each(function(){
        var url = $(this).attr('href');
        if(url && typeof(url)!=='undefined'){
            if( !loggedIn() ){
                $('#login-links #login a').text('Log in');
                $('#login-links #login').append($('<div class="edged pane"><p class="alert"></p></div>').hide());
                var spin = '<li class="centre"><img src="http://media.vam.ac.uk/media/css/vam-css/img/spinner_666666_32x32.gif"/></li>',
                    fl = '<form id="user-login"><label for="user-name">Username or e-mail</label><input id="user-name" name="name" tabindex="1" /><label for="user-pass">Password</label><input type="password" id="user-pass" name="pass" tabindex="2" /><input type="hidden" value="user_login" name="form_id" /><input type="submit" value="Login" name="op" tabindex="3" /><input type="button" class="right" id="register" value="Register" tabindex="4" /><ul class="errorlist"></ul></form>';
                $('#login-links #login .pane').append($(fl));
                $('#login-links #user-login').submit(function(){
                    if( $('#login-links #user-login #user-name').val()==='' || $('#login-links #user-login #user-pass').val()==='' ){
                        $('#login-links #user-login .errorlist').empty();
                        $('#login-links #user-login .errorlist').append('<li>Please complete both fields to log in.</li><li class="more"><a href="'+url+'user/password.php">Reset password?</a></li>');
                    }else{
                        $('#login-links #user-login .errorlist').html(spin);
                        $.ajax({
                            type:'POST',
                            url:url+'index.php',
                            data:$(this).serialize(),
                            success:function(data){
                                if(data.indexOf('not-logged-in')!==-1){
                                    $('#login-links #user-login .errorlist').empty();
                                    $('#login-links #user-login .errorlist').append('<li>Sorry, unrecognized username or password. <br />Please try again.</li>');
                                }else{
                                    $.cookie('logged',$('#login-links #user-login #user-name').val());
                                    if( typeof($('#login-links #login').attr('data-href'))!=='undefined' ){ $.cookie('redirected',1); window.location = $('#login-links #login').attr('data-href'); }
                                    else{ window.location.replace(window.location.href); }
                                }
                            }
                        });
                    }return false;
                });
                $('#login-links #login #register').click(function(){
                    $(this).remove();
                    var fr = '<br class="clear" /><hr /><p class="strong">Or create a new account</p><form id="user-register"><label for="edit-name" title="This field is required">Username<span class="alert">*</span></label><input id="edit-name" name="name" tabindex="4" /><label for="edit-mail" title="This field is required">E-mail address<span class="alert">*</span></label><input id="edit-mail" name="mail" tabindex="5" /><label for="edit-pass-pass1" title="This field is required">Password<span class="alert">*</span></label><input type="password" id="edit-pass-pass1" name="pass[pass1]" tabindex="6" /><label for="edit-pass-pass2" title="This field is required">Confirm password<span class="alert">*</span></label><input type="password" id="edit-pass-pass2" name="pass[pass2]" tabindex="7" /><input type="hidden" value="user_register" id="edit-user-register" name="form_id"><input type="hidden" value="3600" name="timezone"><input type="submit" value="Register" name="op" tabindex="8" /><ul class="errorlist"></ul></form>';
                    $('#login-links #user-login').after($(fr));
                    $('#login-links #user-register input[type=password]').focus(function(){ $('#login-links #user-register .errorlist').empty().append('<li>It is recommended that passwords contain at least six characters, ideally including numbers, punctuation, and both upper and lowercase letters.</li>'); });
                    $('#login-links form input[type=submit]').addClass('right');
                    $('#login-links #user-register').submit(function(){
                        if( $('#login-links #user-register #edit-name').val()==='' || $('#login-links #user-register #edit-mail').val()==='' || $('#login-links #user-register #edit-pass-pass1').val()==='' ){
                            $('#login-links #user-register .errorlist').empty().append('<li>Please complete all fields to register.</li>');
                        }else{
                            $('#login-links #user-register .errorlist').html(spin);
                            $.ajax({
                                type:'POST',
                                url:url+'register.php',
                                data:$(this).serialize(),
                                success:function(data){
                                    if(data.indexOf('messages error')!==-1){
                                        var msg = data.slice(data.indexOf('messages error'),data.indexOf('</ul>',data.indexOf('messages error'))).replace(/[\s\S]*<ul>/im,'');
                                        $('#login-links #user-register .errorlist').empty().append(msg);
                                    }else{
                                        $.cookie('logged',$('#login-links #user-register #edit-name').val());
                                        $.cookie('registered',1);
                                        if( typeof($('#login-links #login').attr('data-href'))!=='undefined' ){ $.cookie('redirected',1); window.location = $('#login-links #login').attr('data-href'); }
                                        else{ window.location.replace(window.location.href); }
                                    }
                                }
                            });
                        }return false;
                    });
                });
                $('#login-links #login>a').click(function(){
                    if($('#login-links #login .pane').is(':visible')){
                        $('#login-links #login .pane').hide();
                    }else{
                        $('#login-links #login p.alert').empty();
                        $('#login-links #login .pane').show(); 
                        $(this).focus();
                        $(this).mouseTrap({'close':'#login-links #login .pane','mask':1});
                    }return false;
                });
            }else if( $.cookie('logged') ){
                var profile, close, 
                    msg = $.cookie('registered')?
                        '<p><strong>Thank you for registering '+$.cookie('logged')+'</strong></p><p>You may edit your profile at any time by clicking on "Your profile" at the top of the page.</p>'
                    :   '<p><strong>Welcome back '+$.cookie('logged')+'</strong></p>';
                $('#login-links #login').append('<div class="edged pane" id="user-login"></div>');
                $('#login-links #user-login').append(msg+'<br/>');
                if( $.cookie('redirected') ){ profile='<input type="button" class="right" value="Your profile" />'; close='<input type="button" value="Continue" />'; }
                else{ profile='<input type="button" value="Your profile" />'; close='<input type="button" class="right" value="Close" />'; }
                $('#login-links #user-login').append($(profile).click(function(){ window.location.href = url; }));
                $('#login-links #user-login').append($(close).click(function(){ $('#login-links #user-login').remove(); $('#mousetrap').remove(); }));
                $('#login-links #user-login').mouseTrap({'mask':1,'positionMe':0});
                $.cookie('logged', null); $.cookie('registered', null); $.cookie('redirected', null);
            }
        }
    });
    
    /* links requiring log-in */
    $('.log-in').each(function(){
        if( !loggedIn() ){
            $(this).mousedown(function(e){ e.preventDefault(); href=(typeof($(this).attr('href'))!=='undefined')? $(this).attr('href'):''; $('#login-links #login').attr('data-href',href); $('#login-links #login>a').click(); $('#login-links #login p.alert').append('Please log in, or create a new account to proceed'); $('#login-links #login #register').click(); });
        }
    });
    
    /* Search box functions */
    $('input#query').each(function(){
        $(this).val('Search');
        $(this).focus(function(){ 
            if( $(this).val()==='Search' ){ $(this).val(''); }
            if( $('#query-menu').has('li').length>0 ){
                $('#query-menu').show();
                $(this).mouseTrap({'close':'#query-menu'});
            }
        });
        $(this).focusout(function(){
            if( $(this).val()==='' ){ $(this).val('Search'); }
        });
        $(this).attr('autocomplete','off');
        var query_menu = '<div id="query-menu" class="input-menu"><h6>Go directly to...</h6><div id="keyterm-menu"></div><div id="article-menu" class="edge-t"></div></div>';
        $(this).parent('form').append($(query_menu).hide());
        var p = $(this).position(), h = $(this).height();
        $('#query-menu').css({ 'top':p.top+h, 'left':p.left-2, 'min-width':$(this).parent('form').width() });
        $('#query-menu').keydown(function(e){ var key = e.keyCode?e.keyCode:e.which; if( key===38 || key===40 ){ e.preventDefault(); } });
        $('#query-menu').keyup(function(e){
            var key = e.keyCode?e.keyCode:e.which,
                arrow = {up:38,down:40},
                div,li,div_lis=[];
            if( key===arrow.up || key===arrow.down ){
                li = $('a:focus').parent('li').index();
                div = $('a:focus').parent().parent().parent('div').index() - 1;
                $(this).find('ul:visible').each(function(){ div_lis.push($(this).find('li').length); });
            }
            switch( key ) {
                case arrow.up:
                    if( li>0 ){ --li; $(this).find('div').eq(div).find('li').eq(li).find('a').focus(); }
                    else if( div>0 ){ --div; $(this).find('div').eq(div).find('li').eq(div_lis[div]-1).find('a').focus(); }
                    else{ $('input#query').focus(); }
                    return false;
                case arrow.down:
                    if( li<div_lis[div]-1 ){ $(this).find('div').eq(div).find('li').eq(li+1).find('a').focus(); }
                    else if( div<div_lis.length-1 ){ ++div; $(this).find('div').eq(div).find('li').eq(0).find('a').focus(); }
                    else{ $('input#query').focus(); }
                    return false;
            }
        });
        $('#query-menu a').click(function(e){ setTimeout(function(){$('#query-menu').hide(200);$('#query-menu ul').remove();},2300); });
        $(this).bind('keyup', function(e){ 
            var key = e.keyCode?e.keyCode:e.which,
                arrow = {up:38,down:40};
            switch (key) {
                case arrow.up:
                    $('#query-menu').find('div:has(li)').eq(-1).find('li:last-child a').focus();
                    return false;
                case arrow.down:
                    $('#query-menu').find('div:has(li)').eq(0).find('li:first-child a').focus();
                    return false;
            }
            if( $(this).val().length > 1 ){
                var contentapi = $(this).parent('form').attr('action');
                contentapi = contentapi.replace(/\/?$/, '');
                $.ajax({ url:contentapi+'/keyterms.php', data:$(this).serialize(), success:function(response, status){
                        if( status==="success" && this.data.slice(this.data.indexOf('=')+1).replace(/\+/g,' ')===$('input#query').val() ){
                            $('#keyterm-menu').html(response);
                            $('#keyterm-menu ul').addClass('links');
                            $('#query-menu:has(li)').show();
                        }
                        if( $('#query-menu ul').children('li').length===0 ){ $('#query-menu').hide(); }
                    }
                });
                $.ajax({ url:contentapi+'/articles.php', data:$(this).serialize(), success:function(response, status){
                        if( status==="success" && this.data.slice(this.data.indexOf('=')+1).replace(/\+/g,' ')===$('input#query').val() ){
                            $('#article-menu').html(response);
                            $('#article-menu ul').addClass('links');
                            $('#query-menu:has(li)').show();
                        } 
                        if( $('#query-menu ul').children('li').length===0 ){ $('#query-menu').hide(); }
                        var re = new RegExp('('+ $('input#query').val() +')', 'i');
                        $("#article-menu li a").each(function(){ 
                            var html = $(this).html();
                            html = html.replace('beta.vam.ac.uk', 'www.vam.ac.uk'); 
                            $(this).html(html.replace(re, '<strong>$1</strong>')); 
                        });
                    }
                });
                $(this).mouseTrap({'close':'#query-menu'});
            }else{
                $('#query-menu').hide();
                $('#query-menu ul').remove();
            }
        });
    });

    /* Slideshow / projector */
    $('.slideshow').each(function(){
        if( $(this).width()===0 ){ $(this).css({'width':$(this).find('img').width()+'px'}); }
        if( $(this).height()===0 ){ $(this).css({'height':$(this).find('img').height()+'px'}); }
        $(this).data('c',1);
        $(this).data('i',1);
        $(this).data('t',0);
        var ss = this.id,
            vid;
        $(this).find('.slide').each(function(i){
            this.id = ss+'-slide-'+i;
            $(this).find('.video').eq(0).each(function(){
                if( vid = $(this).data('vimeo-id') ){
                    $(this).before($('<iframe frameborder="0" width="100%" height="100%" src="http://player.vimeo.com/video/'+vid+'?title=0&autoplay=1&byline=0&portrait=0&loop=1&api=1&player_id='+vid+'"></iframe>'));
                    $(this).remove();
                }
            });
            if( !vid ){
                $(this).find('.img').each(function(){
                    $(this).before('<img src="'+$(this).attr('id')+'" alt="" />');
                    $(this).remove();
                });
            }
        });
        if( vid ){ $(this).addClass('video'); }
        else if( $(this).find('.slide').length>1 ){ setInterval(function(){slideShow(ss);}, 1000); }
    });
    
    /* add mute to slideshow video */
    $('.slideshow iframe[src*="vimeo"]').each(function(){
        if (!this.contentWindow.postMessage){ return false; }
        var url = this.src.split('?')[0];
        this.post = function(action, value){
            var data = '{"method":"'+action+'","value":"'+value+'"}';
            this.contentWindow.postMessage(data, url);
        };
        $(this).after($('<a class="mute btn">Mute</a>').click(function(){ $(this).parent().find('iframe').get(0).post('setVolume',$(this).text()==='Mute'?0:1); $(this).text($(this).text()==='Mute'?'Audio':'Mute'); }));
        $(this).load(function(){ setTimeoutObj($(this), 1000, function(){$(this).next('.mute').click();}); });
    });

    /* grow final cols */
    $(window).bind('load resize', function(){
        $('#content .row').each(function(){
            var w = 0, r, f = $(this).children('.col').last();
            $(this).children('.col').not(':last-child').each(function(){ w +=$(this).outerWidth(); });
            r = $(this).width()-w-(f.hasClass('edge-l'))-1;
            if(r > f.width()){ f.width(r); }else{ f.css({'width':''}); }
        });
    });
    
    /* random child selector */
    $('.randomise').each(function(){
        var n = $(this).children().length,
            s = Math.floor(Math.random()*n);
        $(this).children().removeClass('hide').hide();
        $(this).children().eq(s).show();
        $(this).show();
    });
    
    $('.date').datepicker({ dateFormat:'dd/mm/yy', showOtherMonths:true, selectOtherMonths:true, showAnim:false });

    /* carousel */
    $('.carousel').jcarousel({initCallback:jcarouselResize}).find('li').click(function(){
        $(this).parents('.carousel').find('li').removeClass('active');
        $(this).addClass('active');
    });
    $(window).bind('resize', function(){
        $('.carousel').each(function(){ jcarouselResize($(this).data('jcarousel')) });
    });
    
    /* popup/lightbox content */
    $('a[rel=pop], a[rel=#popup], .lightbox.carousel li').each(function(){
        this.popContent = function(){
            var img, html, href, zoom = 1;
            if( $(this).find('.popup').length>0 ){
                img = $(this).find('.popup').attr('data-img'); html = $(this).find('.popup').html();
            }else{ 
                href = $(this).is('a') ? $(this).attr('href') : $(this).find('a').attr('href');
                if( /\.(jpe?g|giff?|tiff?|png|bmp)/i.test(href) ){
                    img = href;
                }else{
                    img = $(this).find('img').attr('src'); img = img.replace(/\/versions/g, ''); img = img.replace(/(_custom)?_[0-9]{3}x[0-9]{3}(_[0-9]+)?(\.[^\.]+)$/g, '$3');
                }
                html = $(this).next('.figcaption').length>0 ? $(this).next('.figcaption').html() : '';
            }
            if( $(this).find('img').attr('data-noZoom') ){ zoom = 0; }
            return {img:img,html:html,zoom:zoom};
        };
    });
    
    /* lightbox */
    $('.lightbox.carousel').each(function(){
        $(this).find('li>a[rel*=pop]').attr('rel',null);
        var c = $(this), cont = c.parents('.jcarousel-container'), cnid = getQrystrVal('cnid'), a = c.find((cnid && c.find('li[data-cnid="'+cnid+'"]').length>0)? 'li[data-cnid="'+cnid+'"]':( c.find('li.active').length>0 ? 'li.active':'li:nth-child(1)'));
        cont.before($('<div class="zoom"><div class="container"/><div class="prev"/><div class="next"/></div>'));
        var pup = cont.prev('.zoom');
        pup.find('.prev').click(function(){ a = a.prev().length==1? a.prev():c.find('li').last(); a.click(); c.jcarousel('scroll',a.index()); });
        pup.find('.next').click(function(){ a = a.next().length==1? a.next():c.find('li').first(); a.click(); c.jcarousel('scroll',a.index()); });
        pup.scroll(function(){ $(this).find('.prev, .next').css('margin-top',$(this).scrollTop()+'px'); });
        this.show = function(img, html, zoom){
            var imgTag = '<img src="'+img+'" alt="" />';
            if( zoom ){ imgTag = '<a href="'+img+'" rel="#popup">'+imgTag+'</a>'; }
            var content = '<div class="column">'+imgTag+'</div><div class="column"><div class="pane">'+html+'</div></div><div class="clearfix"/>';
            if( html!=='' ){ content = $('<div class="html pane"/>').append(content); }
            pup.find('.container').html(content);
            pup.scrollTop(0); pup.find('.prev, .next').css('margin-top',0); pup.css({'overflow':'hidden'});
            if( pup.find('.html').height()>pup.innerHeight() ){ pup.css({'overflow':'auto','overflow-x':'hidden'}); }
        };
        $(this).find('li').click(function(){
            var popContent = this.popContent(), img = popContent.img, html = popContent.html, zoom = popContent.zoom;
            a = $(this);
            c.get(0).show(img, html, zoom);
            return false;
        });
        a.click();
        c.jcarousel('scroll',a.index());
    });

    /* popup */
    $('body').append('<div class="overlay" id="popup"></div>');
    $('a[rel=pop]').attr('rel','#popup');
    $('a[rel=#popup]').live('click',function(e){
        e.preventDefault();
        $(this).overlay({
            fixed:0, top:'center', load:true, closeOnClick:false,
            onBeforeLoad:function(){
                var pip = this.getTrigger(), pup = this.getOverlay(), zoom = 0, c = pip.parents('.carousel'), a = pip.parent();
                if( pip.get(0).popContent instanceof Function ){ var popContent = pip.get(0).popContent(), img = popContent.img, html = popContent.html; }
                else{ var img = pip.attr('href'), html = '', zoom = 1; }
                pup.html('<img src="'+img+'" alt="" />'+html+'<div class="clearfix"/>');
                if( !zoom && c.length>0 ){
                    pup.prepend($('<div class="prev"/>').click(function(){ a = a.prev().length==1 ? a.prev() : c.find('li').last(); a.find('a').click(); c.jcarousel('scroll',a.index()); }));
                    pup.prepend($('<div class="next"/>').click(function(){ a = a.next().length==1 ? a.next() : c.find('li').first(); a.find('a').click(); c.jcarousel('scroll',a.index()); }));
                }
                pup.prepend($('<a class="close btn" href="javascript:void(0)">Close</a>').click(function(){ pip.overlay().close(); $('#mousetrap').remove(); }));
                pup.removeClass('html');
                pup.mouseTrap({'mask':1});
            },
            onLoad:function(){
                var pip = this.getTrigger(), pup = this.getOverlay(), w, h, t;
                if( pip.attr('data-popsize') ){
                    w = pip.attr('data-popsize');
                    pup.addClass('html');
                }else{
                    w = pup.find('img').width();
                }
                h = pup.height();
                t = (h<$(window).height() ? (($(window).height()-h)/2)-15:0) + $(window).scrollTop();
                pup.css({'width':w+'px','left':(($(window).width()-w)/2)-15,'top':t+'px'});
            }
        });
        return false;
    });
    
    $("ul.related-list li.more a").click(function(e){
        e.preventDefault();
        $("ul.related-list li.extra").toggle(250);
        link_text = $(this).html();
        if(link_text === 'More'){
            $(this).html('Less');
        }else{
            $(this).html('More');
        }
    });
    
    $('a.showhide-transcript').click(function(e){
        e.preventDefault();
        $(this).parent().next().toggle();
    });
    
    $('.figure img').each(function(){
        if( /uploads\/$/.test(this.src) ){
            this.src = 'http://media.vam.ac.uk/vamembed/media/default/'+this.getAttribute('width')+'x'+this.getAttribute('height')+'.png'; 
        }
    });

    $(window).bind('load resize', function(){
        $('.figure.row .left+.figcaption').each(function(){
            var w = $(this).parent().width();
            if(w >= 320){
                $(this).css({'display':'table-cell'}).width(w-$(this).parent().find('img').outerWidth());
                $(this).find('a.more').addClass('bottom-right').parent().css({'padding-bottom':'1.2em'});
            }else{
                $(this).css({'display':'','width':''});
            }
        });
    });
    
    $('.list .figure:has(.more)').each(function(){
        if( ($(this).prev('.figure:has(.more)').length > 0 || $(this).next('.figure:has(.more)').length > 0) && $(this).width() < $(this).parent().width() ){ 
            $(this).addClass('aligned');
        }
    });
    
    $('.list .figure:has(object), .list .figure:has(iframe)').each(function(){
        var h;
        if( h = $(this).prev('.figure').find('img').height() ){
            $(this).find('object').height(h);
            $(this).find('iframe').height(h);
        }else 
        if( h = $(this).next('.figure').find('img').height() ){
            $(this).find('object').height(h);
            $(this).find('iframe').height(h);
        }
    });
    
    /* track matrix pg visits */
    $('.asset-id').each(function(){
        var history = $.cookie('asset-id-history')? $.cookie('asset-id-history').split(',') : new Array(),
            i = history.indexOf($(this).attr('id'));
        if( i !== -1 ){ history.splice(i,1); }
        history.unshift($(this).attr('id'));
        $.cookie('asset-id-history', history.slice(0,5), { path:'/' }); 
    });
    
    $('#recently-viewed').each(function(){
        var api = '/contentapi/json/matrixasset/';
        if( $.cookie('asset-id-history') ){
            $(this).addClass('row').hide();
            $(this).append('<div class="pane"><h3>Recently viewed</h3><hr /></div>');
            var i, history = $.cookie('asset-id-history').split(',');
            for( i=0; i<history.length; ++i ){
                if( history[i]===$('.asset-id').attr('id') ){ continue; }
                $.getJSON( api+history[i]+'/', function(json){
                    if(json && json.length > 0){
                        var img = (json[0].extras.thumbnail_url)? json[0].extras.thumbnail_url+'&version=130x86' : 'http://media.vam.ac.uk/vamembed/media/default/130x86.png',
                            html = '<div class="quart-w figure"><a href="'+ json[0].fields.url +'"><img src="'+ img +'" alt="" /></a><div class="figcaption"><h4><a href="'+ json[0].fields.url +'">'+ json[0].fields.title +'</a></h4></div></div>';
                        $('#recently-viewed').append(html).show();
                    }
                });
            }
        }
    });
    
    $('ul.split').each(function(){
        var list = $(this),
            classes = $(this).attr('class'),
            t = Math.round(list.find('li').size()/2),
            c = 0;
        list.children().each(function(){
          if(++c > t){
            var new_list = $('<ul class="half-w left '+ classes +'" />').insertAfter(list);
            list = new_list;
            c = 1;
          }
          list.append(this);
        });
        $(this).addClass('half-w left edge-r');
    });
    
    /* Replace equal height cols method (OTL) for hashed urls */
    if( window.location.hash.length ){ replaceOTLMethod(); }
    $('a[href^="#"]').bind('mousedown',replaceOTLMethod());
    function replaceOTLMethod(){
        $('#content, #content>.col').css({'overflow':'visible'});
        $('#content').append('<div class="clearfix"/>');
        $('.col').css({'margin-bottom':0,'padding-bottom':0});
        $('.col.edge-l').prev('.col').addClass('edge-r').css({'margin-right':'-1px'});
    }
    
}); //end doc.ready

/* plugins + fns */

/* Generic carini plugin for catching mouseclicks outside a JQ object */
(function($){
    $.fn.extend({
        mouseTrap: function(opt){
            var def = { close:this, positionMe:1, mask:0 },
                opt = $.extend(def,opt);
            return this.each(function(){
                var obj = $(this);
                if( opt.positionMe ){ obj.css({'position':'relative'}); }
                $('#mousetrap').remove();
                obj.before($('<div id="mousetrap" class="'+(opt.mask?'mask':'')+'"/>').css({'height':$(window).height(),'width':$(window).width()}).click(function(){ $(opt.close).hide(); $('#mousetrap').remove(); }));
                obj.click(function(){ if( $(opt.close).is(':hidden') ){ $('#mousetrap').remove(); } });
            });
        }
    });
})(jQuery);

function slideShow(ss){
    var h = $('#'+ss), // holder
        i = h.data('i'), 
        c = h.data('c'),
        n = h.find('.slide').length,
        s = $('#'+ss+'-slide-'+i), // curr slide
        ps = $('#'+ss+'-slide-'+(i+n-1)%n), // prev slide
        e = (h.data('t')<n && ps.data('exposure-1'))? ps.data('exposure-1'):(ps.data('exposure')? ps.data('exposure'):7),
        d = 1, // dir'n +/-1
        t = (ps.data('wipetime'))? ps.data('wipetime'):1024;
    if( c >= e ){
        s.removeClass('hide').css({'left':0,'opacity':1});
        if( ps.data('wipe')==='fade' ){
            ps.find('.html').hide(); s.css({'opacity':0}).animate({'opacity':1}, t);
            setTimeout(function(){ps.css({'opacity':0,'left':d*h.width()+'px'}); ps.find('.html').show();}, t);
        }else{
            s.css({'left':-d*h.width()+'px'}).animate({'left':0}, t);
            ps.animate({'left':d*h.width()+'px'}, t);
        }
        h.find('.slide:last').after(ps);
        i = (i===n-1)? 0:++i;
        c = 0;
        h.data('i',i);
        h.data('t',h.data('t')+1);
    }
    h.data('c',++c);
}

function loggedIn(){
    return ( document.cookie.indexOf('CHOCOLATECHIP')!==-1 );
}

function jcarouselResize(c){
    if( c.container.hasClass('jcarousel-container-horizontal') ){ c.container.outerWidth(c.container.parent().innerWidth()-(2*c.container.find('.jcarousel-prev').outerWidth())); }
}
