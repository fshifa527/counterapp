import React from 'react'
import { increment,reset,decrement } from '../redux/slice'
import {useDispatch,useSelector } from 'react-redux'


function CounterMain() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()


  return (
   <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
     <div className='border border-light w-50 p-5 rounded'>
       <h3 className='text-center'>Counter</h3>
       <div
        className='text-warning w-100 mt-3'>
        <h2  className='text-center'>{count}</h2>
       </div>
       <div className='d-flex justify-content-around mt-3'>
        <button className='btn btn-success' onClick={()=>{dispatch(increment())}}>Increase +</button>
        <button className='btn btn-info'onClick={()=>{dispatch(reset())}}>Reset</button>
        <button className='btn btn-danger'onClick={()=>{dispatch(decrement())}}>Decrease -</button>
       </div>
     </div>
   </div>
  )
}

export default CounterMain