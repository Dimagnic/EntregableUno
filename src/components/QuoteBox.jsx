import React from 'react';
import Color from '../Color.json'
import quotes from '../quotes.json'
import { useState } from 'react'
console.log(quotes)
const QuoteBox = () => {

    const random = Math.floor(Math.random() * quotes.length)
    let colorRandom = Math.floor(Math.random() * 16777215).toString(16);
    
    const [index, setIndex] = useState(random)
    const [color, setColor] = useState(colorRandom)


    //const index = 3
    const newRandom = Math.floor(Math.random() * quotes.length)
    let newColorRandom = Math.floor(Math.random() * 16777215).toString(16);
    const change = () => {
        setIndex(newRandom)
        setColor(newColorRandom)
    }
    
    return (
        <div className='Container' style={{ background: `#${color}` }}>

            <div className='Card'>
                <div className='Information'>
                    <i style={{ color: `#${color}` }} className=" quote2 fa-solid fa-quote-left"></i>
                    <p style={{ color: `#${color}` }}>{quotes[index].quote}</p>

                </div>
                <div className='container-author'>
                    <h2 style={{ color: `#${color}` }} className=''>{quotes[index].author}</h2>
                </div>
                <div className='Arrow-Information'>
                    <button style={{ background: `#${color}` }} onClick={change} className='button'><i className=" arrow fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

        </div>

    );
};

export default QuoteBox;