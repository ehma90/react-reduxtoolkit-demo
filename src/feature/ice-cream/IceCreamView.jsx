import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {ordered, reStocked} from "./iceCreamSlice"

const IceCreamView = () => {
  const [value, setValue] = React.useState(1);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCreams)
const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice-cream : {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Ordered Ice-cream</button>
      <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
      <button onClick={() => dispatch(reStocked(value))}>Restock ice-cream</button>
    </div>
  );
}

export default IceCreamView;
