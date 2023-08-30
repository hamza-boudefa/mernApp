import React, { useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/ProductsActions'

const HomePage = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getProducts())
  },[])
  const {products}=useSelector(state=>state.getProducts)
  console.log(products)
  return (
    <div>
    <NavigationBar/>
    <h1>Welcom to out store</h1>
    {/* <p> {products && products.productName} </p> */}
    {products && products.map((name)=> <><p>{name.productName}</p><p>{name.Qty}</p></> )}
    </div>
  )
}

export default HomePage