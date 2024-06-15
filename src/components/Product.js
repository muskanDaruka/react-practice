import { Laptop } from '@mui/icons-material'
import React from 'react'

function Product() {
    // const products = ["Laptop", "Tablet", "Mobile", "Smart-watch"]
    // const productList = products.map((product) => <h3>{product}</h3>);
    // return <div>{productList}</div>;
//   return (
//     <div>
//       {products.map((product)=>(
//         <h3>{product}</h3>
//       ))}
//     </div>
//   )

// const products = [
//     {id: 1, name: 'Laptop', price: 300},
//     {id: 2, name: 'Tablet', price: 100},
//     {id: 3, name: 'Mobile', price: 200},
//     {id: 4, name: 'Laptop', price: 500},
//     {id: 5, name: 'Smart-watch', price: 200}
// ]
// const productList = products.map((product) => 
//     <h3 key={product.id}>
//         {product.name} : ${product.price};
//     </h3>);
//     return <div>{productList}</div>;
// 
const fruits = ["Apple","Banana", "Orange"]
const fruitList = fruits.map((fruit, index) => <h3 key={index}>{fruit} </h3>)
return <div>{fruitList}</div>
}
export default Product  
