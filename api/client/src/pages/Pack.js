import React from "react";


const Pack = () => {
    const [count, setCount] = React.useState(0)
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count++)}>INcrement</button></>
    )
}

export default Pack