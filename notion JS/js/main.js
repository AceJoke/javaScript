
// Boucle while = tant que en francais
// var userPassword = "monpassword";
// var userAnswer;
// while(userAnswer != userPassword) {
//    userAnswer = prompt("rentrez votre mot de passe");
//    if(userAnswer != userPassword) {
//      alert("Mot de passe incorrect rententez votre chance");
//    }
// }
// alert("Vous êtes connecté");


// // // boucle for = boucle la plus utilisé
// // for (var i = 2; i <= 10 ; i+=2) {
// //   console.log (i);
//
// }

// Tableau JS

// var userNames =["Jean", "Héléne", "Steven","Marie"];
// console.log("les utilisateurs du site sont ")
// for (var i = 0; i < userNames.length; i++) {
//     console.log(userNames[i]);
// }

// // Tableau JS complexe 
// //Tableau qui contient tous les utilisateurs
// var users = [
//  //Tableau utilisateur 0
//  [
//    "Dussart",
//    "Guillaume",
//    45,
//    false
//  ],
//  //Tableau utilisateur 1
//  [
//    "Jonsson",
//    "Olle",
//    24,
//    false
//  ],
//  //Tableau utilisateur 2
//  [
//    "Tchekov",
//    "Nathalia",
//    32,
//    true
//  ]
// ]
//
// console.log("Les utilisateurs sont : ")
// //Première boucle qui parcours users
// for (var i = 0; i < users.length; i++) {
//  //Deuxième boucle qui parcour chaque tableau utilisateur
//  for (var j = 0; j < users[i].length; j++) {
//    //Si on est au sexe de la personne
//    if (j === 3) {
//      //Si l'utilisateur est une femme
//      if (users[i][j] === true) {
//        console.log("Femme");
//      }
//      //Sinon c'est un homme
//      else {
//        console.log("Homme");
//      }
//    }
//    //Sinon on affiche la valeur de manière classique
//    else {
//      console.log(users[i][j]);
//    }
//  }
//  //Après avoir bouclé sur le tableau d'un utilisateur on ajoute une séparation visuelle
//  console.log("--------");
