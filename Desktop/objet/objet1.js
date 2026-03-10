let user ={nom:"Tami",age:"20",passions:["lecture","theatre","dance"]}
user.id=1;
 delete user.age
 user.passions[1]="music"
 function affiche (){
console.log("Salut, je m'appelle"+" "+user.nom+" "+"et j'ai"+" "+ user.age +" "+"et j'ai"+" "+user.passions );
 }
affiche(user)