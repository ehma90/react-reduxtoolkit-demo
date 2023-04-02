import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ordered, reStocked} from "./cakeSlice"


const CakeView = () => {
  const numOfCake = useSelector((state) =>  state.cake.numOfCake)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes : {numOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(reStocked(5))}>Restock Cake</button>
    </div>
  );
}

export default CakeView;
