<html><body>
    <?php
    $e = '';
    if($_POST['name']=='luca') $e .= '<li>The name <em>luca</em> is already taken.</li>';
    if($_POST['pass']['pass1']!=$_POST['pass']['pass2']) $e .= '<li>The specified passwords do not match.</li>';
    if(!preg_match('/.+@.+\..+$/i', $_POST['mail'])) $e .= '<li>The e-mail address <em>'.$_POST['mail'].'</em> is not valid.</li>';
    if($e!=''){
    ?>
    <div class="messages error">
        <ul>
        <?php echo $e; ?>
        </ul>
    </div>
    <?php 
    } else setcookie('CHOCOLATECHIP', 'CHOCOLATECHIP', time()+5, '/');
    ?>
</body></html>
