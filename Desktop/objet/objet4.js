books=[{titre:"hello",auteur:"me",lu:true} , 
       {titre:"hi",auteur:"u",lu:false },
       {titre:"salam",auteur:"she",lu:true}

  ]
 function findBook(title){
    
return books.find(book=>book.titre===title

)
  }
  const book1=findBook("hoo");
  console.log(book1);
  let tab=[];
  for(let book of books){
    if (book.lu===false){
        tab.push(book);
    }
  }
  console.log(tab);
  