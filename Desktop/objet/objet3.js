api={
    id: 101, details: {
        name: "Laptop",
         price: 800,
          color: "silver"
    }, stock: 20
};
const{details:{name,price}}=api;
console.log(name);
console.log(price);
const updatedProduct = {...api,
    details:{
        ...api.details,
        price:750
    }


};
const newinfo={
    discount:true,
    rating:4.5,
};

const tout={
    
    ...updatedProduct,
    ...newinfo,
}
console.log(tout);


