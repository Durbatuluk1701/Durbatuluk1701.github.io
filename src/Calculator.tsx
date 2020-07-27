import React, { useState, useEffect } from "react";

const Calculator: React.FC = (props) => {
    const [currentTotal, setCurrentTotal] = useState(0);
    const [currentVal, setCurrentVal] = useState<number>(0);
    const [currentOp, setCurrentOp] = useState<string>("");

    const evalTotal = () => {
        switch (currentOp) {
            case "+":
                setCurrentTotal(Number((currentTotal + currentVal).toPrecision(5)));
                break;
            case "-":
                setCurrentTotal(Number((currentTotal - currentVal).toPrecision(5)));
                break;
            case "*":
                setCurrentTotal(Number((currentTotal * currentVal).toPrecision(5)));
                break;
            case "/":
                setCurrentTotal(Number((currentTotal / currentVal).toPrecision(5)));
                break;
            default:
                console.error("No Operation Selected");
                return;
        }
        setCurrentOp("");
        setCurrentVal(0);
    }

    useEffect(() => {
        if (!Number.isInteger(currentTotal) && (currentTotal * 100000) % 100000 === 0) {
            setCurrentTotal(Math.round(currentTotal));
        }
    }, [currentTotal])

    return (
        <div>
            <h1>Calculator</h1>
            <div className="calculatorBox">
                <input type="textbox" value={currentTotal} />
                <input type="textbox" value={currentVal + currentOp} />
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => {
                    return (
                        <button
                            className="calcValButton"
                            id={`calcValButton${val}`}
                            key={`calcValButton${val}`}
                            onClick={() => setCurrentVal(currentVal + val)}
                        >
                            {val}
                        </button>
                    );
                })}
                {["+", "-", "*", "/"].map((val) => {
                    return (
                        <button
                            className="calcOpButton"
                            id={`calcOpButton${val}`}
                            key={`calcOpButton${val}`}
                            onClick={() => setCurrentOp(val)}
                        >
                            {val}
                        </button>
                    )
                })}
                <button style={{ width: "30px", height: "30px" }} onClick={evalTotal}>=</button>
            </div>
        </div>
    );
}

export default Calculator;