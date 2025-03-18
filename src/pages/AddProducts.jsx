import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../redux/actions/action'
import ProductItem from './ProductItem'


const AddProducts = () => {
    const[title,setTitle]=useState('')
    const dispatch = useDispatch()
    const inputData = useSelector(state=>state.reducer.data)

    const handleAddProducts=(e)=>{
        e.preventDefault()
        const final={
            id:Date.now(),
            inputData:title,
        }
        dispatch(addProducts(final))
        setTitle("")
    }
  return (
    <div>
      <form>
        <h2>Add New Products</h2>
        <input type='text'placeholder='Enter Title'value={title}onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={handleAddProducts} style={{width:"70px",height:"20%"}}>Add New Product</button>
        {inputData.length>0 && inputData.map((inputValue)=>{
            return(
                <div>
                    <ProductItem key={inputValue} inputValue={inputValue}/>
                </div>
            )
        })}
      </form>

    </div>
  )
}

export default AddProducts
