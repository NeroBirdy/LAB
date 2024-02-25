<?php
session_start();

while ($result = mysqli_fetch_assoc($stmt)) {
    $user = $result['user'];
    $comment = $result['comment'];
    $id = $result['id'];
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
        <?php
        if (isset($_SESSION['user'])) {
        ?>
            <div class="change">
                <?php
                if ($_SESSION['user']['login'] === $user or $_SESSION['user']['login'] === "BirdyNero") {
                ?>
                    <button class="edit" id="<?php echo $id ?>"></button>
                    <form action="delete.php" method="post">
                        <input type="hidden" name="id" value="<?php echo $id ?>">
                        <button class="delete" type="submit"></button>
                    </form>
                <?php
                }
                ?>
            </div>
        <?php
        }
        ?>
    </div>
<?php
}
?>