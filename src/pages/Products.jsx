import React from 'react'

const Products = ({product}) => {
  return (
    <div  style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"30%"}}>
       <div>
        <img style={{width:"150px"}} src={product.image} alt={product.title}/>
        <div>
            <h3 style={{width:"120px"}}>{product.title}</h3>
            <p style={{width:"120px"}}>Price : {product.price}</p>
            <p style={{width:"120px"}}>Category : {product.category}</p>
            
            
        </div>
       </div>
    </div>
  )
}

export default Products
