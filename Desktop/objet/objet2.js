let stock={
    pomme:5,bananes:12,oranges:8
}
let keys=Object.keys(stock)
console.log(keys);
let values=Object.values(stock)
console.log(values);
let nouveaustoc={};
for(let fruit in stock){
    //  kaythsb hakka :8---8*10/100 =0.8   |prix augmenter --8+0.8=8.8
  nouveaustoc[fruit]=stock[fruit]*1.1;  
}
console.log(nouveaustoc);

