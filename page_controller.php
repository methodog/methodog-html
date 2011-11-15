<?php
$p = !empty($_GET['p']) ? (int) $_GET['p'] : 1;

$pages = array(
     1 => array('title'=>'T1', 'layout'=>'1', 'content_area'=>'1-col_content.html')
    ,2 => array('title'=>'T2', 'layout'=>'2', 'content_area'=>'2-col_content.html', 'content_area_2'=>'2-col_sidebar.html')
    ,3 => array('title'=>'T6', 'layout'=>'1', 'content_area'=>'t6-lightbox_content.html')
    ,4 => array('title'=>'T9', 'layout'=>'3', 'theme'=>'forest', 'content_area'=>'t9_content.html', 'content_area_2'=>'t9_sidebar.html', 'content_area_3'=>'t9_topbar.html')
);

$layout = get_page_layout();
$theme = get_page_theme();

function get_page_layout() {
    global $pages, $p;
    return $pages[$p]['layout'];
}

function get_page_theme() {
    global $pages, $p;
    return (!empty($pages[$p]['theme']))? $pages[$p]['theme'] : false;
}

function draw_page_title() {
    global $pages, $p;
    echo $pages[$p]['title'];
}

function draw_content_area($n=null) {
    global $pages, $p;
    $content_file = 'content_area'.(empty($n)?'':'_'.$n);
    if (empty($pages[$p][$content_file])) return false;
    if ($page_area = get_include_contents('views/'.$pages[$p][$content_file])) {
        echo $page_area;
    }
}

function get_include_contents($filename) {
    if (is_file($filename)) {
      ob_start();
      include $filename;
      $contents = ob_get_contents();
      ob_end_clean();
      return $contents;
    }
    return false;
}

?>