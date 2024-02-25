<?php

session_start();
$signs = ['+', '-', '*'];

if ($_SESSION['new_captcha']) {
    $stmt = rand(0, 9) . ' ' . $signs[rand(0, 2)] . ' ' . rand(0, 9);
    $result = eval("return $stmt;");
    $_SESSION['stmt'] = $stmt;
    $_SESSION['result'] = $result;

    $dir = "fonts/";

    $image = imagecreatetruecolor(200, 60);
    $color = imagecolorallocate($image, 200, 100, 90);
    $white = imagecolorallocate($image, 212, 144, 187);

    imagefilledrectangle($image, 0, 0, 399, 99, $white);

    $font = $dir . "verdana.ttf";
    $font_size = 30;

    imagettftext($image, $font_size, 0, 45, 40, $color, $font, $_SESSION['stmt']);

    $imagePath = 'image.png';
    imagepng($image, $imagePath);
}

header("Content-type: image/png");
readfile('image.png');
