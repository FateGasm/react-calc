import './CalcButtons.css';
import { useState } from 'react';

const Calculator = () => {
    const [output, setoutput] = useState(10);
    function AC() {
        setoutput(0);
        console.log("AC clicked");
    }

    return ( 
        <div>
            <div className="CalcScreen">
                <h1 className="screenOutput">{output}</h1>
            </div>

            <div className="CalcButtons">
                <hr/>
                <button onClick={AC} className="grey">AC</button>
                <button className="grey">+/-</button>
                <button className="grey">%</button>
                <button className="orange">÷</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="orange">x</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button className="orange">-</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className="orange">+</button>
                <button className='zero'>0</button>
                <button>.</button>
                <button className="orange">=</button>
            </div>
        </div>
    );
}
 
export default Calculator;