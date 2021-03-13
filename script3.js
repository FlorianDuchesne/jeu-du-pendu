// marche pas du tout…
// la victoire ou défaite ne se déclenche pas
// la mauvaise pioche se déclenche systématiquement
// repartir de la version précédente, qui est moins déglinguée ?…

var motCache = "BISOUNOURS";
var tabMot = motCache.split("");
var clavier = document.querySelector("#clavier").children;

// ici, on crée autant de td en inner html à l'intérieur de #mot,
//qu'il y a d'éléments dans le tableau tabMot
for (let i = 0; i < tabMot.length; i++) {
  document.querySelector("#mot").innerHTML += "<td>" + tabMot[i] + "</td>";
}

var hard = false;
var pointsDefaite = 0;
var pointsVictoire = 0;
var nbVictoires = 0;
var nbDefaites = 0;
let pendu = 0;
let hardernb = 0;

play();

function victoire() {
  // on cache le clavier entièrement
  document.querySelector("#clavier").classList.add("hidden");
  // On révèle le "gagné"
  document.querySelector("#fin").lastElementChild.classList.remove("hidden");
  // on révèle le "recommencer"
  document.querySelector("#fin").firstElementChild.classList.remove("hidden");
  // on augmente le nombre de victoires au score
  nbVictoires++;
}

function defaite() {
  // on cache le clavier
  document.querySelector("#clavier").classList.add("hidden");
  // on révèle "recommencer"
  document.querySelector("#fin").lastElementChild.classList.remove("hidden");
  // on révèle "perdu"
  document.querySelector("#fin").children[1].classList.remove("hidden");
  // on augmente le nombre de défaites
  nbDefaites++;
}

function bonnePioche(i) {
  // on incrémente les "points" de victoire
  pointsVictoire++;
  // on fait apparaître la ou les lettres identifiées
  document.querySelector("#mot").children[i].classList.add("apparent");
  // si les points de victoire sont égaux à la longueur du tableau mot,
  // alors on a gagné
  if (pointsVictoire === tabMot.length) {
    //on active la fonction victoire
    victoire();
  }
}

function mauvaisePioche() {
  // on incrément la défaite
  pointsDefaite++;
  // on définit la variable pendu comme la figure ayant pour position la valeur de "défaite"
  if (hard) {
    harder();
  } else {
    document
      .querySelector("#pendu")
      .children[pointsDefaite].classList.remove("hidden");
  }
  // si défaite est égale à 10
  if (pointsDefaite === 10) {
    // on appelle la fonction defaite
    defaite();
  }
}

function harder() {
  let harder = document.querySelectorAll(".harder");
  harder[hardernb].classList.remove("hidden");
  hardernb++;
  if (pointsDefaite === harder.length) {
    // on appelle la fonction defaite
    defaite();
  }
}

function play() {
  // lorsqu'on clique sur une touche du clavier…
  for (let j of clavier) {
    j.addEventListener("click", function () {
      // on la fait disparaître
      j.classList.add("noMore");
      // par défaut, on considère "mauvaise pioche"
      var trouve = false;
      console.log(trouve);
      // pour toute la longueur du mot à trouver, et pour chacune de ses lettres…
      for (let i = 0; i < tabMot.length; i++) {
        // si la touche du clavier correspond à une lettre du tableau…
        if (j.innerHTML === tabMot[i]) {
          // on active la fonction bonne pioche
          bonnePioche(i);
          trouve = true;
        }
      }
      // Si la pioche est mauvaise,
      if (!trouve) {
        // on appelle la fonction mauvaise pioche
        mauvaisePioche();
      }
    });
  }
}

document
  .querySelector("#slct")
  .lastElementChild.addEventListener("click", function () {
    hard = true;
  });

document
  .querySelector("#slct")
  .children[1].addEventListener("click", function () {
    hard = false;
  });

// lorsqu'on clique sur recommencer…
document
  .querySelector("#fin")
  .lastElementChild.addEventListener("click", function () {
    window.location.reload();
    // // on révèle à nouveau le clavier
    // document.querySelector("#clavier").classList.remove("hidden");
    // // pour chaque touche du clavier, on la révèle à nouveau
    // for (let j of clavier) {
    //   j.classList.remove("noMore");
    // }
    // // on définit l'ensemble des figures du pendu
    // let pendu = document.querySelector("#pendu").children;
    // // pour chacune d'entre elles,
    // for (let i of pendu) {
    //   // on la cache à nouveau
    //   i.classList.add("hidden");
    // }
    // // et on révèle la première
    // pendu[0].classList.remove("hidden");
    // // on définit dans une variable l'ensemble des "children" de #mot
    // let motStartagain = document.querySelector("#mot").children;
    // // pour chacun d'eau, on les cache à nouveau (les lettres, donc)
    // for (let i of motStartagain) {
    //   i.classList.remove("apparent");
    // }
    // // On cache le bouton recommencer
    // document.querySelector("#fin").lastElementChild.classList.add("hidden");
    // // Si on a perdu,
    // if (defaite === 10) {
    //   // on cache le "perdu" qui avait été révélé
    //   document.querySelector("#fin").children[1].classList.add("hidden");
    // } else {
    //   // sinon on cache "gagné"
    //   document.querySelector("#fin").firstElementChild.classList.add("hidden");
    // }
    // // on redéfinit les points de victoire et défaite sur zéro
    // pointsDefaite = 0;
    // pointsVictoire = 0;
    // // on révèle le score
    // document.querySelector("#score").classList.remove("hidden");
    // // le score correspond au nombre de défaites
    // document.querySelector("#score").children[0].innerHTML =
    //   "Defaites = " + nbDefaites;
    // // le score correspond au nombre de victoires
    // document.querySelector("#score").children[1].innerHTML =
    //   "Victoires = " + nbVictoires;
    // // on relance la fonction "play"
    // play();
  });
