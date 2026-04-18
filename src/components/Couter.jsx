"use client"

import { useState } from "react";


const Couter = () => {
    const [count, setCount] = useState(0)
    console.log("couter value in counter component", count);
    
    return (
        <div>
            <h2 className='text-5xl'>Counter: {count}  </h2>
            <button
            onClick={() => setCount(count + 1) }
            className='border px-4 py-2 mt-2 rounded-2xl bg-amber-200 text-black'>Increment</button>
        </div>
    );
};

export default Couter;