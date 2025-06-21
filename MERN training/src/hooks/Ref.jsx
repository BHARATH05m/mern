import React, { useEffect,useRef,useState } from 'react'

const Ref = () => {
    const [count, setCount] = useState(0);
    const Value = useRef(0);
    useEffect(()=>{
        setTimeout(()=>{
            Value.current = Value.current + 1;
        },2000)
    })
  return (
    <div>Ref
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>+</button>
        <h1>{Value.current}</h1>
    </div>

  )
}
export default Ref