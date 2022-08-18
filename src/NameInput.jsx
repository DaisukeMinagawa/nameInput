import React, { useState } from 'react'

const NameInput = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        if (e.target.value == 'aa') {
            setName('EasterEgg');
        } else { setName(e.target.value) }

    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>こんにちは、{name}さん</p>
        </div>
    )
}

export default NameInput