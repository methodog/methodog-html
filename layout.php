<?php
require_once('page_controller.php');
?>
<!DOCTYPE html>
<html lang="en" id="vam-ac-uk">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/vam/reset.css" media="all" />
    <link rel="stylesheet" type="text/css" href="css/vam/fonts.css" media="all" />
    <link rel="stylesheet" type="text/css" href="css/vam/base.css" media="all" />
    <link rel="stylesheet" type="text/css" href="css/vam/style.css" media="all" />
    <!--[if lt IE 8]>
        <link rel="stylesheet" type="text/css" href="css/vam/lt_ie8.css" media="all" />
        <script defer type="text/javascript" src="css/vam/iepngfix_tilebg.js"></script>
    <![endif]-->
    <link rel="stylesheet" type="text/css" href="css/vam/jquery-ui-theme/jquery-ui-1.8.5.custom.css" media="all" />
    <?php if($theme) { ?><link rel="stylesheet" type="text/css" href="css/vam/theme/<?php echo $theme; ?>.css" media="all" /><?php } ?>
    <link rel="stylesheet" type="text/css" href="css/vam/print.css" media="print, handheld" />
    <link rel="shortcut icon" href="css/vam/img/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="css/vam/img/favicon.ico" type="image/x-icon" />
    <title><?php draw_page_title(); ?> &mdash; Victoria and Albert Museum</title>
</head>

<body>

    <div id="wrapper">
        <a class="asset-id" id="124821"></a>
        <div id="header" <?php if($layout==1){ ?> class="landing slideshow" <?php } ?>>
            <?php if($layout==1){ ?>
            <div class="slide" data-exposure="2" data-exposure-1="1" data-wipe="slide" data-wipetime="512">
                <img src="content/img/header_landing.jpg" alt="" />
                <div class="video" <!--data-vimeo-id="20552521"-->></div>
                <div class="html">
                    <div class="black alpha quart-w pane right"><h2>html 1 <a href="#">LINK</a> html 1 html 1 html 1 html 1 html 1</h2></div>
                </div>
            </div>
            <div class="slide hide" data-exposure="2" data-exposure-1="1" data-wipe="fade" data-wipetime="">
                <div class="img" id="content/img/header_landing_2.jpg"></div>
                <div class="html">
                    <div class="black alpha quart-w pane bottom-right"><h2>html 2 <a href="#">LINK</a> html 2 html 2 html 2 html 2 html 2</h2></div>
                </div>
            </div>
            <div class="slide hide" data-exposure="2" data-exposure-1="1" data-wipe="fade" data-wipetime="">
                <div class="img" id="content/img/header_landing_3.jpg"></div>
                <div class="html">
                    <div class="black alpha quart-w pane bottom-left"><h2>html 3 <a href="#">LINK</a> html 3 html 3 html 3 html 3 html 3</h2></div>
                </div>
            </div>
            <div class="slide hide" data-exposure="2" data-exposure-1="1" data-wipe="fade" data-wipetime="">
                <div class="img" id="content/img/header_landing_4.jpg"></div>
                <div class="html">
                    <div class="black alpha quart-w pane right"><h2>html 4 <a href="#">LINK</a> html 4 html 4 html 4 html 4 html 4</h2></div>
                </div>
            </div>
            <?php } ?>
            <div class="header">
                <a id="logo" href="#" title="Victoria and Albert Museum"><img src="css/vam/img/logo.gif" alt="Victoria and Albert Museum" /></a>
                <form class="searchbar" action="/contentapi/search/">
                    <input type="text" name="q" id="query" value="" />
                    <input type="submit" name="search-submit" value="Go" />
                </form>
                <div id="head-info">
                    <h2>Victoria and Albert Museum</h2>
                    <h3>The world&rsquo;s leading Museum of Art and Design</h3>
                    <h4>Opening times</h4>
                    <p>10.00 to 17.45 Everyday<br />10.00 to 22.00 Fridays</p>
                </div>
            </div>
            <div id="landing">
                <?php if($layout==1){ ?>
                <h1><?php draw_page_title(); ?></h1>
                <?php } ?>
            </div>
        </div>
        
        <div id="page">
        
            <div id="content" class="row">
                <?php if($layout==3) draw_content_area(3); ?>
                <div class="col<?php if($layout==2 || $layout==3){ ?> two-thrds-w<?php } ?>"><?php draw_content_area(); ?></div>
                <?php if($layout==2 || $layout==3){ ?>
                <div class="col thrd-w edge-l"><?php draw_content_area(2); ?></div>
                <?php } ?>
            </div>
            
            <div class="nav" id="header-nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li class="tab">
                        <a class="many" href="#">What's in the V&amp;A</a>
                        <div class="subnav">
                            <div class="pane">
                                <h6>Subject</h6>
                                <ul>
                                    <li><a href="?p=1">T1</a></li>
                                    <li><a href="?p=2">T2</a></li>
                                    <li><a href="?p=3">T6 Lightbox</a></li>
                                    <li><a href="?p=4">T9 Conservation</a></li>
                                    <li><a href="#">Artists &amp; Designers</a></li>
                                    <li><a href="#">Books</a></li>
                                    <li><a href="#">Ceramics</a></li>
                                    <li><a href="#">China</a></li>
                                    <li><a href="#">Glass</a></li>
                                    <li><a href="#">India</a></li>                        
                                    <li><a href="#">Metalwork</a></li>
                                    <li><a href="#">South East Asia</a></li>
                                    <li><a href="#">Theatre &amp; Performance</a></li>
                                </ul>
                                <div class="more">
                                    <a class="light" href="#">Search the collections</a>
                                    <a href="#">More</a>
                                </div>
                            </div>
                            <div class="pane">
                                <h6>Period &amp; Style</h6>
                                <ul>
                                    <li><a href="#">Art</a></li>
                                    <li><a href="#">Deco</a></li>
                                    <li><a href="#">Edwardian</a></li>
                                    <li><a href="#">Renaissance</a></li>
                                    <li><a href="#">Art Deco</a></li>
                                    <li><a href="#">Art Deco</a></li>        
                                </ul>
                                <div class="more">
                                    <a href="#">More</a>
                                </div>
                            </div>
                            <div class="pane">
                                <h6>Today's Choice</h6>
                                <ul>
                                    <li><a href="#">Julia Margaret Cameron</a></li>
                                    <li><a href="#">Wedding dresses</a></li>
                                    <li><a href="#">Christine Keeler chair</a></li>
                                    <li><a href="#">Renaissance</a></li>
                                    <li><a href="#">Jainism</a></li>        
                                </ul>
                                <div class="more">
                                    <a href="#">More</a>
                                </div>
                            </div>
                            <div class="pane">
                                <h6>Activities</h6>
                                <ul>
                                    <li><a href="#">Friday Lates</a></li>
                                    <li><a href="#">Fashion in Motion</a></li>
                                    <li><a href="#">Lectures &amp; Talks</a></li>
                                    <li><a href="#">Courses &amp; Conferences</a></li>
                                    <li><a href="#">Backpacks</a></li>    
                                    <li><a href="#">Artist Residencies</a></li>        
                                </ul>
                                <div class="more">
                                    <a href="#">More</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="tab">
                        <a class="many" href="#">Visit us</a>
                        <div class="subnav">
                            <div class="pane">
                                <h6>Plan your visit</h6>
                                <ul>
                                    <li><a href="#">Opening times</a></li>
                                    <li><a href="#">Getting here</a></li>
                                    <li><a href="#">Museum map</a></li>
                                    <li><a href="#">Galleries</a></li>
                                    <li><a href="#">Access and facilities</a></li>
                                    <li><a href="#">Group &amp; school visits</a></li>
                                    <li><a href="#">Take a tour</a></li>
                                    <li><a href="#">Visiting with families</a></li>
                                    <li><a href="#">Maharaja Exhibition</a></li>
                                    <li><a href="#">Decode Exhibition</a></li>                    
                                </ul>
                            </div>
                            <div class="pane">
                                <h6>More to do</h6>
                                <ul>
                                    <li><a href="#">National Art Library</a></li>
                                    <li><a href="#">Museum of Childhood</a></li>
                                    <li><a href="#">Corporate Events</a></li>
                                    <li><a href="#">Sackler Centre</a></li>
                                    <li><a href="#">Study Rooms</a></li>        
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">V&amp;A Channel</a></li>
                    <li><a href="#">Learning</a></li>
                    <li><a href="#">What's on</a></li>
                    <li><a href="#">V&amp;A online shop</a></li>
                </ul>
                <ul id="login-links">
                    <li id="login"><a href="/users/user">Your profile</a></li>
                </ul>
            </div>

            
            <div class="footer">
                <div class="nav row subnav" id="footer-nav">
                    <div class="pane">
                        <h6>Visit Us</h6>
                        <ul>
                            <li><a href="#">Opening times</a></li>
                            <li><a href="#">Getting Here</a></li>
                            <li><a href="#">Booking &amp; tickets</a></li>
                            <li><a href="#">Facilities &amp; Access</a></li>
                            <li><a href="#">Gallery Closures</a></li>
                        </ul>
                    </div>
                    <div class="pane">
                        <h6>Exhibitions</h6>
                        <ul>
                            <li><a href="#">Opening times</a></li>
                            <li><a href="#">Getting Here</a></li>
                            <li><a href="#">Booking &amp; tickets</a></li>
                            <li><a href="#">Facilities &amp; Access</a></li>
                            <li><a href="#">Gallery Closures</a></li>
                        </ul>
                    </div>
                    <div class="pane">
                        <h6>Resources</h6>
                        <ul>
                            <li><a href="#">Opening times</a></li>
                            <li><a href="#">Getting Here</a></li>
                            <li><a href="#">Booking &amp; tickets</a></li>
                            <li><a href="#">Facilities &amp; Access</a></li>
                            <li><a href="#">Gallery Closures</a></li>
                        </ul>
                    </div>
                    <div class="pane">
                        <h6>V&amp;A Elsewhere</h6>
                        <ul>
                            <li><a href="#">Opening times</a></li>
                            <li><a href="#">Getting Here</a></li>
                            <li><a href="#">Booking &amp; tickets</a></li>
                            <li><a href="#">Facilities &amp; Access</a></li>
                            <li><a href="#">Gallery Closures</a></li>
                        </ul>
                    </div>
                    <div class="pane">
                        <h6>About the V&amp;A</h6>
                        <ul>
                            <li><a href="#">Opening times</a></li>
                            <li><a href="#">Getting Here</a></li>
                            <li><a href="#">Booking &amp; tickets</a></li>
                            <li><a href="#">Facilities &amp; Access</a></li>
                            <li><a href="#">Gallery Closures</a></li>
                        </ul>
                    </div>
                    <a href="#" class="light">More</a>
                </div>
                <div class="row more">
                    <a class="light search" href="#">Search the Collection</a>
                    <a class="light log-in" href="/">Register for our E-newsletter</a>
                </div>
                <div class="row" id="footer">
                    <ul class="flags">
                        <li><a href="#" title="Chinese"><img alt="Chinese" src="css/vam/img/china.gif" /></a></li>
                        <li><a href="#" title="French"><img alt="French" src="css/vam/img/france.gif" /></a></li>
                        <li><a href="#" title="German"><img alt="German" src="css/vam/img/germany.gif" /></a></li>
                        <li><a href="#" title="Italian"><img alt="Italian" src="css/vam/img/italy.gif" /></a></li>
                        <li><a href="#" title="Japanese"><img alt="Japanese" src="css/vam/img/japan.gif" /></a></li>
                        <li><a href="#" title="Polish"><img alt="Polish" src="css/vam/img/poland.gif" /></a></li>
                        <li><a href="#" title="Russian"><img alt="Russian" src="css/vam/img/russia.gif" /></a></li>
                        <li><a href="#" title="Spanish"><img alt="Spanish" src="css/vam/img/spain.gif" /></a></li>
                    </ul>
                    <ul id="foot-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a class="light" href="#">A-Z Listing</a></li>
                    </ul>
                </div>
                <div class="row" id="my-nav">
                    <a class="go" href="#">My Album</a>
                </div>
            </div>
        
        </div>
        
    </div>

</body>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/vam/jquery.tools.overlay.js"></script>
<script type="text/javascript" src="js/vam/jquery.jcarousel.min.js"></script>
<script type="text/javascript" src="js/vam/jquery.cookie.min.js"></script>
<script type="text/javascript" src="js/vam/jquery.hooks.js"></script>
<script type="text/javascript" src="js/vam/html5media/html5media.min.js"></script>
<script type="text/javascript" src="js/vam/global.js"></script>
<!--[if lt IE 9]><script type="text/javascript" src="js/vam/lt_ie9.jquery.hooks.js"></script><![endif]-->
</html>

