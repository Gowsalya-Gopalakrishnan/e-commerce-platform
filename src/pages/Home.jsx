import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from './Products'
import { fetchProducts, removeProducts } from '../redux/actions/action'
import AddProducts from './AddProducts'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.reducer.data)
    const loading = useSelector(state=>state.reducer.loading)
    const error = useSelector(state=>state.reducer.error)

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {products.length>0 && products.map((product)=>{
        return(
            <div style={{width:'10px',height:"5%"}}>
                <AddProducts/>
                <Products key={product.id} product={product}/>
                <button onClick={()=>dispatch(removeProducts(product.id))}>Remove</button>
            </div>
        )
      })}
    </div>
  )
}

export default Home
