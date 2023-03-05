import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {
    const [state, setState] = useState("")
    const handleClick = (e) => {
        setState(state.concat(e.target.innerText))
        // console.log((e.target.innerText))
    }
    
    const clear = () => {
        setState('')
    }

    const calculate = () => {
        setState(eval(state).toString())
    }

  return (
    <div className='calculator'>
        <input type="text" id='input_box' value={state}/>
        <table>
            <tr>
                <td onClick={clear} colSpan={2} style={{backgroundColor:'rgb(172, 57, 57)'}}>AC</td>
                <td onClick={handleClick}>/</td>
                <td onClick={handleClick}>x</td>
            </tr>
            <tr>
                <td onClick={handleClick}>7</td>
                <td onClick={handleClick}>8</td>
                <td onClick={handleClick}>9</td>
                <td onClick={handleClick}>-</td>
            </tr>
            <tr>
                <td onClick={handleClick}>4</td>
                <td onClick={handleClick}>5</td>
                <td onClick={handleClick}>6</td>
                <td onClick={handleClick}>+</td>
            </tr>
            <tr>
                <td onClick={handleClick}>1</td>
                <td onClick={handleClick}>2</td>
                <td onClick={handleClick}>3</td>
                <td onClick={calculate} rowSpan={2} style={{backgroundColor:'rgb(0, 68, 102)'}}>=</td>
            </tr>
            <tr>
                <td onClick={handleClick} colSpan={2}>0</td>
                <td onClick={handleClick}>.</td>
            </tr>
        </table>
    </div>
  )
}

export default Calculator