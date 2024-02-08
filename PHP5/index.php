<?php

$link = mysqli_connect("127.0.0.1", "root", "", "php5");
$query = "SELECT * FROM comments";
$stmt = mysqli_query($link, $query);
$monthes = ["December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <a class="header" href="main.html">Главная</a>
        <a class="header" href="contact.html">Контакты</a>
        <a class="header" href="gallary.html">Галерея</a>
    </header>
    <div class="content">
        <div class="main_m">
            <div class="text">
                <p>ДорАмы – так принято называть телесериалы из Юго-Восточной Азии, в первую очередь, – из Японии и Южной Кореи. Само слово "дорама" – это натурализованный вариант английского drama. Дорамы пользуются огромной любовью миллионов зрителей не только в странах Азии, но и во всем мире</p>
            </div>
            <div class="text">
                <p>Дорамы бывают различных жанров – от мелодраматических до комедийных или детективных</p>
            </div>
            <div class="text">
                <p>Среди отличительных черт дорам можно назвать повышенный эмоциональный фон действия, визуальную насыщенность каждого кадра</p>
            </div>
        </div>
    </div>
    <div class="comments_area">
        <div class="comments">
            <form action="load.php" method="post" class="form">
                <input type="text" name="user" placeholder="Пользователь">
                <input type="text" name="comment" placeholder="Комментарий">
                <button type="submit">Отправить</button>
            </form>
            <?php
            while ($result = mysqli_fetch_assoc($stmt)) {
                $user = $result['user'];
                $comment = $result['comment'];
                $timestamp = $result['date'];
                $pieces = explode(" ", $timestamp);
                $date = $pieces[0];
                $tmp = explode("-", $date);
                $stringMonth = $tmp[1];
                $stringDay = $tmp[2];
                $month = $monthes[intval($date[0])];
                $day = intval($stringDay);
                $trueDate = $day . " " . $month;
            ?>
                <div class="comment">
                    <p class="date"><?php echo $trueDate ?></p>
                    <div class="comment_info">
                        <p class="user"><?php echo $user ?>
                        <p><?php echo $comment ?></p>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
    <footer>
        <div class="upper">
            <div class="footer_area">
                <img src="pictures/back/stik.png" alt="" class="stik">
            </div>
            <div class="footer_info">
                <p>Зорин Владислав</p>
                <p>+7 (950) 522-89-97</p>
                <p>31231@gmail.com</p>
            </div>
        </div>
    </footer>
</body>

</html>