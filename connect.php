<?php
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'jeu_pendu';

$conn = 'mysql:host='. $host .';dbname='.$dbname;

// Create a PDO instance
$pdo = new PDO($conn, $user, $password);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);

// test bdd
// $nom = "mignon";


// $sql ='SELECT * FROM `thème` WHERE nom = :nom';
// $stmt = $pdo->prepare($sql);
// $stmt->execute(['nom' => $nom]); 
// $post = $stmt->fetch();

// echo "<p>".$post["nom"]."</p>";
// echo "<p>".$post["id"]."</p>";

// test bon : base de données bien connectée.
