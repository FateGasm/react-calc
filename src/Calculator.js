import './CalcButtons.css';
import { useState } from 'react';
import { create, all } from 'mathjs';

//BigNumber prevents cases like 1.2*3 = 3.59996
const config = { number: 'BigNumber' };
const math = create(all, config);

const Calculator = () => {
    //screen output
    const [output, setoutput] = useState("0");

    /**
     * num- current input number
     * oldnum- previous input number
     * 
     * example: 2+3 -> 2 would be oldnum, 3 would be num, + would be operator
     */
    const [num, setNum] = useState("0");
    const [oldnum, setOldnum] = useState("0");
    const [operator, setOperator] = useState();

    //resets everything
    function AC() {
        setoutput("0");
        setNum("0");
        setOldnum("0");
        setOperator();
    }

    //handles number and dot(.) button press
    function numHandler(e) {
        var input = e.target.innerHTML;

        if (num === "0") {
            //if dot is pressed when num is zero, shows "0.". otherwise replaces zero with the number
            if (input === ".") {
                setNum(num + input);
                setoutput(num + input);
            }
            else{    
                setNum(input);
                setoutput(input);
            }
        }
        else {
            setNum(num + input);
            setoutput(num + input);
        }
    }

    //divides number by 100
    function percentageHandler() {
        var result = math.evaluate(num+ "/100").toString();
        setNum(result);
        setoutput(result);
    }

    //unaryMinus inverts the sign of the number
    function changeSign() {
        var result = math.unaryMinus(num).toString();
        setNum(result);
        setoutput(result);
    }

    /** 
    * decides which operator to assign
    * will replace operator if another is pressed
    * example: 7 -> + -> x -> 3 will be 7*3
    */
    function operatorsHandler(e){
        var opInput = e.target.innerHTML;
        if (opInput === "÷") {
            setOperator("/");
        }
        else if (opInput === "x"){
            setOperator("*");
        }
        else {
            setOperator(opInput);
        }
        //prevent updating of values every time operatorsHandler is invoked
        if (!operator) {   
            setOldnum(num);
            setNum("0");
        }
    }

    //combines the values into an expression to be handled by math.evaluate(), then resets everything
    function equalsHandler() {
        if (num && oldnum && operator) {   
            var string = oldnum + operator + num;
            var result = math.evaluate(string).toString();
            setoutput(result);
            setNum("0");
            setOldnum("0");
            setOperator();
        }
    }

    return ( 
        <div>
            <div className="CalcScreen">
                <h1 className="screenOutput">{output}</h1>
            </div>

            <div className="CalcButtons">
                <hr/>
                <button onClick={AC} className="grey">AC</button>
                <button onClick={changeSign} className="grey">+/-</button>
                <button onClick={percentageHandler} className="grey">%</button>
                <button onClick={operatorsHandler} className="orange">÷</button>
                <button onClick={numHandler}>7</button>
                <button onClick={numHandler}>8</button>
                <button onClick={numHandler}>9</button>
                <button onClick={operatorsHandler} className="orange">x</button>
                <button onClick={numHandler}>4</button>
                <button onClick={numHandler}>5</button>
                <button onClick={numHandler}>6</button>
                <button onClick={operatorsHandler} className="orange">-</button>
                <button onClick={numHandler}>1</button>
                <button onClick={numHandler}>2</button>
                <button onClick={numHandler}>3</button>
                <button onClick={operatorsHandler} className="orange">+</button>
                <button onClick={numHandler} className='zero'>0</button>
                <button onClick={numHandler}>.</button>
                <button onClick={equalsHandler} className="orange">=</button>
            </div>
        </div>
    );
}
 
export default Calculator;