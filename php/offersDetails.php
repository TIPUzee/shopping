<?php

header("Access-Control-Allow-Origin: *");



echo json_encode(array(
  "Gaming Accessories" => array(
    "Headsets" => array(
      "img" => "headset_bg_white.jpg"
    ),
    "Chairs" => array(
      "img" => "chair_bg_white.jpg"
    ),
    "Keyboards" => array(
      "img" => "keyboard_bg_white.jpg"
    ),
    "Computer Mouse" => array(
      "img" => "computer_mouse_bg_white.jpg"
    )
  )
));
