import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Welcome to our counter App</h1>
            <hr />
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>-</button>
            <button onClick={() => {
                setCount(0)
            }}>reset</button>
            <button onClick={() => {
                console.log(count);
            }}>log</button>
            <button onClick={() => {
                let newEded = +prompt('yeni eded daxil edin: ')
                setCount(newEded)
            }}>special</button>
        </div>
    )
}

export default Counter;

