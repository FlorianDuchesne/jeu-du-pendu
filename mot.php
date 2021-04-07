<?php

require_once('connect.php');

// echo "test";
$json = file_get_contents('php://input');
$data = json_decode($json);

$theme = htmlentities($data->theme);
$difficultyMot = htmlentities($data->difficultyMot);

// prepare
$req = $pdo->prepare('SELECT m.nom FROM mots m, difficulte d, `thème` t WHERE m.id_theme = t.id AND m.id_difficulte = d.id AND d.nom = :difficulty AND t.nom = :theme');


// bindParam
$req->bindParam("difficulty", $difficultyMot);
$req->bindParam("theme", $theme);

// execute
$req->execute();
$result = $req->fetch();

$data = $result["nom"];
// var_dump($data);
echo json_encode($data);

// var_dump($result);
// var_dump($theme);
// var_dump($difficultyMot);
// var_dump($data);
// var_dump($data->theme);
// var_dump($data->difficultyMot);