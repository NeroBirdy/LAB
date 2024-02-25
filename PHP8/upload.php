<?php
if (!$_FILES['image']['error']) {
    $file = $_FILES['image'];
    $filename = $file['name'];
    $path_info = pathinfo($filename);
    $extention = $path_info['extension'];
    if ($extention !== "png" and $extention !== "bmp" and $extention !== "jpg" and $extention !== "jpeg") {
        die ("Неподходяещее расширение файла" . $extention);
    }

    move_uploaded_file($file['tmp_name'], 'pictures/gal/' . $filename);
    $filename = 'pictures/gal/' . $filename;
    $link = mysqli_connect("127.0.0.1", "root", "", "php4");
    if ($link === false) {
        die("Ошибка подключения" . mysqli_connect_error());
    }

    $query = "INSERT INTO images (path) VALUES (?)";

    $stmt = mysqli_prepare($link,$query);

    if ($stmt) {
        mysqli_stmt_bind_param($stmt, "s", $filename);
        mysqli_stmt_execute($stmt);
        if (mysqli_stmt_error($stmt)) {
            die ("Ошибка выполнения запроса: " . mysqli_stmt_error($stmt));
        }

        mysqli_stmt_close($stmt);
    } else {
        echo "Ошибка при подготовке запроса: " . mysqli_error($link);
    }

    mysqli_close($link);
}
else {
    echo "Ошибка загрузки файла";
}

header("Location: gallary.php");

?>