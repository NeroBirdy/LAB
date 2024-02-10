<?php
session_start();
$link = mysqli_connect("127.0.0.1","root","","php4");
$test = mysqli_query($link,"SELECT * FROM images");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"/>
</head>
<body>
    <header>
        <a class = "header" href="index.php">Главная</a>
        <a class = "header" href="contact.html">Контакты</a>
        <a class = "header" href="gallary.php">Галерея</a>
    </header>
    <div class = "gal_content">
        <div class = "gal_main">
            <?php
                while($result = mysqli_fetch_assoc($test))
                {
                    $path = $result['path'];
                    ?>
                    <a data-fancybox="images" href=<?php echo $path ?> > <img src=<?php echo $path ?> class = "gal_pic"/></a>
                    <?php
                }  
            ?>
        </div>
    </div>
    <form action="upload.php" method = "post" enctype="multipart/form-data">
        <input type="file" name = "image">
        <button type = "submit">Отправить</button>
    </form>
    <footer>
        <div class = "footer_area">
            <img src="pictures/back/stik.png" alt="" class = "stik">
        </div>
        <div class = "footer_info">
            <p>Зорин Владислав</p>
            <p>+7 (950) 522-89-97</p>
            <p>31231@gmail.com</p>
        </div>
    </footer>
</body>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
</html> 
