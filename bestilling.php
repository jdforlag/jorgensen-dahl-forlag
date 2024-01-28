<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $kaares_vgs = $_POST["kaares-vgs"];
    $kaares_ungdomsskolen = $_POST["kaares-ungdomsskolen"];
    $to = "best@jdforlag.no";
    $subject = "Ny bestilling fra nettstedet";
    $body = "Bestilling av bøker:\nKaares kokebok for vgs: $kaares_vgs stk\nKaares kokebok for ungdomsskolen: $kaares_ungdomsskolen stk";
    // Send e-post
    mail($to, $subject, $body);
}
?>
