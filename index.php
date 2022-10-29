<?php
$obj = [
    [
        'name' => 'Sergey',
        'age' => 18
    ],

    [
        'name' => 'Kirill',
        'age' => 90
    ]
];

if (isset($_GET['name'])) {
  $name = $_GET['name'];

  $message = "Не найдено";

  foreach ($obj as $obj_element) {
    if ($name == $obj_element['name']) {
      $message = $name;
    }
  }

  echo $message;
}


?>
