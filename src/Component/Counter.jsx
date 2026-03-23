import React, { useState } from 'react';

function Counter() {
    const [count] = useState(0);

    return (
        <div>
            <h1>Counter - {count}</h1>
            <button >ADD</button>

        </div>
    );
}

export default Counter;