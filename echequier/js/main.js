// //On déclare une variable qui stock le plateau
// var plateau = "";
//
// //On lance une 1er boucle pour créer les lignes
// for (var i = 1; i <= 8; i++) {
//  //A chaque ligne, on lance une boucle pour créer les case
//  for (var j = 1; j <= 16; j++) {
//    //Si la somme de la ligne et de la case est paire
//    //On affiche un blanc
//    if ( (i + j) % 2 === 0) {
//      plateau = plateau + " ";
//    }
//    //Sinon on affiche un noir
//    else {
//      plateau = plateau + "#";
//    }
//  }
//  //Juste avant de passer à la ligne suivante
//  //On ajoute un retour à la ligne
//  plateau = plateau + "\n";
// }
//
// //On affiche le plateau
// console.log(plateau);
