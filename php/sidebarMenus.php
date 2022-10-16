<?php

header("Access-Control-Allow-Origin: *");



$data = array();

$menu = array(
  "Digital Content & Devices" => array(
    "Amazon Music" => array(
      "Stream Music" => array(
        "Amazon Music Unlimited" => "",
        "Free Streaming Music" => "",
        "Podcasts" => "",
        "Play Music" => "",
        "Open Web Player" => "",
        "Download the app" => ""
      )
    ),
    "Kindle E-reader & Books" => array(
      "Kindle E-Readers" => array(
        "All-new Kindle Kids" => "",
        "All-new Kindle" => "",
        "Kindle Paperwhite" => "",
        "Kindle Oasis" => "",
        "Introducing Kindle Scribe" => "",
        "Accessories" => "",
        "See all Kindle E-Readers" => ""
      ),
      "Kindle Store" => array(
        "Kindle Books" => "",
        "Kindle Unlimited" => "",
        "Prime Reading" => "",
        "Kindle Vella" => ""
      ),
      "Apps & Resources" => array(
        "Free Kindle Reading Apps" => "",
        "Kindle Could Reader" => "",
        "Manage Your Content and Devices" => ""
      )
    ),
    "Amazon Appstore" => array(
      "Amazon Appstore" => array(
        "All Apps and Games" => "",
        "Games" => "",
        "Amazon Coins" => "",
        "Download Amazon Appstore" => "",
        "Amazon Apps" => "",
        "Your Apps and Subscriptions" => ""
      )
    )
  ),
  "Shop By Department" => array(
    "Electronics" => array(
      "Electronics" => array(
        "Accessories & Supplies" => "",
        "Camera & Photo" => "",
        "Car & Vehical Electronics" => "",
        "Cell Phones & Accessories" => "",
        "Computers & Accessories" => "",
        "GPS & Navigation" => "",
        "Handphones" => "",
        "Home Audio" => "",
        "Office Electronics" => "",
        "Portable Audio & Video" => "",
        "Security & Surveillance" => "",
        "Service Plans" => "",
        "Television & Video" => "",
        "Video Game Console & Accessories" => "",
        "Video Projectors" => "",
        "Wearable Technology" => "",
        "eBooks Readers & Accessories" => ""
      )
    ),
    "Computers" => array(
      "Computers" => array(
        "Computer Accessories & Peripherals" => "",
        "Computer Components" => "",
        "Computers & Tablets" => "",
        "Data Storage" => "",
        "External Components" => "",
        "Laptop Accessories" => "",
        "Monitors" => "",
        "Networking Products" => "",
        "Power Strips & Surge Protectors" => "",
        "Printers" => "",
        "Scanners" => "",
        "Servers" => "",
        "Tablet Accessories" => "",
        "Tablet Replacement Parts" => "",
        "Warrantles & Services" => ""
      )
    ),
    "Smart Home" => array(
      "Smart Home" => array(
        "Amazon Smart Home" => "",
        "Smart Home Lighting" => "",
        "Smart Locks and Entry" => "",
        "Security Cameras and Systems" => "",
        "Plugs and Outlets" => "",
        "New Smart Devices" => "",
        "Heading and Cooling" => "",
        "Detectors and Sensors" => "",
        "Home Entertainment" => "",
        "Pet" => "",
        "Voice Assistants Hubs" => "",
        "Kitchen" => "",
        "Vacuums and Mops" => "",
        "Lawn and Garden" => "",
        "WiFi and Networking" => "",
        "Other Solutions" => ""
      )
    ),
    "Arts & Crafts" => array(
      "Arts & Crafts" => array(
        "Painting, Drawing & Art Supplies" => "",
        "Beading & Jewelry Making" => "",
        "Crafting" => "",
        "Febric" => "",
        "Febric Decorating" => "",
        "Knitting & Crochet" => "",
        "Needlework" => "",
        "Organization, Strage & Transport" => "",
        "Printmaking" => "",
        "Scrapbooking & Stamping" => "",
        "Sewing" => "",
        "Party Decorations & Supplies" => "",
        "Gift Wrapping Supplies" => ""
      )
    ),
    "Automotive" => array(
      "Automotive" => array(
        "Car Care" => "",
        "Car Electronics & Accessories" => "",
        "Exterior Accessories" => "",
        "Interior Accessories" => "",
        "Lights & Lighting Accessories" => "",
        "Motocycle & Powersports" => "",
        "Oils & Fluids" => "",
        "Paint & Paint Supplies" => "",
        "Performance Parts & Accessories" => "",
        "Replacement Parts" => "",
        "RV Parts & Accessories" => "",
        "Tires & Wheels" => "",
        "Tools & Equipement" => "",
        "Automotive Enthusiast Merchandise" => "",
        "Heavy Duty & Commercial Vehicle Equipment" => ""
      )
    ),
    "Baby" => array(
      "Baby" => array(
        "Activity & Entertainment" => "",
        "Apparel & Accessories" => "",
        "Baby & Toddler Toys" => "",
        "Baby Care" => "",
        "Baby Stationary" => "",
        "Car Seats & Accessories" => "",
        "Diapering" => "",
        "Feeding" => "",
        "Gifts" => "",
        "Nursery" => "",
        "Potty Training" => "",
        "Pregnany & Maternity" => "",
        "Safety" => "",
        "Strollers & Accessories" => "",
        "Travel Gear" => ""
      )
    ),
    "Beauty and Personal Care" => array(
      "Beauty and Personal Care" => array(
        "Makeup" => "",
        "Skin Care" => "",
        "Hair Care" => "",
        "Fregrance" => "",
        "Foot, Hand & Nall Care" => "",
        "Tools & Accessories" => "",
        "Shave & Hair Removal" => "",
        "Personal Care" => "",
        "Oral Care" => ""
      )
    ),
    "Women's Fashion" => array(
      "Women's Fashion" => array(
        "Clothing" => "",
        "Shoes" => "",
        "Jewelry" => "",
        "Watches" => "",
        "Handbags" => "",
        "Accessories" => "",
        "Men's Fashion" => "",
        "Girl's Fashion" => "",
        "Boy's Fashion" => ""
      )
    ),
    "Men's Fashion" => array(
      "Men's Fashion" => array(
        "Clothing" => "",
        "Shoes" => "",
        "Watches" => "",
        "Accessories" => "",
        "Women's Fashion" => "",
        "Girl's Fashion" => "",
        "Boy's Fashion" => ""
      )
    ),
    "Boy's Fashion" => array(
      "Boy's Fashion" => array(
        "Clothing" => "",
        "Shoes" => "",
        "Jewelry" => "",
        "Watches" => "",
        "Accessories" => "",
        "Schools Uniform" => "",
        "Women's Fashion" => "",
        "Men's Fashion" => "",
        "Girl's Fashion" => ""
      )
    )
  ),
  "Programs & Features" => array(
    "Gift Cards" => array(
      "Give A Gift Card" => array(
        "All gift cards" => "",
        "eGift cards" => "",
        "Gift cards by mail" => "",
        "Specialty gift cards" => "",
        "Amazon Cash" => "",
        "For Businesses" => "",
        "Manage Your Gift Card" => ""
      ),
      "Manage Your Gift Card" => array(
        "Radeem a gift card" => "",
        "View Your Balance" => "",
        "Reload Your Balance" => ""
      )
    ),
    "#FoundItOnAmazon" => "",
    "Amazon Live" => array(
      "Amazon Live" => array(
        "Live" => "",
        "Recently Live" => ""
      )
    ),
    "International Shopping" => array(
      "International Shopping" => array(
        "Where we ship" => "",
        "Visit Amazon Global" => ""
      )
    )
  )
);

echo json_encode($menu);
