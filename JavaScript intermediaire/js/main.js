// Exercice2 : Condition d'age
// // var Age = prompt ("quel âge avez-vous ?");
// // if (Age <21)  {alert ("Vous n'etes pas autorisé à acceder au site indiquez votre  age reel") };
// //
// // if (Age  >=21) {alert("Accés autorisé ")};
// // if (Age %2 === 0) {alert("Votre âge est un chiffre pair") };

// Exercice nombre secret
// var secret= 25;
// var proposition ;
// while (proposition != secret) {
//   proposition = prompt("Devinez le nombre mystere pour gagner tout mon respect");
//   if (proposition < secret) {
//     alert("votre nombre est plus petit que le nombre mystere");
//
//   }
//   else if (proposition > secret ){
//     alert ("votre nombre est plus grand que le nombre mystere") ;
//   }
//   else  {
//     alert ("Felicitations vous avez trouvé le nombre mystere");
//   }
//
// }
// exercice boucle  1à 100
// for (var i = 1; i <=100; i++) {
//   console.log(i);
// }

// // exercice boucle 1 à 100 chiffre pair
// for (var i = 1; i <=100 ; i++) {
//   if (i %2 ===0  ) {
//     console.log(i)
//   }
// }

// Exercice fonction piscine

// function remplisssagePiscine(longueur,largeur, profondeur , debit){
//   var volume =longueur*largeur*profondeur;
//   var tempsRemplissage = volume/debit;
//   alert("votre piscine se remplira en " + Math.round(tempsRemplissage) + " minutes");
// }
// remplisssagePiscine(10,5,2,3 );
// remplisssagePiscine(50,8,5,6);



// // exercice  Nombre pair
//
// function estPair(totalPanier){
//   totalPanier = Math.round(totalPanier);
//   if (totalPanier %2 ===0) {
//     console.log(true);
//
//   } else {
//     console.log(false);
//
//   }
// }
// estPair(65.856);
