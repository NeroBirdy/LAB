<?php

$id = $_POST['id'];

if (!empty($id)) {
    $link = mysqli_connect("127.0.0.1","root","","php5");
    $query = "DELETE FROM comments WHERE id = $id";
    mysqli_query($link,$query);
    mysqli_close($link);
}


header("Location: index.php");

?>