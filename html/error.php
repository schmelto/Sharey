<!DOCTYPE html>
<html>
<!--Initial Error Page-->
<!--not implemented yet-->

<head>
    <?php
        include('basicsiteelements/header.php');
    ?>
</head>

<body>
    <?php
        include('modal/modalLogin.php');
    ?>
    <?php
        include('basicsiteelements/navigationpages.php');
    ?>

    <div class="content">
        <!-- Div content for padding-top (header) -->
        <div class="container">
            <h1>Da ist wohl etwas schief gegangen...</h1>
            <p>Bitte versuche es erneut.</p>
            <?php
                if(isset($_GET['errormessage']) && !empty($_GET['errormessage'])){
                    echo '<p>'.$_GET['errormessage'].'</p>';
                }
            ?>
        </div>
    </div>
    <?php
        include('basicsiteelements/scripts.php');
    ?>
</body>

</html>