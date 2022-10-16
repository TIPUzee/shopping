<?php

header("Access-Control-Allow-Origin: *");


echo json_encode(array(
  array(
    'title' => "Computer & Accessories",
    'header' => "Shop Computers & Accessories",
    'src' => "./img/computer.jpg"
  ),
  array(
    'title' => "Cosmetics.jpg",
    'header' => "Discover our Beauty selection",
    'src' => "./img/cosmetics.jpg"
  ),
  array(
    'title' => "Fashion",
    'header' => "Get into Fashion Industry",
    'src' => "./img/fashion.jpg"
  )
));
